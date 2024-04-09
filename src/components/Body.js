import Hero from "./Hero";
import Feature from "./Features";

const Body = () => {
  return (
    <div className="font-jakarta overflow-hidden">
      {/*  hero page */}
      <Hero />

      {/*  features section */}
      <Feature />
    </div>
  );
};

export default Body;
