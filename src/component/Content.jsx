import React from "react";
import crypto from "../Asset/crypto.webp";
import "./content.css";

const Content = () => {
  return (
    <div>
      <div className="first-header">
        <div>
          <h1>
            FUTURE OF CRYPTO <br />
            IN THE NEXT 5 YEARS ?
          </h1>
        </div>
        <hr />
        <div className="need">
          <h1>WHAT YOU NEED TO KNOW </h1>
        </div>
      </div>

      <div className="content">
        <div className="content-first">
          <img src={crypto} alt="" />
        </div>

        <div className="content-second">
          <h3>
            The cryptocurrency market has been known <br /> for its high levels
            of volatility and frequent price <br />
            fluctuations. Over the next five years, this trend will likely
            continue as the market responds to evolving regulatory environments,
            technological advancements, and changing investor sentiment. The
            crypto market's journey has been nothing short of a wild ride.
            Bitcoin, the leading cryptocurrency, scaled new peaks in 2021 before
            plunging and then gradually recuperating. <br />
          </h3>
          <div className="btn">
            <button>READ MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
