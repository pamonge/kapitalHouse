import React, { useState, useEffect, useRef } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import { type SimulatorData } from '../../types/grlInterfaces'

const EMAILJS_SERVICE_ID = 'service_vysorfc'
const EMAILJS_TEMPLATE_ID = 'template_l7ebwtz'
const EMAILJS_PUBLIC_KEY = 'pJYqPbAthQ_U3CSDd'

const TIPO_VIVIENDA = ['Primer vivienda', 'Segunda vivienda', 'Inversión'] as const
const CAPITAL_TIPO = ['Ahorros en billete', 'Otro capital'] as const
const SITUACION_LABORAL = ['Indefinido', 'Temporal', 'Temporero', 'Autónomo', 'Pensionista'] as const
const PLAZO_ANOS = Array.from({ length: 26 }, (_, i) => i + 5) // 5 a 30 años

// Fórmula: 80% del valor con aumento 2% si ≤80%, 2.25% si >80%. Plazo 5-30 años.
function calculateApproval(
  montoTotal: number,
  dineroSolicitar: number,
  porcentajeFinanciar: number,
  plazoAnos: number
): { otorgado: number; necesario: number } {
  if (montoTotal <= 0 || plazoAnos < 5 || plazoAnos > 30) return { otorgado: 0, necesario: 0 }
  const factor = porcentajeFinanciar <= 80 ? 1.02 : 1.0225
  const maxAprobado = montoTotal * 0.8 * factor
  const otorgado = Math.min(dineroSolicitar, maxAprobado)
  const necesario = Math.max(0, montoTotal - otorgado)
  return { otorgado, necesario }
}

const STORAGE_KEY = 'kapital_pending_contact'

export function getPendingContactForm(): Record<string, string> | null {
  try {
    const s = sessionStorage.getItem(STORAGE_KEY)
    return s ? JSON.parse(s) : null
  } catch {
    return null
  }
}

export function setPendingContactForm(data: Record<string, string>) {
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

export function clearPendingContactForm() {
  sessionStorage.removeItem(STORAGE_KEY)
}

export const CreditSimulatorComponent: React.FC = () => {
  const labelStyles = 'block text-sm font-semibold text-kapital-grey mb-1 text-left';
  const [searchParams] = useSearchParams()
  const fromContact = searchParams.get('from') === 'contact'

  const [tipoVivienda, setTipoVivienda] = useState('')
  const [montoTotal, setMontoTotal] = useState('')
  const [dineroSolicitar, setDineroSolicitar] = useState('')
  const [plazoAnos, setPlazoAnos] = useState('')
  const [capitalTipo, setCapitalTipo] = useState('')
  const [capitalValor, setCapitalValor] = useState('')
  const [capitalDetalle, setCapitalDetalle] = useState('')
  const [edad, setEdad] = useState('')
  const [situacionLaboral, setSituacionLaboral] = useState('')
  const [antiguedadLaboral, setAntiguedadLaboral] = useState('')
  const [calculated, setCalculated] = useState(false)
  const [result, setResult] = useState<{ otorgado: number; necesario: number } | null>(null)
  const [sending, setSending] = useState(false)
  const [success, setSuccess] = useState(false)
  const resultsRef = useRef<HTMLDivElement>(null)

  const montoNum = parseFloat(montoTotal) || 0
  const solicitarNum = parseFloat(dineroSolicitar) || 0
  const capitalNum = parseFloat(capitalValor) || 0
  const plazoNum = Math.min(30, Math.max(5, parseFloat(plazoAnos) || 25))
  const porcentajeFinanciar = montoNum > 0 ? (solicitarNum / montoNum) * 100 : 0

  useEffect(() => {
    if (montoNum > 0 && solicitarNum > 0 && calculated) {
      const r = calculateApproval(montoNum, solicitarNum, porcentajeFinanciar, plazoNum)
      setResult(r)
    }
  }, [montoNum, solicitarNum, porcentajeFinanciar, plazoNum, calculated])

  useEffect(() => {
    if (calculated && result && resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [calculated, result])

  const handleCalcular = () => {
    if (montoNum <= 0 || solicitarNum <= 0 || !plazoAnos) return
    setCalculated(true)
    const r = calculateApproval(montoNum, solicitarNum, porcentajeFinanciar, plazoNum)
    setResult(r)

    if (fromContact) {
      const pending = getPendingContactForm()
      if (pending) {
        const simulatorData: SimulatorData = {
          tipoVivienda,
          montoTotal: montoNum,
          dineroSolicitar: solicitarNum,
          plazoAnos: plazoNum,
          capitalDisponible: capitalTipo,
          capitalValor: capitalNum,
          capitalDetalle: capitalTipo === 'Otro capital' ? capitalDetalle : undefined,
          porcentajeFinanciar,
          edad: parseFloat(edad) || 0,
          situacionLaboral,
          antiguedadLaboral: parseFloat(antiguedadLaboral) || 0,
          dineroNecesarioExtra: r.necesario,
          dineroAproximadoOtorgado: r.otorgado,
        }
        const lines = [
          'Datos del simulador:',
          `Tipo de vivienda: ${simulatorData.tipoVivienda}`,
          `Monto total: ${simulatorData.montoTotal} €`,
          `Dinero a solicitar: ${simulatorData.dineroSolicitar} €`,
          `Plazo: ${simulatorData.plazoAnos} años`,
          `Capital disponible: ${simulatorData.capitalDisponible} - ${simulatorData.capitalValor} €`,
          ...(simulatorData.capitalDetalle ? [`Detalle capital: ${simulatorData.capitalDetalle}`] : []),
          `Porcentaje a financiar: ${simulatorData.porcentajeFinanciar.toFixed(1)}%`,
          `Edad: ${simulatorData.edad}`,
          `Situación laboral: ${simulatorData.situacionLaboral}`,
          `Antigüedad laboral: ${simulatorData.antiguedadLaboral} años`,
          `Dinero aprox. otorgado: ${simulatorData.dineroAproximadoOtorgado.toFixed(2)} €`,
          `Dinero necesario extra (100%): ${simulatorData.dineroNecesarioExtra.toFixed(2)} €`,
        ]
        const messageWithSimulator = (pending.message || '') + '\n\n' + lines.join('\n')

        setSending(true)
        const templateParams = {
          name: pending.name,
          email: pending.email,
          title: pending.title,
          message: messageWithSimulator,
        }
        emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, { publicKey: EMAILJS_PUBLIC_KEY })
          .then(() => {
            clearPendingContactForm()
            setSuccess(true)
          })
          .catch((err) => console.error(err))
          .finally(() => setSending(false))
      }
    }
  }

  return (
    <div className="container">
      <div className="w-2xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-kapital-blue text-center">Simulador de crédito</h1>

        <div className="bg-white rounded-2xl shadow-lg p-6 space-y-5 text-left font-normal ">
          <div>
            <label className={labelStyles}>Tipo de vivienda *</label>
            <select
              value={tipoVivienda}
              onChange={(e) => setTipoVivienda(e.target.value)}
              className="w-full px-4 py-3 border border-kapital-lightgrey rounded-lg focus:ring-2 focus:ring-kapital-lightbue"
            >
              <option value="">Seleccione...</option>
              {TIPO_VIVIENDA.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
          </div>

          <div>
            <label className={labelStyles}>Monto total del inmueble (€) *</label>
            <input
              type="text"
              inputMode="numeric"
              value={montoTotal}
              onChange={(e) => setMontoTotal(e.target.value.replace(/\D/g, ''))}
              placeholder="Ej: 200000"
              className="w-full px-4 py-3 border border-kapital-lightgrey rounded-lg focus:ring-2 focus:ring-kapital-lightbue"
            />
          </div>

          <div>
            <label className={labelStyles}>Dinero a solicitar (€) *</label>
            <input
              type="text"
              inputMode="numeric"
              value={dineroSolicitar}
              onChange={(e) => setDineroSolicitar(e.target.value.replace(/\D/g, ''))}
              placeholder="Ej: 160000"
              className="w-full px-4 py-3 border border-kapital-lightgrey rounded-lg focus:ring-2 focus:ring-kapital-lightbue"
            />
          </div>

          <div>
            <label className={labelStyles}>Plazo del préstamo (años) *</label>
            <select
              value={plazoAnos}
              onChange={(e) => setPlazoAnos(e.target.value)}
              className="w-full px-4 py-3 border border-kapital-lightgrey rounded-lg focus:ring-2 focus:ring-kapital-lightbue"
            >
              <option value="">Seleccione (5-30 años)...</option>
              {PLAZO_ANOS.map((a) => (
                <option key={a} value={a}>{a} años</option>
              ))}
            </select>
          </div>

          <div>
            <label className={labelStyles}>Capital disponible para la adquisición *</label>
            <select
              value={capitalTipo}
              onChange={(e) => setCapitalTipo(e.target.value)}
              className="w-full px-4 py-3 border border-kapital-lightgrey rounded-lg focus:ring-2 focus:ring-kapital-lightbue mb-2"
            >
              <option value="">Seleccione...</option>
              {CAPITAL_TIPO.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
            <input
              type="text"
              inputMode="numeric"
              value={capitalValor}
              onChange={(e) => setCapitalValor(e.target.value.replace(/\D/g, ''))}
              placeholder="Importe en €"
              className="w-full px-4 py-3 border border-kapital-lightgrey rounded-lg focus:ring-2 focus:ring-kapital-lightbue"
            />
            {capitalNum > 0 && capitalNum < 5000 && (
              <span className="block text-amber-600 text-sm mt-1">
                Se sugiere tener un fondo de ahorro para gastos administrativos propio de la compra del inmueble.
              </span>
            )}
            {capitalTipo === 'Otro capital' && (
              <input
                type="text"
                value={capitalDetalle}
                onChange={(e) => setCapitalDetalle(e.target.value)}
                placeholder="Aclarar tipo (casa, vehículo, terreno, etc.)"
                className="w-full mt-2 px-4 py-3 border border-kapital-lightgrey rounded-lg focus:ring-2 focus:ring-kapital-lightbue"
              />
            )}
          </div>

          <div className="bg-kapital-lightgrey/50 rounded-lg p-3">
            <span className="text-sm font-semibold text-kapital-grey">Porcentaje a financiar: </span>
            <span className="text-kapital-blue font-bold">
              {porcentajeFinanciar > 0 ? `${porcentajeFinanciar.toFixed(1)}%` : '—'}
            </span>
          </div>

          <div>
            <label className={labelStyles}>Edad *</label>
            <input
              type="text"
              inputMode="numeric"
              value={edad}
              onChange={(e) => setEdad(e.target.value.replace(/\D/g, ''))}
              placeholder="Ej: 35"
              className="w-full px-4 py-3 border border-kapital-lightgrey rounded-lg focus:ring-2 focus:ring-kapital-lightbue"
            />
          </div>

          <div>
            <label className={labelStyles}>Situación laboral *</label>
            <select
              value={situacionLaboral}
              onChange={(e) => setSituacionLaboral(e.target.value)}
              className="w-full px-4 py-3 border border-kapital-lightgrey rounded-lg focus:ring-2 focus:ring-kapital-lightbue"
            >
              <option value="">Seleccione...</option>
              {SITUACION_LABORAL.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
          </div>

          <div>
            <label className={labelStyles}>Antigüedad laboral (años) *</label>
            <input
              type="text"
              inputMode="numeric"
              value={antiguedadLaboral}
              onChange={(e) => setAntiguedadLaboral(e.target.value.replace(/\D/g, ''))}
              placeholder="Ej: 5"
              className="w-full px-4 py-3 border border-kapital-lightgrey rounded-lg focus:ring-2 focus:ring-kapital-lightbue"
            />
          </div>

          <div className='flex justify-center'>
            <button
              type="button"
              onClick={handleCalcular}
              disabled={montoNum <= 0 || solicitarNum <= 0 || !plazoAnos || sending}
              className="min-w-3xs py-3 bg-kapital-green text-black font-bold rounded-xl hover:scale-[1.02] transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {sending ? 'Enviando...' : 'Calcular'}
            </button>
          </div>
          
        </div>

        {calculated && result && (
          <div className="space-y-4">
            {success && (
              <div className="bg-green-100 text-green-800 rounded-2xl p-6 text-center">
                <p className="text-xl font-bold mb-2">¡Muchas gracias!</p>
                <p>Su consulta se envió con éxito. Incluimos los datos del simulador. Nuestros asesores se pondrán en contacto contigo.</p>
              </div>
            )}
            <div ref={resultsRef} id="resultados-simulador" className="bg-kapital-blue text-white rounded-2xl p-6 space-y-4 scroll-mt-8">
            <h2 className="text-xl font-bold">Resultado de la simulación</h2>
            <div>
              <p className="text-kapital-lightgrey">¿Cuánto dinero necesitas? (extra al préstamo para cubrir el 100%)</p>
              <p className="text-2xl font-bold text-kapital-green">
                {result.necesario.toLocaleString('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })}
              </p>
            </div>
            <div>
              <p className="text-kapital-lightgrey">Dinero aproximado otorgado por el préstamo</p>
              <p className="text-2xl font-bold">
                {result.otorgado.toLocaleString('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })}
              </p>
            </div>

            {/* Mensajes positivos y de advertencia */}
            {result.necesario <= montoNum * 0.1 && result.necesario > 0 && (
              <p className="text-kapital-green font-semibold text-sm">
                ✓ Tu perfil permite acceder a la mayor parte de la financiación necesaria. ¡Estás muy cerca!
              </p>
            )}
            {result.necesario === 0 && (
              <p className="text-kapital-green font-semibold text-sm">
                ✓ El préstamo aproximado cubriría el 100% del valor. Te contactaremos para una valoración personalizada.
              </p>
            )}
            {result.necesario > montoNum * 0.3 && (
              <p className="text-amber-300 font-semibold text-sm">
                ⚠ Necesitarás un aporte adicional significativo. Te recomendamos revisar tus ahorros o el precio del inmueble.
              </p>
            )}
            {porcentajeFinanciar > 80 && (
              <p className="text-amber-300 font-semibold text-sm">
                ⚠ La financiación superior al 80% suele implicar condiciones más estrictas. Nuestros asesores te orientarán.
              </p>
            )}
            <p className="text-sm opacity-90 pt-2">
              La información brindada es una aproximación del préstamo a otorgar. Aguarda el contacto de nuestros agentes para darte una atención personalizada.
            </p>
            {!fromContact && (
              <Link
                to="/contact"
                className="inline-block mt-4 px-6 py-3 bg-kapital-green text-black font-bold rounded-xl"
              >
                Contactar
              </Link>
            )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
