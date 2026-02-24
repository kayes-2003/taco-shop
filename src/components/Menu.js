import React from "react";

function Menu() {
  return (
    <article id="menu" class="main__article menu">
          <main className="main">

            <h2 class="menu__h2">Our Menu</h2>
            <table class="menu__container">
                <caption class="offscreen">Our Tacos</caption>
                <thead>
                    <tr>
                        <th class="menu__header" scope="col">Tacos</th>
                        <th class="menu__header" scope="col">Quantity</th>
                        <th class="menu__header" scope="col">Price</th>
                    </tr>
                </thead>


                <tbody>
                    <tr>
                        <th class="menu__item menu__cr" scope="row" rowspan="3">
                            Crunchy
                        </th>
                        <td class="menu__item">1</td>
                        <td class="menu__item">$1.50</td>
                    </tr>
                    <tr>
                        <td class="menu__item">2</td>
                        <td class="menu__item">$2.50</td>
                    </tr>
                    <tr>
                        <td class="menu__item">3</td>
                        <td class="menu__item">$3.25</td>
                    </tr>
                    <tr>
                        <th class="menu__item menu__sf" scope="row" rowspan="3">
                            Soft
                        </th>
                        <td class="menu__item">1</td>
                        <td class="menu__item">$2.00</td>
                    </tr>
                    <tr>
                        <td class="menu__item">2</td>
                        <td class="menu__item">$3.50</td>
                    </tr>
                    <tr>
                        <td class="menu__item">3</td>
                        <td class="menu__item">$4.50</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td class="menu__item menu__cs" colspan="3">
                            Chips &amp; Salsa $2
                        </td>
                    </tr>
                </tfoot>
            </table>
            <p class="center">
                <a href="# ">Back To Top</a>
            </p>
          </main>
        </article>
  );
}

export default Menu;