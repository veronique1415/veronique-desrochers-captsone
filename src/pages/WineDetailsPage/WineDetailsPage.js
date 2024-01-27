import Banner from "../../components/Banner/Banner";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Image} from "react-bootstrap";
import { Grape } from "lucide-react";
import { WineIcon } from "lucide-react";
import { Map } from "lucide-react";
import "./WineDetailsPage.scss"




const WineDetailsPage = () => {
    const {wineId} = useParams()
  
    const [product, setProduct] = useState([])
    const [allProducts, setAllProducts] = useState([])

    const producerUrl =  `http://localhost:8080/products/${wineId}`
    const allProductsUrl = "http://localhost:8080/products"

    const getProduct =  async () => {
        const response = await axios.get(producerUrl)
        console.log("single producer",response.data)
        setProduct(response.data)
    }

    const getAllProducts =  async () => {
        const response = await axios.get(allProductsUrl)
        console.log("single producer",response.data)
        setAllProducts(response.data)
    }

    useEffect(() => {
        getProduct()
        getAllProducts()
 
    }, [wineId])


    return (
        <main>
            <Banner text={`${product.product_name}, ${product.product_producer}`}/>
            <section className="wine">
            <Container className="mx-auto p-3" >
                    <Row xs={1} md={3} className="justify-content-evenly">
                         <Col className="wine__image--container">
                            <Image src={product.product_image}  className="wine__image"/>
                        </Col>
                             <Col className="py-2">
                                <ul className="wine__list">
                                <li className="wine__item">
                                    <Map />
                                    <span className="wine__item--span">Where it's from : </span>
                                    {product.product_region}
                                </li>  
                                <li className="wine__item">    
                                    <Grape />
                                    <span className="wine__item--span">Varietals : </span>
                                    {product.product_varietal}
                                </li>
                                <li className="wine__item">
                                    <WineIcon /> 
                                    <span className="wine__item--span">How it is : </span>
                                    {product.product_description}
                                </li>  
                                </ul>
                            </Col>

                    </Row>
                </Container>
                </section>
                    <section>
                     <Banner text={"These bottles might interested you as well"}/>
                    <Container fluid className="pb-4">
                        <Row xs={2} sm={3} md={4} lg={5} className="image__flex-container">
                            {allProducts.map((bottle) => (
                                <Col className="py-1 product__card--col">
                                    <Link to={`/wines/${bottle.product_id}`}>
                                        <Card key={bottle.product_id} className="product__card">
                                            <Card.Img src={bottle.product_image}/>
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
        </main>
    )
    
}

export default WineDetailsPage;