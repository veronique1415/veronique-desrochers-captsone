import { Container, Row, Col, Form, Collapse } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./SearchBar.scss";

const baseUrl = process.env.REACT_APP_BASE_URL;
const searchProducerUrl = `${baseUrl}producers/search?s=`;
const searchProductsUrl = `${baseUrl}products/search?s=`;

const SearchBar = ({open}) => {
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

  useEffect(() => {
    if (!open) {
      setSearchInput("");
      setProducerResults([]);
      setProductsResults([]);
    }
  }, [open]);


return (
  <section className="search">
      <Collapse in={!!open}>

        <Form id="example-collapse-text" className="form">
          <Form.Group className="form__group">
            <Form.Label htmlFor="#search" className="form__label">
              <Form.Control
                type="search"
                id="search"
                name="search"
                placeholder="Search here"
                onChange={handleSearchInputChange}
                value={searchInput}
                className="form__input"
              />
            </Form.Label>
          </Form.Group>
        </Form>
      </Collapse>

    {open && (
      <Container className="results">
        {producerResults.length > 0 ? (
          <Row>
            <Col>
              <ul className="results__list">Producers Results
              {producerResults.map((producer) => (
                <li className="results__item" key={producer.producer_id}>
                  <Link
                    className="results__link"
                    to={`producers/${producer.producer_id}`}
                  >
                    <p>{producer.producer_name}</p>
                  </Link>
                  {/* Add more details if needed */}
                </li>
              ))}
              </ul>
            </Col>
          </Row>
        ) : searchInput.trim() !== "" ? (
          <ul className="results__list">Producers Results
          <li className="results__item">No matching producer</li>
          </ul>  
        ) : null}

        {productsResults.length > 0 ? (
          <Row>
            <Col>
              <ul className="results__list">Products Results
              {productsResults.map((product) => (
                <li className="results__item" key={product.product_id}>
                  <Link className="results__link"  to={`/wines/${product.product_id}`}>
                    <p>{product.product_name}</p>
                  </Link>
                </li>
              ))}
              </ul>
            </Col>
          </Row>
        ) : searchInput.trim() !== "" ? (
          <ul className="results__list">Products Results
          <li className="results__item">No matching product</li>
          </ul>
        ) : null}
      </Container>
    )}
  </section>
);     
}

export default SearchBar;
