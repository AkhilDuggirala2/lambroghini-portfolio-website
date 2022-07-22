import React from "react";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Blog from "./components/blog/Blog";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonial from "./components/testimonial/Testimonial";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Blog />
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
