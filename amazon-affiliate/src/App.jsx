import "./App.css";
import "./Responsive.css";
import SEO from "./component/seo";
import Header from "./component/header";
import Hero from "./component/hero";
import AboutSection from "./component/AboutSection";
import ProductSection from "./component/ProductSection";
import CredibilitySection from "./component/CredibilitySection";
import TestimonialsSection from "./component/TestimonialsSection";
import Footer from "./component/footer";


function App() {
  return (
    <div className="app">
      <SEO />
      <Header />
      <Hero />
      <ProductSection />
      <AboutSection />
      <CredibilitySection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}

export default App;