import Banner from "../Banner/Banner";
import Larry from "../../assets/images/IMG_1604.jpeg"
import John from "../../assets/images/IMG_1588.jpeg"
import { Container, Card, Col, Row } from "react-bootstrap";
import "./About.scss"
import LongText from "../LongText/LongText";

const About = () => {
  return (
    <section className="about">
        <Banner text={"Our mission"}/>
        <LongText 
        p1={"At Grand Ordinaire, we are more than wine importers – we are curators of a philosophy deeply rooted in the earth. Our mission is to bring you an extraordinary selection of wines that transcend the ordinary, embracing the true essence of terroirs from around the world. We stand committed to partnering with producers who share our passion for sustainable viticulture, working hand in hand with the land to produce clean, delightful, and naturally crafted wines."}
        p2={"With a name inspired by a Burgundy appellation, Grand Ordinaire is a celebration of the extraordinary in the everyday. We believe in the power of the earth to create wines that tell a story with every sip, embodying the unique characteristics of their origin. Our commitment to promoting producers who prioritize environmentally conscious practices ensures that every bottle you experience reflects the dedication to craftsmanship and the preservation of nature."}
        p3={"Join us on a journey to savor wines that go beyond the ordinary – each bottle a testament to the harmonious relationship between the vine, the earth, and the skilled hands that bring them together. Grand Ordinaire: where passion meets terroir, and every glass tells a story of authenticity, sustainability, and the pure joy of natural winemaking."}
        />
        <Banner text={"Meet our team"}/>
        <Container className="about-card__whole-container">
            <Row xs={1} md={2}>
                <Col className="about-card__container py-3">
                <h3 className="about-card__name">Lawrence Fiset</h3>
                    <Card className="about-card">
                        <Card.Img className="about-card__image" src={Larry} alt="Larry"/>
                    </Card>
                </Col>
                <Col className="about-card__container py-3">
                <h3 className="about-card__name">John Hale</h3>
                    <Card className="about-card">
                        <Card.Img src={John} alt="John" className="about-card__image"/>
                    </Card>
                </Col>
            </Row>
        </Container>
    </section>
  )
};

export default About;
