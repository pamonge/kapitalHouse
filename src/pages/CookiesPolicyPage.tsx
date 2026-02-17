import React from 'react'

export const CookiesPolicyPage: React.FC = () => {
    return (
        <div className="cookie-policy">
          <p>
            Le informamos que, en cumplimiento de la normativa vigente en materia de protección de datos, este sitio web utiliza cookies propias y de terceros.
          </p>
    
          <h2>1. ¿Qué es una cookie?</h2>
          <p>
            Una cookie es un fichero que se descarga en el dispositivo del usuario cuando se accede a la página web, con la finalidad de almacenar y recuperar información sobre la navegación que se realiza en el dispositivo.
          </p>
    
          <h2>2. Tipos de cookies</h2>
    
          <h3>2.1. Según la entidad que las gestione</h3>
          <ul>
            <li>
              <strong>Cookies propias</strong><br />
              Son aquéllas que se envían al equipo terminal del usuario desde un equipo o dominio gestionado por el propio editor y desde el que se presta el servicio solicitado por el usuario.
            </li>
            <li>
              <strong>Cookies de tercero</strong><br />
              Son aquellas que se envían al equipo terminal del Usuario desde un equipo o dominio que no es gestionado por el editor, sino por otra entidad que trata los datos obtenidos a través de las cookies. Tipologías de cookies de terceros:
              <ul>
                <li>
                  <strong>Load-balancing cookies</strong><br />
                  Se usan para recabar datos que ayudan a regular, dividir y gestionar la congestión de los servidores. Se consideran necesarias para la comunicación a través de la red. Únicamente identifican un servidor, por lo tanto, no contienen datos personales.
                </li>
                <li>
                  <strong>Cookies para customizar la interfaz de usuario</strong><br />
                  Se usan, entre otras, para indicar el idioma preferido o el formato de contenido. No requieren ningún identificador particular, por lo tanto, no constituirán información personal.
                </li>
              </ul>
            </li>
          </ul>
    
          <h3>2.2. Según el tiempo que la cookie permanece activa en el equipo</h3>
          <ul>
            <li>
              <strong>Cookies de sesión</strong><br />
              Son cookies temporales que permanecen en el archivo de cookies de su navegador hasta que abandone la página web, por lo que ninguna queda registrada en el disco duro del usuario. La información obtenida por medio de estas cookies sirve para analizar las pautas de tráfico de la web. A la larga, esto nos permite proporcionar una mejor experiencia para mejorar el contenido y facilitar su uso.
            </li>
            <li>
              <strong>Cookies permanentes</strong><br />
              Son almacenadas en el disco duro y nuestra web las lee cada vez que el usuario realiza una nueva visita. Una cookie permanente puede ser accedida y tratada durante un periodo definido por el responsable de la cookie, después de esa fecha dejará de funcionar.
            </li>
          </ul>
    
          <h3>2.3. Según su finalidad</h3>
          <ul>
            <li>
              <strong>Cookies técnicas</strong><br />
              Permiten al usuario la navegación a través de una página web, plataforma o aplicación y la utilización de las diferentes opciones o servicios que en ella existan.
            </li>
            <li>
              <strong>Cookies de personalización</strong><br />
              Permiten al usuario acceder al servicio con algunas características de carácter general predefinidas en función de una serie de criterios en el terminal del usuario como, por ejemplo, el idioma, el tipo de navegador a través del cual accede al servicio, la configuración regional desde donde accede al servicio, etc.
            </li>
            <li>
              <strong>Cookies de análisis</strong><br />
              Permiten al responsable de las mismas el seguimiento y análisis del comportamiento de los usuarios de los sitios web a los que están vinculadas. La información recogida mediante este tipo de cookies se utiliza en la medición de la actividad de los sitios web, aplicación o plataforma y para la elaboración de perfiles de navegación de los usuarios de dichos sitios, aplicaciones y plataformas, con el fin de introducir mejoras en función del análisis de los datos de uso que hacen los usuarios del servicio.
            </li>
            <li>
              <strong>Cookies publicitarias</strong><br />
              Permiten la gestión, de la forma más eficaz posible, de los espacios publicitarios que, en su caso, el editor haya incluido en una página web, aplicación o plataforma desde la que presta el servicio solicitado en base a criterios como el contenido editado o la frecuencia en la que se muestran los anuncios.
            </li>
            <li>
              <strong>Cookies de publicidad comportamental</strong><br />
              Estas cookies almacenan información del comportamiento de los usuarios obtenida a través de la observación continuada de sus hábitos de navegación, lo que permite desarrollar un perfil específico para mostrar publicidad en función del mismo.
            </li>
          </ul>
        </div>
      );
}
