import { Container, Row, Col, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import "./SearchBar.scss";

const baseUrl = process.env.REACT_APP_BASE_URL;
const searchProducerUrl = `${baseUrl}producers/search?s=`;
const searchProductsUrl = `${baseUrl}products/search?s=`;

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");

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
          console.log("producer response", producerResponse.data);

          const productsResponse = await axios.get(
            `${searchProductsUrl}${searchInput}`
          );
          console.log("products response", productsResponse.data);
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
    </section>
  );
};

export default SearchBar;
