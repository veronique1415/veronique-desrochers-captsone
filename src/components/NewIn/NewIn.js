import {Container, Row, Col, Card} from "react-bootstrap"
import { Link } from "react-router-dom"
// import Bottle1 from "../../assets/images/CadeNociO.jpg"
// import Bottle2 from "../../assets/images/CadeNociO2.jpg"
// import Bottle3 from "../../assets/images/VenierR.jpg"
// import Bottle4 from "../../assets/images/VenierR3.jpg"
// import Bottle5 from "../../assets/images/CadeNociR3.jpg"
import Banner from "../Banner/Banner";
import { useState, useEffect } from "react";
import axios from "axios";
import "./NewIn.scss"

const NewIn = () => {
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

    const {product_image, product_name, product_id} = bottles[0]

  return <section className="newIn">
            <Banner text={"New arrivals"} />
            <Container fluid className="py-2 pb-2">
                <Row xs={2} sm={3} md={4} lg={5} className="image__flex-container">
                    {bottles.map((bottle) => (
                            <Col className="py-1">
                        <Link to={`/wines/${product_id}`}>
                            <Card key={product_id}>
                        <Card.Img src={product_image}/>
                            <Card.ImgOverlay className="card__overview">
                                <h3>{product_name}</h3>
                            </Card.ImgOverlay>
                        </Card></Link>
                        </Col>
                        ))}
                </Row>
            </Container>
        </section>
};

export default NewIn;


