import { Container, Row, Card, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import { useState, useEffect } from "react";
import axios from "axios";


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
    <section className="producers">
        <Banner text={text}/>
        <Container>
            <Row md={3} lg={6}>
            {bottles.map((bottle) => (
                           <Col className="producers__containers">
                           <Link to={`/wines/${bottle.product_id}`} className="producers__link">
                                   <Card key={bottle.product_id}>
                                   <Card.Img src={bottle.product_image} alt={bottle.product_name}/>
                                   </Card>
                                   <h3>{bottle.product_name}</h3>
                               </Link>
                           </Col>
                        ))}
            </Row>
        </Container>
    </section>

  )
};

export default Products;