import { Container, Row, Col, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./SearchBar.scss";

const baseUrl = process.env.REACT_APP_BASE_URL;
const searchProducerUrl = `${baseUrl}producers/search?s=`;
const searchProductsUrl = `${baseUrl}products/search?s=`;

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [producerResults, setProducerResults] = useState([]);
  const [productsResults, setProductsResults] = useState([]);

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (searchInput.trim() !== "") {
          const producerResponse = await axios.get(
            `${searchProducerUrl}${searchInput}`
          );
          setProducerResults(producerResponse.data);

          const productsResponse = await axios.get(
            `${searchProductsUrl}${searchInput}`
          );
          setProductsResults(productsResponse.data);
        }
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, [searchInput]);

  return (
    <section>
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Group>
                <Form.Label htmlFor="#search">
                  <Form.Control
                    type="search"
                    id="search"
                    name="search"
                    placeholder="Search here"
                    onChange={handleSearchInputChange}
                    value={searchInput}
                  />
                </Form.Label>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>

     {producerResults.length > 0 ?  
      (
     <Container>
        <Row>
          <Col>
            <h2>Producer Results</h2>
            {producerResults.map((producer) => (
              <div key={producer.producer_id}>
                <Link className="search__link" to={`producers/${producer.producer_id}`}><p>{producer.producer_name}</p></Link>
                {/* Add more details if needed */}
              </div>
            ))}
          </Col>
        </Row>
      </Container> ) :  <p>No Matching producers</p>}
      
      {productsResults.length > 0 ? (
        <Container>
        <Row>
          <Col>
            <h2>Products Results</h2>
            {productsResults.map((product) => (
              <div key={product.product_id}>
                <Link to={`/wines/${product.product_id}`}><p>{product.product_name}</p></Link>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
      ) : <p>No matching product</p>}
    </section>
  );
};

export default SearchBar;
