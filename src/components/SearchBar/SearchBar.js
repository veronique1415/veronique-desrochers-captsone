
import { Container, Row, Col, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import "./SearchBar.scss"

const baseUrl = process.env.REACT_APP_BASE_URL 
const searchProducerUrl = `${baseUrl}producers/search?s=`
// const searchProductsUrl = `${baseUrl}products/search?s=`

const SearchBar = () => {
const [searchInput, setSearchInput] = useState("")

useEffect(() => {
    const searchData = async (searchInput) => {
        const response = await axios.get(`${searchProducerUrl}${searchInput}`)
    }
},[searchInput])

  return (
    <section>
        <Container>
            <Row>
                <Col>
                <Form>
                    <Form.Group>
                        <Form.Label htmlFor="#search">
                            <Form.Control type="search" id="search" name="search" placeholder="Search here"/>
                        </Form.Label>
                    </Form.Group>
                </Form>
                </Col>
            </Row>
        </Container>
    </section>
  )
};

export default SearchBar;
