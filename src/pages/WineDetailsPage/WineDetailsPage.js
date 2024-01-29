import Banner from "../../components/Banner/Banner";
import { Link , useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Image} from "react-bootstrap";
import { Grape } from "lucide-react";
import { WineIcon } from "lucide-react";
import { Map } from "lucide-react";
import { LandPlot } from "lucide-react";
import { CalendarDaysIcon } from "lucide-react";
import "./WineDetailsPage.scss"




const WineDetailsPage = () => {
    const {wineId} = useParams()
  
    const [product, setProduct] = useState([])
    const [allProducts, setAllProducts] = useState([])

    const baseUrl = process.env.REACT_APP_BASE_URL
    const producerUrl =  `${baseUrl}products/${wineId}`
    const allProductsUrl = `${baseUrl}products`

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                             <Col className="py-3 wine__list--container">
                                <ul className="wine__list">
                                    <li key={product.product_id} className="wine__item">
                                            <CalendarDaysIcon /> 
                                            <span className="wine__item--span">Vintage : </span>
                                            {product.product_vintage}
                                        </li> 
                                        <li className="wine__item">
                                            <LandPlot /> 
                                            <span className="wine__item--span">Appelation : </span>
                                            {product.product_appellation}
                                        </li> 
                                    <li className="wine__item">
                                        <Map />
                                        <span className="wine__item--span">Where it's from : </span>
                                        {product.product_region}
                                    </li>  
                                    <li className="wine__item">    
                                        <Grape />
                                        <span className="wine__item--span">Grapes : </span>
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
                     <Banner text={"These bottles might interest you as well"}/>
                     <ul class="list tablet--new">
                        {allProducts.map((bottle) => (
                        <>  
                        <li className="list__item"><Link className="list__link" to={`/wines/${bottle.product_id}`}>
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
                        <Row xs={2} sm={3} md={4} lg={5} className="image__flex-container">
                            {allProducts.map((bottle) => (
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
        </main>
    )
    
}

export default WineDetailsPage;