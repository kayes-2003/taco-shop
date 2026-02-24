import React from "react";
import aboutImage from "../tacos_tray_1000x667.png";

function Abouts() {
  return (
    <section className="about">
      <figure>
        <img
          src={aboutImage}
          alt="Taco Shop Contact"
          title="Get in touch with us!"
          width="800"
          height="500"
        />
        <figcaption className="offscreen">Contact the Taco Shop</figcaption>
      </figure>

      <main className="main">
        <article id="about" className="main__article about">
          <h2>
            About <abbr title="The Little Taco Shop">LTS</abbr>
          </h2>
          <p>
            <abbr title="The Little Taco Shop">LTS</abbr> was founded in{" "}
            <time dateTime="2022">2022</time>. Our shop was built from a{" "}
            <strong>love of tacos</strong> 🌮🌮🌮. We hope our shop adds a
            unique and interesting place to our little town.
          </p>

          <aside className="about__trivia">
            <h3>Taco trivia</h3>
            <details>
              <summary>
                When did tacos first appear in the United States?
              </summary>
              <p className="about__trivia-answer">
                Jeffrey M. Pilcher, taco historian and professor of history at
                the University of Minnesota, says the earliest mention of tacos
                in the United States is in a newspaper from{" "}
                <time dateTime="1905">1905</time>. (Source:{" "}
                <cite>
                  <a
                    href="//www.smithsonianmag.com/arts-culture/where-did-the-taco-come-from-from-81228162/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Smithsonian Magazine
                  </a>
                </cite>
                )
              </p>
            </details>
          </aside>
        </article>
      </main>
    </section>
  );
}

export default Abouts;