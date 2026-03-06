import React from 'react'
import { useNavigate } from 'react-router-dom'

interface SimulatorModalProps {
  onConfirm: () => void;
  onDecline: () => void;
}

export const SimulatorModal: React.FC<SimulatorModalProps> = ({ onConfirm, onDecline }) => {
  const navigate = useNavigate();

  const handleSi = () => {
    onConfirm();
    navigate('/cred-simulator?from=contact');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 text-center">
        <p className="text-lg text-kapital-grey mb-6">
          ¡Muchas gracias por tu consulta! Un asesor especializado te responderá a la brevedad.
          ¿Te gustaría realizar una simulación de tu préstamo?
        </p>
        <div className="flex gap-4 justify-center">
          <button
            type="button"
            onClick={handleSi}
            className="px-6 py-3 bg-kapital-green text-black font-bold rounded-xl hover:scale-105 transition"
          >
            Sí
          </button>
          <button
            type="button"
            onClick={onDecline}
            className="px-6 py-3 bg-kapital-blue text-white font-bold rounded-xl hover:scale-105 transition"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};
