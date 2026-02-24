import React from "react";
import tacoImage from "../tacos_and_drink_1000x667.png";

function Hero() {
  return (
    <section className="hero">
      <h2 className="hero__h2">Bienvenidos!</h2>
      <figure>
        <img 
          src={tacoImage} 
          alt="Tacos and a Drink" 
          title="We love tacos!" 
          width="1000" 
          height="667" 
        />
        <figcaption className="offscreen">Tacos and a Drink</figcaption>
      </figure>
    </section>
  );
}

export default Hero;