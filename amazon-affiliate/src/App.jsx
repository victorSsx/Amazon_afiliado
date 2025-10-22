import "./App.css";
import "./Responsive.css";
import Header from "./component/header";
import Hero from "./component/hero";
import AboutSection from "./component/AboutSection";
import ProductSection from "./component/ProductSection";
import CredibilitySection from "./component/CredibilitySection";
import TestimonialsSection from "./component/TestimonialsSection";
import Footer from "./component/Footer";


function App() {
  return (
    <div className="app">
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