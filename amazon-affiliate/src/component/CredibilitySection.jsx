
function CredibilitySection() {
  return (
    <section id="beneficios" className="credibility">
      <div className="credibility-container">
        <h3>Conteúdo Licenciado e Reconhecido no Brasil</h3>

        <p>
          O <strong>Amazon Affiliate Pro Brasil</strong> é a primeira edição
          licenciada oficialmente no país, inspirada no sucesso de vendas nos
          Estados Unidos. Agora, o mesmo conteúdo chega em português para
          orientar novos afiliados com um método claro e acessível.
        </p>

        <div className="credibility-badges">
          <div className="badge">
            <img
              src="https://cdn-icons-png.flaticon.com/512/446/446075.png"
              alt="Selo Licenciado"
            />
            <span>Edição Licenciada no Brasil</span>
          </div>

          <div className="badge">
            <img
              src="https://cdn-icons-png.flaticon.com/512/595/595067.png"
              alt="Selo CUFA"
            />
            <span>10% das vendas destinadas à CUFA</span>
          </div>

          <div className="badge">
            <img
              src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
              alt="Afiliado Amazon"
            />
            <span>Afiliado Amazon Brasil</span>
          </div>
        </div>

        <a href="https://go.hotmart.com/S102503336O" className="cta-btn">
          Acessar Agora
        </a>
      </div>
    </section>
  );
}

export default CredibilitySection;