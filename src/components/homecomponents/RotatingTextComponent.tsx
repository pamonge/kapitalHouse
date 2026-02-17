import { useState, useEffect } from 'react';

export const RotatingTextsComponent: React.FC = () => {
  const texts = [
    'la seguridad que buscas',
    'las mejores condiciones',
    'el asesoramiento que necesitas'
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex flex-col lg:text-5xl text-2xl font-extrabold text-center gap-3'>
      <h3>La financiación que sueñas con</h3>
      
      <div className='relative h-[1.2em]'> {/* Ajusta la altura según necesites */}
        {texts.map((text, index) => (
          <h3
            key={index}
            className={`text-kapital-lightbue absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {text}
          </h3>
        ))}
      </div>
    </div>
  );
};