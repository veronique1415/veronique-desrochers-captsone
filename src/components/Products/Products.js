import { Container, Row, Card, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";

import "./Products.scss"


const Products = ({text, bottles}) => {

    if(bottles === undefined) {
        return <div>Loading...</div>
    }


  return (
    <section className="products">
        <Banner text={text}/>
        <Container>
            <Row xs={2} md={4} lg={7}>
                {bottles.map((bottle) => (
                    <Col className="pb-3" key={bottle.product_id}>
                        <Link to={`/wines/${bottle.product_id}`} className="products__link">
                            <Card>
                            <Card.Img src={bottle.product_image} alt={bottle.product_name}/>
                            </Card>
                            <h3 className="products__name">{bottle.product_name}</h3>
                        </Link>
                    </Col>
                 ))}
            </Row>
        </Container>
    </section>

  )
};

export default Products;