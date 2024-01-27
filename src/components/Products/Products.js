import { Container, Row, Card, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Products.scss"


const Products = ({text, imagePath, title, url}) => {

    const bottleUrl = "http://localhost:8080/products"
    const [bottles, setBottles] = useState([]);

    const getBottles = async () => {
        try {
            const response = await axios.get(bottleUrl)
            setBottles(response.data)
        } catch (error) {
            console.log("Unable to retrieve picture", error)
        }
    }
    useEffect(()=>{
        getBottles()
    }, [])

    if(bottles === undefined) {
        return <div>Loading...</div>
    }
    console.log("bottle",bottles)

  return (
    <section className="products">
        <Banner text={text}/>
        <Container>
            <Row xs={2} md={4} lg={6}>
            {bottles.map((bottle) => (
                           <Col className="pb-3">
                           <Link to={`/wines/${bottle.product_id}`} className="products__link">
                                   <Card key={bottle.product_id}>
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