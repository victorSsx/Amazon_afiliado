function AboutSection() {
  return (
    <section id="sobre" className="about">
      <div className="container">
        <h2>O que é o Amazon Affiliate Pro Brasil?</h2>
        <p>
          O <strong>Amazon Affiliate Pro Brasil</strong> é um treinamento online completo
          que ensina como construir uma renda consistente como afiliado da Amazon,
          mesmo começando do zero. Aprenda a criar sites, escolher produtos lucrativos
          e gerar tráfego que converte.
        </p>

        <div className="about-content">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThrdJ9DkNuUJ4MjJHQqxU-ac1tr-p09-HWkQ&s" alt="Amazon Affiliate Pro Brasil" className="product-image" />
          
          <div className="text">
            <h3>Você vai aprender:</h3>
            <ul>
              <li>✅ Como se cadastrar e configurar sua conta de afiliado Amazon</li>
              <li>✅ Estratégias de tráfego orgânico e pago</li>
              <li>✅ Como criar páginas que realmente vendem</li>
              <li>✅ Ferramentas e atalhos usados por afiliados profissionais</li>
            </ul>

            <h3>Para quem é:</h3>
            <p>
              Ideal para quem quer começar a ganhar online de forma estruturada e segura,
              sem depender de redes sociais ou sorte.
            </p>

            <a href="#adquirir" className="btn-primary">Ver mais detalhes</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;