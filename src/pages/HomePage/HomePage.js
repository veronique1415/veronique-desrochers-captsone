import Hero from "../../components/Hero/Hero";
import NewIn from "../../components/NewIn/NewIn";
import SaillardHero from "../../assets/images/saillardHero.png";
import pouringWine from "../../assets/images/winePouring.jpeg";
import swirlingWine from "../../assets/images/wineSwirling.jpeg";
import { useState, useEffect } from "react";
import axios from "axios";

const HomePage = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const bottleUrl = `${baseUrl}products`;

  const [bottles, setBottles] = useState([]);

  useEffect(() => {
    const getBottles = async () => {
      try {
        const response = await axios.get(bottleUrl);
        const dataBottles = response.data;
        const filteredBottles = dataBottles.slice(0, 6);
        setBottles(filteredBottles);
      } catch (error) {
        console.error("Unable to retrieve picture", error);
      }
    };

    getBottles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <main>
        <Hero
          text={"Small private import company, truly grand products."}
          imagePath={pouringWine}
          imagePath2={SaillardHero}
          imagePath3={swirlingWine}
        />
        <NewIn bottles={bottles} />
      </main>
    </>
  );
};

export default HomePage;
