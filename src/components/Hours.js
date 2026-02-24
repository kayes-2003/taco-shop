import React from "react";
import hoursImage from "../tacos_close_up_1000x649.png";


function Hours() {
  return (
    <section className="hours">

      <figure>
        <img 
          src={hoursImage} 
          alt="Taco Shop Hours" 
          title="We are open for tacos!" 
          width="800" 
          height="500" 
          />
        <figcaption className="offscreen">Our Taco Shop Hours</figcaption>
      </figure>

       <main className="main">
         <br/>
      <br/>
      <h2>Opening Hours</h2>
      <ul>

      <ul>
        <li>Monday – Friday: 11am – 9pm</li><br/>
        <li>Saturday: 12pm – 10pm</li><br/>
        <li>Sunday: Closed</li>
      </ul>
      </ul>
      <br/>
      <br/>
      <br/>
      <br/>
    </main>
    </section>
  );
}

export default Hours;