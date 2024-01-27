import {Container, Row, Col, Image} from "react-bootstrap"
import "../Hero/Hero.scss"

const HeroProd = ({imagePath}) => {  
  return (
    <>
    <section className="hero">
    <Container className="mx-auto py-2" >
        <Row xs={1}>
            <Col>
                <Image src={imagePath}  className="hero__image"/>
            </Col>
        </Row>
    </Container>
    </section>
    </>
  )

};

export default HeroProd;
