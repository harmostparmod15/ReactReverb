import Hero from "./Hero";
import Feature from "./Features";
import Testimonials from "./Testimonials";
import Faq from "./Faq";
import Footer from "./Footer";

const Body = () => {
  return (
    <div className="font-jakarta overflow-hidden">
      {/*  hero page */}
      <Hero />

      {/*  features section */}
      <Feature />

      {/*  testimonials section */}
      <Testimonials />

      {/*  faq section */}
      <Faq />

      {/*  footer section */}
      <Footer />
    </div>
  );
};

export default Body;
