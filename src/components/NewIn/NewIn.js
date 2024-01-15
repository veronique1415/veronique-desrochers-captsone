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
            <Banner text={"New bottles that just came in"} />
            <Container fluid className="py-3">
                <Row className="image__flex-container">
                    <Col>
                    <Card>
                        <Card.Img src={Bottle1}/>
                    </Card>
                    </Col>
                    <Col>
                    <Card>
                        <Card.Img src={Bottle1}/>
                    </Card>
                    </Col>
                    <Col>
                    <Card>
                        <Card.Img src={Bottle2}/>
                    </Card>
                    </Col>
                    <Col>
                    <Card>
                        <Card.Img src={Bottle3}/>
                    </Card>
                    </Col>
                    <Col>
                    <Card>
                        <Card.Img src={Bottle4}/>
                    </Card>
                    </Col>
                    <Col>
                    <Card>
                        <Card.Img src={Bottle5}/>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </section>
};

export default NewIn;
