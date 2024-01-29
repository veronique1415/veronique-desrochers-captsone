import Banner from "../Banner/Banner";
import LongText from "../LongText/LongText";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import "./ProducerDetails.scss"

const ProducerDetails = () => {
    const {producerId} = useParams()
    const [producerProducts, setProducerProducts] = useState([])
    const [producer, setProducer] = useState([])
    const baseUrl = process.env.REACT_APP_BASE_URL
    const producerProductsUrl =  `${baseUrl}producers/${producerId}/products`
    const producerUrl =  `${baseUrl}producers/${producerId}`

    const getProducts = useCallback(async () => {
        const response = await axios.get(producerProductsUrl);
        setProducerProducts(response.data);
      }, [producerProductsUrl]);
    
      const getProducer = useCallback(async () => {
        const response = await axios.get(producerUrl);
        console.log("single producer", response.data);
        setProducer(response.data);
      }, [producerUrl]);
    
      useEffect(() => {
        const fetchData = async () => {
          await getProducts();
          await getProducer();
        };
    
        fetchData();
      }, [producerId, getProducts, getProducer]);

    if(producerProducts === undefined || producer === undefined) {
        return <div>Loading...</div>
    }

    
  return (
    <section className="producer">
        <Banner text={`${producer.producer_name} - ${producer.producer_village}, ${producer.producer_region}`}/>
        <Container>
            <Row xs={1} lg={2} >
                <Col className="pb-3 producer__container">
                <Image src={producer.producer_image}  className="producer__image"/>
                </Col>
                <Col>
                    <LongText 
                    p1={producer.producer_description}
                    p2={producer.producer_description2}
                    p3={producer.producer_description3} />
                </Col>
            </Row>
        </Container>
        <Banner text={"Shop their creations"}/>
        <Container fluid className="pb-4">
                <Row xs={2} sm={3} md={4} lg={5} className="justify-content-center">
                {producerProducts.map((product) => (
                            <Col className="py-1 product__card--col">
                        <Link to={`/wines/${product.product_id}`}>
                            <Card key={product.product_id} className="product__card">
                        <Card.Img src={product.product_image} alt={product.product_name}/>
                            <Card.ImgOverlay className="product__card--overview">
                                <h3>{product.product_name}</h3>
                            </Card.ImgOverlay>
                        </Card></Link>
                        </Col>
                        ))}
                </Row>
            </Container>

    </section>
  )
};

export default ProducerDetails;
