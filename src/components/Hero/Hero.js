// import CarouselComp from "../Carousel/Carousel";
import InsideGia from "../../assets/images/Screenshot 2023-12-19 at 8.18.02 AM.jpeg"
import {Container, Row, Col, Image} from "react-bootstrap"
import "./Hero.scss"

const Hero = () => {
//carousel of pictures ?    
  return (
    <>
    <section className="hero">
    <Container className="hero__heading--container mw-100 my-4">
        <Row>
            <Col className="hero__heading--container p-0">
            <h2 className="hero__heading">
                Small private import company, truly grand products. 
            </h2>
            </Col>
        </Row>
    </Container>
    <Container className="mx-auto py-2" fluid >
        <Row className="justify-content-md-center">
            <Col>
                <Image src={InsideGia} fluid className="hero__image"/>
            </Col>
        </Row>
    </Container>
    </section>
    </>
  )

};

export default Hero;

