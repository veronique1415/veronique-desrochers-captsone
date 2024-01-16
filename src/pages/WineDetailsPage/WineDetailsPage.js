import Banner from "../../components/Banner/Banner";
import Wine from "../../assets/images/CadeNociR.jpg"
import Hero from "../../components/Hero/Hero";
import BourlierWine from "../../assets/images/Bourlier.jpg"
import { Link } from "react-router-dom";
import { Container, Row, Col, Card} from "react-bootstrap";
import { Grape } from "lucide-react";
import { WineIcon } from "lucide-react";




const WineDetailsPage = () => {
    return (
        <main>
            <Hero text={"Vaille que Vaille"} imagePath={BourlierWine}/>
            <section>
                <Container>
                    <Row>
                        <Col>
                        <p>
                        <Grape /> 
                          Varietals : 100% pinot noir  
                        </p>
                        </Col>
                        <Col>
                        <p>
                        <WineIcon /> 
                          How it is : Amazing white wine, it's fresh, packed with fruits.
                        </p>
                        </Col>
                    </Row>
                </Container>
                <Banner text={"These might interested you"}/>
                <Container fluid className="pb-4">
                <Row xs={2} sm={3} md={4} lg={5} className="image__flex-container">
                    <Col className="py-1">
                        <Link to={"wines/details"}><Card>
                            <Card.Img src={Wine}/>
                            <Card.ImgOverlay className="card__overview">
                                <h3>Ca de Noci</h3>
                                <p>Amazing product</p>
                            </Card.ImgOverlay>
                        </Card></Link>
                    </Col>
                    <Col className="py-1">
                        <Link to={Wine}><Card>
                            <Card.Img src={Wine}/>
                            <Card.ImgOverlay className="card__overview">
                                <h3>Ca de Noci</h3>
                                <p>Amazing product</p>
                            </Card.ImgOverlay>
                    </Card></Link>
                    </Col>
                </Row>
            </Container>
            </section> 
        </main>
    )
    
}

export default WineDetailsPage;