import { ArrowRight } from "lucide-react";

function Hero() {
  return (
    <section className="hero section">
      <h2>Amazon Affiliate Pro Brasil</h2>
      <p>
        A primeira edição brasileira do sucesso de vendas nos EUA.  
        Descubra como iniciar sua jornada como afiliado Amazon no Brasil e gerar renda extra de forma profissional.
      </p>
      <a href="#sobre">
        Quero Saber Mais <ArrowRight size={18} />
      </a>
    </section>
  );
}

export default Hero;
