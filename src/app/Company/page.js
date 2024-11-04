"use client";

import "./Company.css";

const Company = () => {
  return (
    <div className="section-company">
      <div className="text">
        <h1>О компании</h1>
        <p>
          Tristique orci consectetur sit felis. Sed sit auctor tellus lobortis.
          Enim non turpis null nec a <br />
          sapien sit amet molestie. Et id malesuada gravida quis velit egestas.
          Vulputate sed lectus <br />
          eleifend ut aliquam.
        </p>
        <p>
          Libero non porttitor ridiculus convallis ultrices convallis vitae. As
          sit rutrum sit amet diam sit.
        </p>
        <ul>
          <li>Vivamus tincidunt non lectus odio magna semper odio risus.</li>
          <li>Vivamus tincidunt non lectus odio magna semper odio risus.</li>
          <li>Vivamus tincidunt non lectus odio magna semper odio risus.</li>
          <li>Vivamus tincidunt non lectus odio magna semper odio risus.</li>
        </ul>
        <p>
          Quam accumsan mauris enim quam. A commodo ultrices urna vitae nibh
          rhoncus at nisl. Duis
          <br />
          nibh non ut aliquam. Metus aliquam molestie sapien suscipit.
          Suspendisse volutpat.
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <ul>
              <li>
                Vivamus tincidunt non lectus odio magna semper odio risus.
              </li>
              <li>
                Vivamus tincidunt non lectus odio magna semper odio risus.
              </li>
              <li>
                Vivamus tincidunt non lectus odio magna semper odio risus.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="company-right">
        <div className="video-container">
          {/* YouTube video */}
          <iframe
            width="600"
            height="315"
            src="https://www.youtube.com/embed/V1A9EVNtwYs"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div
          style={{
            width: "400px",
            height: "150px",
            padding: "10px",
            marginTop: "30px",
            backgroundColor: "#d8f3ff",
            borderRadius: "5px",
          }}
        >
          <p>Запрос ставки и условия партнерско-портовой пакет</p>
          <p>
            Рассчитайте моментально стоимость полных <br /> портовых услуг в
            порту VISMA
          </p>
        </div>
      </div>
    </div>
  );
};
export default Company;
