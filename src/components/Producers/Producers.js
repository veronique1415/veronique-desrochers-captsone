
import { Container, Row, Card, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Producers.scss"

const Producers = ({text}) => {
    const baseUrl = process.env.REACT_APP_BASE_URL
    const producersUrl = `${baseUrl}producers`
    const [producers, setProducers] = useState([]);

    const getProducers = async () => {
        try {
            const response = await axios.get(producersUrl)
            setProducers(response.data)
        } catch (error) {
            console.error("Unable to retrieve picture", error)
        }
    }
    useEffect(()=>{
        getProducers()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if(producers === undefined) {
        return <div>Loading...</div>
    }

  return (
    <section className="producers">
        <Banner text={text}/>
        <Container className="py-3 producers__container--flex" >
            <Row xs={1} md={3} className="producers__row">
            {producers.map((producer) => (
                           <Col className="producers__containers">
                           <Link to={`/producers/${producer.producer_id}`} className="producers__link">
                                   <Card key={producer.producer_id}>
                                   <Card.Img src={producer.producer_image} alt={producer.producer_name}/>
                                   </Card>
                                   <h3 className="producers__name">{producer.producer_name}</h3>
                               </Link>
                           </Col>
                        ))}
            </Row>
        </Container>
    </section>

  )
};

export default Producers;
