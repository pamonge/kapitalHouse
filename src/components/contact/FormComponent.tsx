import React, { useState, useRef, type ChangeEvent, type SyntheticEvent, useCallback } from 'react';
import emailjs from '@emailjs/browser';
import { type FormData, type FormErrors } from '../../types/grlInterfaces';

// 👇 Reemplaza con tus credenciales de EmailJS (https://www.emailjs.com/)
const EMAILJS_SERVICE_ID = 'service_vysorfc';   // ID del servicio
const EMAILJS_TEMPLATE_ID = 'template_l7ebwtz'; // ID del template
const EMAILJS_PUBLIC_KEY = 'pJYqPbAthQ_U3CSDd';   // Clave pública

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[0-9+\-\s()]{9,}$/;

export const FormComponent: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    title: '',
    message: '',
    politicas: false,
    avisoLegal: false
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Manejar cambios con useCallback para mejor rendimiento
  const handleInputChange = useCallback((
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }

    // Limpiar error cuando el usuario comienza a escribir
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  }, [errors]);

  // Validación individual por campo
  const validateField = (name: keyof FormData, value: string | boolean): string | undefined => {
    switch (name) {
      case 'name':
        return !value || (typeof value === 'string' && value.length <= 3)
          ? 'El nombre es obligatorio'
          : undefined;

      case 'email':
        if (!value) return 'El correo es obligatorio';
        if (typeof value === 'string' && !EMAIL_REGEX.test(value)) {
          return 'Correo electrónico no válido';
        }
        return undefined;
      
      case 'title':
        if (!value) return 'El teléfono es obligatorio';
        if (typeof value === 'string' && !PHONE_REGEX.test(value)) {
          return 'Teléfono no válido';
        }
        return undefined;
      
      case 'message':
        return !value ? 'El mensaje es obligatorio' : undefined;
      
      case 'politicas':
        return !value ? 'Debes aceptar las políticas de privacidad' : undefined;
      
      case 'avisoLegal':
        return !value ? 'Debes aceptar el aviso legal' : undefined;
      
      default:
        return undefined;
    }
  };

  // Validación completa del formulario
  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors = {};
    
    Object.keys(formData).forEach(key => {
      const fieldName = key as keyof FormData;
      const error = validateField(fieldName, formData[fieldName]);
      if (error) {
        newErrors[fieldName] = error;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  // Manejar envío con SyntheticEvent
  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setErrors(prev => ({ ...prev, submit: undefined }));

    try {
      if (!formRef.current) throw new Error('Formulario no encontrado');

      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      
      // Éxito
      setSubmitSuccess(true);
      
      // Resetear formulario
      setFormData({
        name: '',
        email: '',
        title: '',
        message: '',
        politicas: false,
        avisoLegal: false
      });
      
      // Ocultar mensaje de éxito después de 5 segundos
      setTimeout(() => setSubmitSuccess(false), 5000);
      
    } catch (error) {
      console.error('Error de envío:', error);
      setErrors(prev => ({
        ...prev,
        submit: 'Error al enviar el formulario. Por favor, inténtalo de nuevo.'
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  // Función para manejar blur y validar campo individual
  const handleBlur = useCallback((fieldName: keyof FormData) => {
    const error = validateField(fieldName, formData[fieldName]);
    setErrors(prev => ({
      ...prev,
      [fieldName]: error
    }));
  }, [formData]);

  return (
    <div className=" w-full max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">

      {submitSuccess && (
        <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg animate-fadeIn">
          <p className="font-semibold">¡Formulario enviado con éxito!</p>
          <p>Nos pondremos en contacto contigo en breve.</p>
        </div>
      )}

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" noValidate>
        {/* Campo Nombre - EmailJS: {{name}} */}
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Nombre completo *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            onBlur={() => handleBlur('name')}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Escribe tu nombre completo"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'error-name' : undefined}
          />
          {errors.name && (
            <p id="error-name" className="text-red-500 text-sm mt-1">
              {errors.name}
            </p>
          )}
        </div>

        {/* Campo Correo - EmailJS: {{email}} */}
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Correo electrónico *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            onBlur={() => handleBlur('email')}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="ejemplo@correo.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'error-email' : undefined}
          />
          {errors.email && (
            <p id="error-email" className="text-red-500 text-sm mt-1">
              {errors.email}
            </p>
          )}
        </div>

        {/* Campo Teléfono - EmailJS: {{title}} */}
        <div className="space-y-2">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Teléfono *
          </label>
          <input
            type="tel"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            onBlur={() => handleBlur('title')}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ${
              errors.title ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="+34 123 456 789"
            aria-invalid={!!errors.title}
            aria-describedby={errors.title ? 'error-title' : undefined}
          />
          {errors.title && (
            <p id="error-title" className="text-red-500 text-sm mt-1">
              {errors.title}
            </p>
          )}
        </div>

        {/* Campo Mensaje - EmailJS: {{message}} */}
        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Mensaje *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            onBlur={() => handleBlur('message')}
            rows={5}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition resize-none ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Escribe tu mensaje aquí..."
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'error-message' : undefined}
          />
          {errors.message && (
            <p id="error-message" className="text-red-500 text-sm mt-1">
              {errors.message}
            </p>
          )}
        </div>

        {/* Checkboxes */}
        <div className="space-y-4">
          {/* Políticas de Privacidad */}
          <div className={`px-4 rounded-lg ${errors.politicas ? 'bg-red-50' : ''}`}>
            <div className="flex items-start">
              <input
                type="checkbox"
                id="politicas"
                name="politicas"
                checked={formData.politicas}
                onChange={handleInputChange}
                onBlur={() => handleBlur('politicas')}
                className="mt-1 mr-3 h-5 w-5"
                aria-invalid={!!errors.politicas}
                aria-describedby={errors.politicas ? 'error-politicas' : undefined}
              />
              <label htmlFor="politicas" className="text-sm text-gray-700 cursor-pointer">
                He leído y acepto la{' '}
                <a 
                  href="/privacypolicy" 
                  className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Política de Privacidad
                </a>{' '}
                *
              </label>
            </div>
            {errors.politicas && (
              <p id="error-politicas" className="text-red-500 text-sm ml-8">
                {errors.politicas}
              </p>
            )}
          </div>

          {/* Aviso Legal */}
          <div className={`px-4 rounded-lg ${errors.avisoLegal ? 'bg-red-50' : ''}`}>
            <div className="flex items-start">
              <input
                type="checkbox"
                id="avisoLegal"
                name="avisoLegal"
                checked={formData.avisoLegal}
                onChange={handleInputChange}
                onBlur={() => handleBlur('avisoLegal')}
                className="mt-1 mr-3 h-5 w-5"
                aria-invalid={!!errors.avisoLegal}
                aria-describedby={errors.avisoLegal ? 'error-avisoLegal' : undefined}
              />
              <label htmlFor="avisoLegal" className="text-sm text-gray-700 cursor-pointer">
                He leído y acepto el{' '}
                <a 
                  href="/legal" 
                  className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Aviso Legal
                </a>{' '}
                *
              </label>
            </div>
            {errors.avisoLegal && (
              <p id="error-avisoLegal" className="text-red-500 text-sm mt-2 ml-8">
                {errors.avisoLegal}
              </p>
            )}
          </div>
        </div>

        {/* Botón de envío */}
        <div className="flex pt-4 justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`max-lg:w-fit w-1/3 py-3 px-4 rounded-lg font-semibold text-black transition transform hover:scale-[1.05] ${
              isSubmitting
                ? 'bg-kapital-lightbue cursor-not-allowed'
                : 'bg-kapital-green focus:ring-2 focus:ring-offset-2'
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 mr-3 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Enviando...
              </span>
            ) : (
              'Enviar Mensaje'
            )}
          </button>
        </div>

        {/* Error de envío general */}
        {errors.submit && (
          <div className="p-4 bg-red-100 text-red-700 rounded-lg animate-shake">
            <p className="font-semibold">{errors.submit}</p>
          </div>
        )}
      </form>

      {/* Información adicional */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-600 text-center">
          Los campos marcados con * son obligatorios.
        </p>
      </div>
    </div>
  );
};