import Banner from "../Banner/Banner";
import InsideGia from "../../assets/images/Screenshot 2023-12-19 at 8.18.02 AM.jpeg"
import {Container, Row, Col, Image} from "react-bootstrap"
import "./Hero.scss"

const Hero = () => {  
  return (
    <>
    <section className="hero">
    <Banner text={"Small private import company, truly grand products."}/>
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

