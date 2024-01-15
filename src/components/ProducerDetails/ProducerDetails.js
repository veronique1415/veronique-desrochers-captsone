import BourlierWine from "../../assets/images/Bourlier.jpg"
import Bourlier from "../../assets/images/Pierre Bourlier .jpeg"
import Banner from "../Banner/Banner";
import Hero from "../Hero/Hero";
import LongText from "../LongText/LongText";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./ProducerDetails.scss"

const ProducerDetails = () => {
  return (
    <section className="producer">
        <Hero text={"Pierre Bourlier - Ardèche, France"} imagePath ={Bourlier}/>
        <LongText 
        p1={"In 2015 Pierre set up his modest domaine, deep in the northern hills of Ardèche, only a stone's throw from St Joseph. He previously spent time working with Gilles Azzoni and Domaine des Miquettes before branching out on his own, and now has 1.5 hectares of vines to which he is slowly adding."}
        p2={"Most of the vineyards lie on the steep sides of the Doux valley; their sandy granitic soils  supported by stone-wall terracing. Growing mainly Gamay, with small amounts of Pinot Noir, Viognier and Roussanne ­– here, high up in the hills, the cool evenings preserve freshness after the heat of the day."}
        p3={"The wines are elegant and perfumed and speak of a rising star in the region. Even in hot vintages the balance is wonderful. Sadly, however, they are not in abundance, but in the coming years Pierre plans to move to a new cellar and purchase a little more land and in the future we hope there will be a little more to go around."} />
        <Banner text={"Shop their creations"}/>
        <Container fluid className="pb-4">
                <Row xs={2} sm={3} md={4} lg={5} className="image__flex-container">
                    <Col className="py-1">
                        <Link to={"/wines"}><Card>
                            <Card.Img src={BourlierWine}/>
                            <Card.ImgOverlay className="card__overview">
                                <h3>Ca de Noci</h3>
                                <p>Amazing product</p>
                            </Card.ImgOverlay>
                        </Card></Link>
                    </Col>
                    <Col className="py-1">
                        <Link to={"/wines"}><Card>
                            <Card.Img src={BourlierWine}/>
                            <Card.ImgOverlay className="card__overview">
                                <h3>Ca de Noci</h3>
                                <p>Amazing product</p>
                            </Card.ImgOverlay>
                    </Card></Link>
                    </Col>
                </Row>
            </Container>

    </section>
  )
};

export default ProducerDetails;
