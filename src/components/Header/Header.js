import Nav from "../Nav/Nav";
import "./Header.scss"
import { Row, Col, Container } from "react-bootstrap";

const Header = () => {
    return (
        <header className="header">
            <Container>
                <Row>
                    <Col className="header__container" >
                    <h2 className="header__heading">Grand Ordinaire.</h2>
                    </Col>
                    <Col>
                    <Nav/>
                    </Col>
                    
                </Row>
            
            </Container>
        </header>
    )
}

export default Header;