import React, { useState, type ChangeEvent, type SyntheticEvent, useCallback } from 'react';
import { type FormData, type FormErrors } from '../../types/grlInterfaces';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[0-9+\-\s()]{9,}$/;

export const FormComponent: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    correo: '',
    telefono: '',
    mensaje: '',
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
      case 'nombre':
        return !value || (typeof value === 'string' && value.length <= 3)
          ? 'El nombre es obligatorio'
          : undefined;

      case 'correo':
        if (!value) return 'El correo es obligatorio';
        if (typeof value === 'string' && !EMAIL_REGEX.test(value)) {
          return 'Correo electrónico no válido';
        }
        return undefined;
      
      case 'telefono':
        if (!value) return 'El teléfono es obligatorio';
        if (typeof value === 'string' && !PHONE_REGEX.test(value)) {
          return 'Teléfono no válido';
        }
        return undefined;
      
      case 'mensaje':
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
      // Simulación de envío a API
      console.log('Datos a enviar:', formData);
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Éxito
      setSubmitSuccess(true);
      
      // Resetear formulario
      setFormData({
        nombre: '',
        correo: '',
        telefono: '',
        mensaje: '',
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
    <div className=" w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">

      {submitSuccess && (
        <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg animate-fadeIn">
          <p className="font-semibold">¡Formulario enviado con éxito!</p>
          <p>Nos pondremos en contacto contigo en breve.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        {/* Campo Nombre */}
        <div className="space-y-2">
          <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
            Nombre completo *
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
            onBlur={() => handleBlur('nombre')}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ${
              errors.nombre ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Escribe tu nombre completo"
            aria-invalid={!!errors.nombre}
            aria-describedby={errors.nombre ? 'error-nombre' : undefined}
          />
          {errors.nombre && (
            <p id="error-nombre" className="text-red-500 text-sm mt-1">
              {errors.nombre}
            </p>
          )}
        </div>

        {/* Campo Correo */}
        <div className="space-y-2">
          <label htmlFor="correo" className="block text-sm font-medium text-gray-700">
            Correo electrónico *
          </label>
          <input
            type="email"
            id="correo"
            name="correo"
            value={formData.correo}
            onChange={handleInputChange}
            onBlur={() => handleBlur('correo')}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ${
              errors.correo ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="ejemplo@correo.com"
            aria-invalid={!!errors.correo}
            aria-describedby={errors.correo ? 'error-correo' : undefined}
          />
          {errors.correo && (
            <p id="error-correo" className="text-red-500 text-sm mt-1">
              {errors.correo}
            </p>
          )}
        </div>

        {/* Campo Teléfono */}
        <div className="space-y-2">
          <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">
            Teléfono *
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleInputChange}
            onBlur={() => handleBlur('telefono')}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ${
              errors.telefono ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="+34 123 456 789"
            aria-invalid={!!errors.telefono}
            aria-describedby={errors.telefono ? 'error-telefono' : undefined}
          />
          {errors.telefono && (
            <p id="error-telefono" className="text-red-500 text-sm mt-1">
              {errors.telefono}
            </p>
          )}
        </div>

        {/* Campo Mensaje */}
        <div className="space-y-2">
          <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700">
            Mensaje *
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleInputChange}
            onBlur={() => handleBlur('mensaje')}
            rows={5}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition resize-none ${
              errors.mensaje ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Escribe tu mensaje aquí..."
            aria-invalid={!!errors.mensaje}
            aria-describedby={errors.mensaje ? 'error-mensaje' : undefined}
          />
          {errors.mensaje && (
            <p id="error-mensaje" className="text-red-500 text-sm mt-1">
              {errors.mensaje}
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
                  href="/politicas-privacidad" 
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
                  href="/aviso-legal" 
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
            className={`w-1/3 py-3 px-4 rounded-lg font-semibold text-black transition transform hover:scale-[1.05] ${
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