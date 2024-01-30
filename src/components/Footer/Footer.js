import {Link} from "react-router-dom"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.scss"


const Footer = () => {
  return (
    <footer className="footer">
        <Container style={{ marginRight: 0}} className="mw-100">
            <Row xs={3}>
                <Col className="footer__containers first">
                    <ul className="footer__list">
                        <li className="footer__item"><Link to={"/about"} className="footer__link">About</Link></li>
                        <li className="footer__item"><Link to={"/producers"} className="footer__link">Producers</Link></li>
                        <li className="footer__item mobile--footer"><Link to={"/wines"} className="footer__link">In Stock</Link></li>
                        <li className="footer__item mobile--footer"><Link to={"/findUs"} className="footer__link">Find us!</Link></li>
                    </ul>
                    <ul className="footer__list">
                        <li className="footer__item tablet--footer"><Link to={"/wines"} className="footer__link">In Stock</Link></li>
                        <li className="footer__item tablet--footer"><Link to={"/findUs"} className="footer__link">Find us!</Link></li>
                    </ul>
                </Col>
                <Col className="footer__containers">
                <h2>LOGO</h2>
                </Col>
                <Col className="footer__containers justify-content-center">
                <button className="footer__email" onClick={() => window.location.href = 'mailto:larry@grandordinaire.com'}><FontAwesomeIcon icon={faEnvelope} className='fa-2xl'/></button>
                <Link to={"https://www.instagram.com/grand.ordinaire/"} className="sidenav__link sidenav__logo"><FontAwesomeIcon icon={faInstagram} className='fa-2xl'/></Link>
                </Col>
            </Row>
        </Container>
    </footer>
  )
};

export default Footer;
