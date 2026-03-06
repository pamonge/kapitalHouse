import React, { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'

const FORMAT_EUR = (value: number) =>
  new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(value)

const FORMAT_EUR_DECIMAL = (value: number) =>
  new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(value)

function calculateMortgage(principal: number, annualRate: number, years: number) {
  if (principal <= 0 || years <= 0) {
    return { monthlyPayment: 0, totalPayment: 0, totalInterest: 0 }
  }
  const monthlyRate = annualRate / 100 / 12
  const numPayments = years * 12
  let monthlyPayment = 0
  if (monthlyRate === 0) {
    monthlyPayment = principal / numPayments
  } else {
    monthlyPayment =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
      (Math.pow(1 + monthlyRate, numPayments) - 1)
  }
  const totalPayment = monthlyPayment * numPayments
  const totalInterest = totalPayment - principal
  return { monthlyPayment, totalPayment, totalInterest }
}

export const MortgageCalculatorComponent: React.FC = () => {
  const [principal, setPrincipal] = useState<string>('200000')
  const [years, setYears] = useState<string>('25')
  const [annualRate, setAnnualRate] = useState<string>('3.5')

  const principalNum = parseFloat(principal) || 0
  const yearsNum = parseFloat(years) || 0
  const annualRateNum = parseFloat(annualRate) || 0

  const { monthlyPayment, totalPayment, totalInterest } = useCallback(
    () => calculateMortgage(principalNum, annualRateNum, yearsNum),
    [principalNum, annualRateNum, yearsNum]
  )()

  const handleYearsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value.replace(/[^0-9.]/g, '')
    setYears(v || '')
  }

  const handleRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value.replace(',', '.').replace(/[^0-9.]/g, '')
    setAnnualRate(v || '')
  }

  return (
    <div className="container">
      <div className="flex flex-col gap-8 max-w-2xl mx-auto">
        <h1 className="text-3xl lg:text-4xl font-bold text-kapital-blue text-center">
          Calculadora de hipotecas
        </h1>
        <p className="text-lg text-kapital-grey text-center">
          Simula tu cuota mensual introduciendo el capital, el plazo y el tipo de interés.
        </p>

        <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 border border-kapital-lightgrey">
          <div className="space-y-6">
            {/* Capital */}
            <div>
              <label htmlFor="principal" className="block text-sm font-semibold text-kapital-grey mb-2">
                Capital a financiar (€)
              </label>
              <input
                id="principal"
                type="text"
                inputMode="numeric"
                value={principal}
                onChange={(e) => setPrincipal(e.target.value.replace(/\D/g, ''))}
                placeholder="200000"
                className="w-full px-4 py-3 border border-kapital-lightgrey rounded-lg focus:ring-2 focus:ring-kapital-lightbue focus:border-kapital-lightbue transition"
              />
            </div>

            {/* Plazo */}
            <div>
              <label htmlFor="years" className="block text-sm font-semibold text-kapital-grey mb-2">
                Plazo (años)
              </label>
              <input
                id="years"
                type="text"
                inputMode="decimal"
                value={years}
                onChange={handleYearsChange}
                placeholder="25"
                className="w-full px-4 py-3 border border-kapital-lightgrey rounded-lg focus:ring-2 focus:ring-kapital-lightbue focus:border-kapital-lightbue transition"
              />
            </div>

            {/* Tipo de interés */}
            <div>
              <label htmlFor="rate" className="block text-sm font-semibold text-kapital-grey mb-2">
                Tipo de interés anual (%)
              </label>
              <input
                id="rate"
                type="text"
                inputMode="decimal"
                value={annualRate}
                onChange={handleRateChange}
                placeholder="3.5"
                className="w-full px-4 py-3 border border-kapital-lightgrey rounded-lg focus:ring-2 focus:ring-kapital-lightbue focus:border-kapital-lightbue transition"
              />
            </div>
          </div>

          {/* Resultados */}
          <div className="mt-8 pt-6 border-t border-kapital-lightgrey space-y-4">
            <div className="flex justify-between items-center py-2">
              <span className="text-kapital-grey font-medium">Cuota mensual</span>
              <span className="text-xl font-bold text-kapital-blue">
                {principalNum > 0 && yearsNum > 0
                  ? FORMAT_EUR_DECIMAL(monthlyPayment)
                  : '—'}
              </span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-kapital-grey font-medium">Total a pagar</span>
              <span className="text-lg font-semibold text-kapital-darkgrey">
                {principalNum > 0 && yearsNum > 0 ? FORMAT_EUR(totalPayment) : '—'}
              </span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-kapital-grey font-medium">Total intereses</span>
              <span className="text-lg font-semibold text-kapital-grey">
                {principalNum > 0 && yearsNum > 0 ? FORMAT_EUR(totalInterest) : '—'}
              </span>
            </div>
          </div>

          <p className="mt-6 text-sm text-kapital-grey/80 text-center">
            Cálculo orientativo. Las condiciones finales dependerán de tu perfil y de la entidad.
          </p>
        </div>

        <div className="bg-kapital-blue rounded-2xl p-6 text-kapital-white text-center">
          <p className="font-semibold mb-2">¿Necesitas asesoramiento personalizado?</p>
          <p className="text-sm opacity-90">
            Nuestros asesores estudiarán tu caso y buscarán la mejor opción para ti.
          </p>
          <Link
            to="/contact"
            className="inline-block mt-4 px-6 py-3 bg-kapital-green text-black font-bold rounded-xl hover:scale-105 transition transform"
          >
            Contactar
          </Link>
        </div>
      </div>
    </div>
  )
}
