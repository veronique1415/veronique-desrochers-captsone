
import { Container, Row, Card, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import "./Producers.scss"

const Producers = ({text, imagePath, title, url}) => {
  return (
    <section className="producers">
        <Banner text={text}/>
        <Container>
            <Row>
                <Col className="producers__containers">
                <Link to={url} className="producers__link">
                        <Card>
                        <Card.Img src={imagePath} alt="Pierre Bourlier"/>
                        </Card>
                        <h3>{title}</h3>
                    </Link>
                </Col>
                <Col className="producers__containers">
                <Link to={url}  className="producers__link">
                        <Card>
                        <Card.Img src={imagePath} alt="Pierre Bourlier"/>
                        </Card>
                        <h3>{title}</h3>
                    </Link>
                </Col>
                <Col className="producers__containers">
                <Link to={url}  className="producers__link">
                        <Card>
                        <Card.Img src={imagePath} alt="Pierre Bourlier"/>
                        </Card>
                        <h3>{title}</h3>
                    </Link>
                </Col>
                <Col className="producers__containers">
                <Link to={url}  className="producers__link">
                        <Card className="producers__card">
                        <Card.Img 
                        src={imagePath} 
                        alt="Pierre Bourlier"/>
                        </Card>
                        <h3>{title}</h3>
                    </Link>
                </Col>
            </Row>
        </Container>
    </section>

  )
};

export default Producers;
