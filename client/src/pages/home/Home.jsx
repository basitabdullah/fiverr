import React from "react";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";
import CatCard from "../../components/catCard/CatCard";
import { cards, projects } from "../../data";
import "./Home.scss";
import ProjCard from "../../components/projCard/ProjCard";
const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={4} arrowsScroll={4}>
        {cards.map((card) => (
          <CatCard key={card.id} item={card} />
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your finger tips.</h1>
            <div className="title">
              <img src="./assets/check.png" alt="" />
              The Best for every budget
            </div>
            <p>
              Find high-quality services at every price point.No hourly rates,
              just projeect based pricing.
            </p>
            <div className="title">
              <img src="./assets/check.png" alt="" />
              The Best for every budget
            </div>
            <p>
              Find high-quality services at every price point.No hourly rates,
              just projeect based pricing.
            </p>
            <div className="title">
              <img src="./assets/check.png" alt="" />
              The Best for every budget
            </div>
            <p>
              Find high-quality services at every price point.No hourly rates,
              just projeect based pricing.
            </p>
          </div>
          <div className="item">
            <video src="./assets/video.mp4" autoPlay muted controls></video>
          </div>
        </div>
      </div>

      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>fiverr business</h1>
            <h1>A business solution desined for teams</h1>
            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses.
            </p>
            <div className="title">
              <img src="./assets/check.png" alt="" />
              Connect to freelancers with proven business experience
            </div>
            <div className="title">
              <img src="./assets/check.png" alt="" />
              Get matched with the perfect talent by a customer success manager
            </div>
            <div className="title">
              <img src="./assets/check.png" alt="" />
              Manage teamwork and boost productivity with one powerful workspace
            </div>

            <button>Explore Fiverr Business</button>
          </div>
          <div className="item">
            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"></img>
          </div>
        </div>
      </div>

      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => (
          <ProjCard key={card.id} item={card} />
        ))}
      </Slide>
    </div>
  );
};

export default Home;
