import { Container, Row, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import "./Producers.scss";

const Producers = ({ text, producersData }) => {
  if (!producersData) {
    return <div>Loading...</div>;
  }

  return (
    <section className="producers">
      <Banner text={text} />
      <Container className="py-3 producers__container--flex">
        <Row xs={1} md={3} className="producers__row">
          {producersData.map((producer) => (
            <Col className="producers__containers" key={producer.producer_id}>
              <Link to={`/producers/${producer.producer_id}`} className="producers__link">
                <Card>
                  <Card.Img src={producer.producer_image} alt={producer.producer_name} />
                </Card>
                <h3 className="producers__name">{producer.producer_name}</h3>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Producers;
