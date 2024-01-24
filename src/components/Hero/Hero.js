import Banner from "../Banner/Banner";
import {Container, Row, Col, Image} from "react-bootstrap"
import "./Hero.scss"

const Hero = ({text, imagePath}) => {  
  return (
    <>
    <section className="hero">
    <Banner text={text}/>
    <Container className="mx-auto py-2" fluid >
        <Row className="justify-content-md-center">
            <Col>
                <Image src={imagePath} fluid className="hero__image"/>
            </Col>
        </Row>
    </Container>
    </section>
    </>
  )

};

export default Hero;

