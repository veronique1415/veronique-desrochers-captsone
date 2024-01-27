import Banner from "../Banner/Banner";
import {Container, Row, Col, Image} from "react-bootstrap"
import "../Hero/Hero.scss"

const Hero = ({text, imagePath}) => {  
  return (
    <>
    <section className="hero">
    <Container className="mx-auto py-2" >
        <Row xs={1}>
            <Col>
                <Image src={imagePath.producer_image}  className="hero__image"/>
            </Col>
        </Row>
    </Container>
    </section>
    </>
  )

};

export default Hero;
