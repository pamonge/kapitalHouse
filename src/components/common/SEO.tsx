import { Helmet } from 'react-helmet';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
}

const DEFAULT_TITLE = 'Kapital House';
const DEFAULT_DESCRIPTION = 'Kapital House - hipotecas y creditos para viviendas, propiedades o bienes raices. Solicitud de creditos hipotecarios.';
const DEFAULT_KEYWORDS = 'bienes raices, creditos, hipotecas, vivendas, prestamos, kapital, house, mondial, inmobiliaria, mercado, compra, propiedades, Espana';
const SITE_URL = 'https://kapitalhouse.es';

export const SEO: React.FC<SEOProps> = ({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  image = '/kapitalLogo.png',
  url,
  type = 'website',
  noindex = false,
}) => {
  const fullTitle = title ? `${title} | ${DEFAULT_TITLE}` : DEFAULT_TITLE;
  const fullUrl = url ? `${SITE_URL}${url}` : SITE_URL;
  const fullImage = image.startsWith('http') ? image : `${SITE_URL}${image}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />

      {/* Robots */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content={DEFAULT_TITLE} />
      <meta property="og:locale" content="es_ES" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* Additional SEO */}
      <meta name="author" content="Kapital House" />
      <meta name="geo.region" content="ES" />
      <meta name="geo.placename" content="Espana" />
      <html lang="es" />
    </Helmet>
  );
};

export default SEO;