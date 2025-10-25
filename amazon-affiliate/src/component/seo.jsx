import { Helmet } from "react-helmet-async";

function SEO() {
  return (
    <Helmet>
      <meta name="google-site-verification" content="googleac25367f8764d93e" />
      <title>Amazon Affiliate Pro Brasil – Aprenda a Ganhar com a Amazon</title>
      <meta name="description" content="Descubra como gerar renda online..." />
      <meta property="og:title" content="Amazon Affiliate Pro Brasil" />
      <meta property="og:description" content="Aprenda a gerar renda online..." />
      <meta property="og:url" content="https://seusite.vercel.app/" />
      <meta property="og:image" content="https://seusite.vercel.app/imagem-da-capa.jpg" />
    </Helmet>
  );
}

export default SEO;
