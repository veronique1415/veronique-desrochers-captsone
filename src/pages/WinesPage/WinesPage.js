import Bourlier from "../../assets/images/Bourlier.jpg"
import Products from "../../components/Products/Products";

const WinesPage = () => {
     return (
        <main>
            <Products text={"Our Products"} imagePath={Bourlier} title={"Vaille que Vaille"} url={"/wines/details"}/>
        </main>
        
    )
}

export default WinesPage;