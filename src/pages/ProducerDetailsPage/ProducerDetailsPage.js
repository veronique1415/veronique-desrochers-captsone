import BourlierWine from "../../assets/images/Bourlier.jpg"
import Bourlier from "../../assets/images/Pierre Bourlier .jpeg"

import ProducerDetails from "../../components/ProducerDetails/ProducerDetails";
const ProducerDetailsPage = () => {
    return (
        <main>
            <ProducerDetails text={"Pierre Bourlier - Ardèche, France"} imagePath={Bourlier} morePath={BourlierWine} urlLink={"/wines/details"}/>
        </main>
    )
}

export default ProducerDetailsPage;