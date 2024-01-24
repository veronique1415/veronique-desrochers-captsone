import Bourlier from "../../assets/images/Pierre Bourlier .jpeg"
import Producers from "../../components/Producers/Producers";

const ProducersPage = () => {
    return (
        <main>
            <Producers text={"Our Producers"} imagePath={Bourlier} title={"Pierre Bourlier"} url={"/producers/details"}/>
        </main>
        
    )
}

export default ProducersPage;