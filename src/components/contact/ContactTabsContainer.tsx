import React, { useState } from 'react'
import { FormComponent } from './FormComponent'

const TAB_STYLES = {
  base: 'px-6 py-3 font-semibold rounded-t-xl transition-all duration-300 flex-1',
  active: 'bg-white text-kapital-blue shadow-[0_-2px_4px_rgba(0,0,0,0.06)]',
  inactive: 'bg-kapital-lightbue/70 text-kapital-white hover:bg-kapital-lightbue/90',
} as const

export const ContactTabsContainer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'particulares' | 'empresas'>('particulares')

  return (
    <div className='flex max-lg:flex-col bg-kapital-gradientform rounded-t-[5rem] px-3 lg:px-15 py-25 justify-between relative z-10 gap-7'>
      <div className='flex flex-col gap-10 lg:w-1/2 text-kapital-white text-center'>
        <div className='flex flex-col gap-3 text-2xl lg:text-5xl font-bold'>
          <p>
            Comprar tu casa no tiene por qué ser complicado.
          </p>
          <p className='text-kapital-green'>
            ¡Estamos para ayudarte!
          </p>
        </div>
        <div>
          <p className='lg:text-3xl'>
            Completa el formulario, te informaremos sin compromiso y obtienes acceso al <strong>simulador de hipotecas</strong>.
          </p>
        </div>
      </div>
      <div className='flex flex-col items-center lg:w-1/2 min-w-0'>
        <div
          id={activeTab === 'particulares' ? 'panel-particulares' : 'panel-empresas'}
          role="tabpanel"
          aria-labelledby={`tab-${activeTab}`}
          className='w-full max-w-lg shrink-0'
        >
          {/* Solapas sobre el formulario */}
          <div className='flex gap-0.5 -mb-px'>
            <button
              type="button"
              onClick={() => setActiveTab('particulares')}
              className={`${TAB_STYLES.base} ${activeTab === 'particulares' ? TAB_STYLES.active : TAB_STYLES.inactive}`}
              aria-selected={activeTab === 'particulares'}
              aria-controls="panel-particulares"
              id="tab-particulares"
            >
              Particulares
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('empresas')}
              className={`${TAB_STYLES.base} ${activeTab === 'empresas' ? TAB_STYLES.active : TAB_STYLES.inactive}`}
              aria-selected={activeTab === 'empresas'}
              aria-controls="panel-empresas"
              id="tab-empresas"
            >
              Empresas
            </button>
          </div>
          <FormComponent variant={activeTab} withTabs />
        </div>
      </div>
    </div>
  )
}
