function ProductSection() {
  return (
    <section id="product" className="product">
      <div className="product-content">
        <img
          src="https://static-media.hotmart.com/ZpA4NOBxoh5VVrPCk09J_kO3KVE=/300x300/smart/filters:format(webp):background_color(white)/hotmart/product_pictures/36229a43-d56d-4166-899d-2670b7e69843/imagem_20230213_160331180.png?w=920"
          alt="Amazon Affiliate Pro Brasil"
          className="product-img"
        />
        <div className="product-info">
          <h3>Aprenda como se tornar um Afiliado Amazon de sucesso</h3>
          <p>
            O <strong>Amazon Affiliate Pro Brasil</strong> é a primeira edição licenciada no país
            do sucesso de vendas nos EUA. Você aprenderá passo a passo como gerar
            renda passiva com produtos Amazon — mesmo começando do zero.
          </p>

          <ul>
            <li>✅ Método prático e atualizado</li>
            <li>✅ Acesso vitalício ao conteúdo</li>
            <li>✅ Suporte direto ao afiliado</li>
          </ul>

          <div className="product-price">
            <p className="price">R$ 39,90</p>
            <a
              href="https://go.hotmart.com/S102503336O"
              className="buy-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Comprar Agora
            </a>
            <p className="cta-note">🔒 Garantia de 7 dias — você tem acesso completo sem risco</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductSection;