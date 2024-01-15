
import { Container, Row, Card, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import Bourlier from "../../assets/images/Pierre Bourlier .jpeg"
import Banner from "../Banner/Banner";
import "./Producers.scss"

const Producers = () => {
  return (
    <section className="producers">
        <Banner text={"Our Producers"}/>
        <Container>
            <Row>
                <Col className="producers__containers">
                <Link to={"/producers/details"} className="producers__link">
                        <Card>
                        <Card.Img src={Bourlier} alt="Pierre Bourlier"/>
                        </Card>
                        <h3>Pierre Bourlier</h3>
                    </Link>
                </Col>
                <Col className="producers__containers">
                <Link to={"/producers/details"}  className="producers__link">
                        <Card>
                        <Card.Img src={Bourlier} alt="Pierre Bourlier"/>
                        </Card>
                        <h3>Pierre Bourlier</h3>
                    </Link>
                </Col>
                <Col className="producers__containers">
                <Link to={"/producers/details"}  className="producers__link">
                        <Card>
                        <Card.Img src={Bourlier} alt="Pierre Bourlier"/>
                        </Card>
                        <h3>Pierre Bourlier</h3>
                    </Link>
                </Col>
                <Col className="producers__containers">
                <Link to={"/producers/details"}  className="producers__link">
                        <Card className="producers__card">
                        <Card.Img 
                        src={Bourlier} 
                        alt="Pierre Bourlier"/>
                        </Card>
                        <h3>Pierre Bourlier</h3>
                    </Link>
                </Col>
            </Row>
        </Container>
    </section>

  )
};

export default Producers;
