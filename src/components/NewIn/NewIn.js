import {Container, Row, Col, Card} from "react-bootstrap"
import { Link } from "react-router-dom"
import Banner from "../Banner/Banner";
import { useState, useEffect } from "react";
import axios from "axios";
import "./NewIn.scss"

const NewIn = () => {
    const baseUrl = process.env.REACT_APP_BASE_URL
   
    const bottleUrl = `${baseUrl}products`

    const [bottles, setBottles] = useState([]);

    const getBottles = async () => {
        try {
            const response = await axios.get(bottleUrl)
            const dataBottles = response.data
            const filteredBottles = dataBottles.slice(0, 6)
            setBottles(filteredBottles)
        } catch (error) {
            console.error("Unable to retrieve picture", error)
        }
    }
    useEffect(()=>{
        getBottles()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if(bottles === undefined) {
        return <div>Loading...</div>
    }
   


  return <section className="newIn">
            <Banner text={"New arrivals"} />
            <ul class="list tablet--new">
                {bottles.map((bottle) => (
                <>  
                <li key={bottle.product_id} className="list__item"><Link className="list__link" to={`/wines/${bottle.product_id}`}>
                    <img className="list__img" src={bottle.product_image} alt={bottle.product_name}></img>
                    <div className="list__item--overview">
                    <h3 className="list__item--text">{bottle.product_name}</h3>
                    </div>
                </Link>
                </li>
                </>  
            ))}
            </ul>
            <Container fluid className="pb-4 mobile--new">
                <Row xs={2} sm={3} md={4} lg={6} className="product__card--row">
                    {bottles.map((bottle) => (
                        <Col className="py-1 product__card--col">
                            <Link to={`/wines/${bottle.product_id}`}>
                                <Card key={bottle.product_id} className="product__card">
                                    <Card.Img src={bottle.product_image} alt={bottle.product_name}/>
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
};

export default NewIn;


