import {Container, Row, Col, Card} from "react-bootstrap"
import Bottle1 from "../../assets/images/CadeNociO.jpg"
import Bottle2 from "../../assets/images/CadeNociO2.jpg"
import Bottle3 from "../../assets/images/VenierR.jpg"
import Bottle4 from "../../assets/images/VenierR3.jpg"
import Bottle5 from "../../assets/images/CadeNociR3.jpg"
import Banner from "../Banner/Banner";
import "./NewIn.scss"

const NewIn = () => {
  return <section className="newIn">
            <Banner text={"New arrivals"} />
            <Container fluid className="py-3">
                <Row xs={2} sm={3} md={4} lg={5} className="image__flex-container">
                    <Col className="py-1">
                    <Card className="card">
                        <Card.Img src={Bottle1}/>
                        <Card.ImgOverlay className="card__overview">
                            <h3>Ca de Noci</h3>
                            <p>Amazing product</p>
                        </Card.ImgOverlay>
                    </Card>
                    </Col>
                    <Col className="py-1">
                    <Card>
                        <Card.Img src={Bottle1}/>
                        <Card.ImgOverlay className="card__overview">
                            <h3>Ca de Noci</h3>
                            <p>Amazing product</p>
                        </Card.ImgOverlay>
                    </Card>
                    </Col>
                    <Col className="py-1">
                    <Card>
                        <Card.Img src={Bottle2}/>
                        <Card.ImgOverlay className="card__overview">
                            <h3>Ca de Noci</h3>
                            <p>Amazing product</p>
                        </Card.ImgOverlay>
                    </Card>
                    </Col>
                    <Col className="py-1">
                    <Card>
                        <Card.Img src={Bottle3}/>
                        <Card.ImgOverlay className="card__overview">
                            <h3>Ca de Noci</h3>
                            <p>Amazing product</p>
                        </Card.ImgOverlay>
                    </Card>
                    </Col>
                    <Col className="py-1">
                    <Card>
                        <Card.Img src={Bottle4}/>
                        <Card.ImgOverlay className="card__overview">
                            <h3>Ca de Noci</h3>
                            <p>Amazing product</p>
                        </Card.ImgOverlay>
                    </Card>
                    </Col>
                    <Col className="py-1">
                    <Card>
                        <Card.Img src={Bottle5}/>
                        <Card.ImgOverlay className="card__overview">
                            <h3>Ca de Noci</h3>
                            <p>Amazing product</p>
                        </Card.ImgOverlay>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </section>
};

export default NewIn;
