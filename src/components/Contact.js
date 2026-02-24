import React from "react";
import contactImage from "../tacos_delicioso_1000x667.png";

function Contact() {
  return (
    <section className="contact">
      <figure>
        <img
          src={contactImage}
          alt="Taco Shop Contact"
          title="Get in touch with us!"
          width="800"
          height="500"
        />
        <figcaption className="offscreen">Contact the Taco Shop</figcaption>
      </figure>

      <main className="main">
        <main className="main">
        <article className="main__article">
          <h2>Our Location</h2>
          <address>
            23 New Market, Savar <br />
            Dhaka, MO 55555-5555
            <br /> <br />
            Phone: <a href="tel:+8801737.....">01737...........</a>
          </address>
        </article>

        <hr />


        {/* Google Map Embed */}
        <article className="main__article map">
          <h2>📍 Find Us</h2>
          <iframe
            title="Little Taco Shop Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.234567890123!2d90.259203!3d23.8506918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1a123456789%3A0xabcdef123456789!2sSavar%20New%20Market!5e0!3m2!1sen!2sbd!4v1671234567890!5m2!1sen!2sbd"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </article>
       

        <article className="main__article contact">
          <h2 className="contact__h2">Our Contact Form</h2>
          <form
            action="https://httpbin.org/get"
            method="get"
            className="contact__form"
          >
            <fieldset className="contact__fieldset">
              <legend className="offscreen">Send Us A Message</legend>

              <p className="contact__p">
                <label htmlFor="name" className="contact__label">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="contact__input"
                  required
                />
              </p>

              <p className="contact__p">
                <label htmlFor="email" className="contact__label">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  className="contact__input"
                  required
                />
              </p>

              <p className="contact__p">
                <label htmlFor="message" className="contact__label">Your Message:</label>
                <br />
                <textarea
                  className="contact__textarea"
                  name="message"
                  id="message"
                  cols="30"
                  placeholder="Type your message here"
                ></textarea>
              </p>
            </fieldset>

            <button className="contact__button" type="submit">Send</button>
            <button className="contact__button" type="reset">Reset</button>
          </form>
        </article>
      </main>


      </main>
    </section>
  );
}

export default Contact;