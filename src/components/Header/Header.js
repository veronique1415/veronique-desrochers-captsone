import searchIcon from "../../assets/icons/search-icon.png"
import { Link } from "react-router-dom"
import { DropdownItem, NavDropdown, Container, Row, Col} from "react-bootstrap"
import "./Header.scss"


const Header = () => {
    return (
        <header className="header">
            <nav>
            <Container style={{ marginRight: 0}} className="mw-100">
                <Row className="pr-0">
                    <Col className="header__container py-3" xs={8} md={10}>
                        <h2 className="header__heading">Grand Ordinaire.</h2>
                    </Col>
                    <Col xs={2} md={1} className="col__search">
                        <button className="search__button search__buton--hidden"><img className="search__icon  search__icon--hidden" src={searchIcon} alt="search icon"></img></button>
                    </Col>
                    <Col xs={2} md={1}className="col__menu py-3">
                        
                        <NavDropdown className="nav__dropdown">
                            <ul>
                                <li><DropdownItem>
                                    <Link to={"/about"}>About</Link>
                                </DropdownItem></li>
                                <li><DropdownItem>
                                    <Link to={"/producers"}>Producers</Link>
                                </DropdownItem></li>
                                <li><DropdownItem>
                                    <Link to={"/wines"}>Wines</Link>
                                </DropdownItem></li>
                                <li><DropdownItem>
                                    <Link to={"/findUs"}>Find us</Link>
                                </DropdownItem></li>
                                <li><DropdownItem>
                                    <Link to={"/listing"}>Listing</Link>
                                </DropdownItem></li>
                                </ul>
                            </NavDropdown>
                        </Col>
                    </Row>
                </Container>
            </nav>
        </header>
    )
}

export default Header;
