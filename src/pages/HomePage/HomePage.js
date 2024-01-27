import Hero from "../../components/Hero/Hero";
import NewIn from "../../components/NewIn/NewIn";
import SaillardHero from "../../assets/images/saillardHero.png"
import pouringWine from "../../assets/images/winePouring.jpeg"
import swirlingWine from "../../assets/images/wineSwirling.jpeg"

const HomePage = () => {


    return (
        <>
            <main>
                <Hero text={"Small private import company, truly grand products."} imagePath={pouringWine} imagePath2={SaillardHero} imagePath3={swirlingWine} />
                <NewIn />
            </main>

        </>
    )
}

export default HomePage;