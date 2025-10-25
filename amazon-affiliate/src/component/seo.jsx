import { Helmet } from "react-helmet-async";

function SEO() {
  return (
    <Helmet>
      {/* ==== TÍTULOS E DESCRIÇÃO ==== */}
      <title>
        Amazon Affiliate Pro Brasil | Renda Extra com Marketing de Afiliados
      </title>
      <meta
        name="description"
        content="Aprenda a gerar renda extra com o Amazon Affiliate Pro Brasil. Domine o marketing de afiliados com estratégias práticas, suporte e garantia de 7 dias!"
      />
      <meta
        name="keywords"
        content="Amazon Affiliate, afiliados, marketing digital, renda extra, Hotmart, Eduzz, cursos online, dinheiro na internet"
      />
      <meta name="author" content="Amazon Affiliate Pro Brasil" />
      <meta name="robots" content="index, follow" />

      {/* ==== SEO SOCIAL (Open Graph + Twitter) ==== */}
      <meta property="og:title" content="Amazon Affiliate Pro Brasil" />
      <meta
        property="og:description"
        content="Descubra como ganhar dinheiro com o Amazon Affiliate Pro Brasil — o curso completo de marketing de afiliados no Brasil."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://amazon-affiliate-knqzpj76x-victorssxs-projects.vercel.app/" />
      <meta property="og:image" content="https://amazon-affiliate-knqzpj76x-victorssxs-projects.vercel.app/capa.png" />
      <meta property="og:locale" content="pt_BR" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Amazon Affiliate Pro Brasil" />
      <meta
        name="twitter:description"
        content="Aprenda a construir uma renda real com o Amazon Affiliate Pro Brasil."
      />
      <meta
        name="twitter:image"
        content="https://amazon-affiliate-knqzpj76x-victorssxs-projects.vercel.app/capa.png"
      />

      {/* ==== LINK PRINCIPAL ==== */}
      <link rel="canonical" href="https://amazon-affiliate-knqzpj76x-victorssxs-projects.vercel.app/" />

      {/* ==== FAVICON ==== */}
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    </Helmet>
  );
}

export default SEO;
