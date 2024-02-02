import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import "./NewIn.scss";

const NewIn = ({ bottles }) => {
  if (bottles === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <section className="newIn">
      <Banner text={"New arrivals"} />
      <section>
        <ul className="list tablet--new">
          {bottles.map((bottle) => (
            <li key={bottle.product_id} className="list__item">
              <Link className="list__link" to={`/wines/${bottle.product_id}`}>
                <img
                  className="list__img"
                  src={bottle.product_image}
                  alt={bottle.product_name}
                ></img>
                <div className="list__item--overview">
                  <h3 className="list__item--text">{bottle.product_name}</h3>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <Container fluid className="pb-4 mobile--new">
        <Row xs={2} sm={3} md={4} lg={6} className="product__card--row">
          {bottles.map((bottle) => (
            <Col className="py-1 product__card--col">
              <Link to={`/wines/${bottle.product_id}`}>
                <Card key={bottle.product_id} className="product__card">
                  <Card.Img
                    src={bottle.product_image}
                    alt={bottle.product_name}
                  />
                  <Card.ImgOverlay className="product__card--overview">
                    <h3>{bottle.product_name}</h3>
                  </Card.ImgOverlay>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default NewIn;
