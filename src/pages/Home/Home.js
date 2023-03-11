import React from "react";
import "../Home/Home.css";
import cardItems from "../../assets/js/logements";
import imgHome from "../../assets/images/ImgHome.jpg";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { Link } from "react-router-dom";

export default function Home() {
  const AppCard = () => (
    <div className="listCard">
      {cardItems.map((item) => {
        return (
          <Link key={item.id} to={`/logement/${item.id}`}>
            <div className="card">
              <img src={item.cover} alt={item.title} />
              <b>{item.title}</b>
            </div>
          </Link>
        );
      })}
    </div>
  );
  return (
    <div className="all">
      <Header />
      <div className="cover">
        <p>Chez vous, partout et ailleurs</p>
        <img className="imgAccueil" src={imgHome} alt="paysage" />
      </div>
      <AppCard />
      <Footer />
    </div>
  );
}
