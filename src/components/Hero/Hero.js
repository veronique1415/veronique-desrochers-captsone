import Banner from "../Banner/Banner";
import {Container, Row, Col, Image} from "react-bootstrap"
import "./Hero.scss"

const Hero = ({text, imagePath, imagePath2, imagePath3}) => {  
  return (
    <>
    <section className="hero">
    <Banner text={text}/>
    <Container className="mx-auto py-2" fluid >
        <Row xs={1} md={3}>
            <Col>
                <Image src={imagePath} fluid className="hero__image"/>
            </Col>
            <Col className="d-none d-md-block">
                <Image src={imagePath2} fluid className="hero__image"/>
            </Col>
            <Col className="d-none d-md-block">
                <Image src={imagePath3} fluid className="hero__image"/>
            </Col>
        </Row>
    </Container>
    </section>
    </>
  )

};

export default Hero;

