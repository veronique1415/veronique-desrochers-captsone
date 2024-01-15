import Banner from "../Banner/Banner";
import { Container, Stack, Col, Row } from "react-bootstrap";
import "./About.scss"

const About = () => {
  return (
    <section className="about">
        <Banner text={"Our mission"}/>
        <Container>
            <Row>
                 <Col>
                    <Stack gap={3}>
                        <p className="">At Grand Ordinaire, we are more than wine importers – we are curators of a philosophy deeply rooted in the earth. Our mission is to bring you an extraordinary selection of wines that transcend the ordinary, embracing the true essence of terroirs from around the world. We stand committed to partnering with producers who share our passion for sustainable viticulture, working hand in hand with the land to produce clean, delightful, and naturally crafted wines.</p>
                        <p>With a name inspired by a Burgundy appellation, Grand Ordinaire is a celebration of the extraordinary in the everyday. We believe in the power of the earth to create wines that tell a story with every sip, embodying the unique characteristics of their origin. Our commitment to promoting producers who prioritize environmentally conscious practices ensures that every bottle you experience reflects the dedication to craftsmanship and the preservation of nature.</p>
                        <p>Join us on a journey to savor wines that go beyond the ordinary – each bottle a testament to the harmonious relationship between the vine, the earth, and the skilled hands that bring them together. Grand Ordinaire: where passion meets terroir, and every glass tells a story of authenticity, sustainability, and the pure joy of natural winemaking.</p>
                     </Stack>
                </Col>
            </Row>
    
        </Container>
        <Banner text={"Meet our team"}/>
    </section>
  )
};

export default About;
