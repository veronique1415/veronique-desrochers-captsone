import Bourlier from "../../assets/images/Bourlier.jpg"
import Producers from "../../components/Producers/Producers";

const WinesPage = () => {
     return (
        <main>
            <Producers text={"Our Products"} imagePath={Bourlier} title={"Vaille que Vaille"} url={"/wines/details"}/>
        </main>
        
    )
}

export default WinesPage;