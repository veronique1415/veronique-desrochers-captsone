import searchIcon from "../../assets/icons/search-icon.png"
import { Link } from "react-router-dom"
import { Container, Row, Col} from "react-bootstrap"
import "./Header.scss"
import SideNav from "../SideNav/SideNav"
import SearchBar from "../SearchBar/SearchBar"


const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
            <Container style={{ marginRight: 0}} className="mw-100">
                <Row className="pr-0">
                    <Col className="header__container py-4" xs={8} md={10}>
                        <Link to={"/"} className="header__heading"><h1 className="header__heading">Grand Ordinaire.</h1></Link>
                    </Col>
                    <Col xs={2} md={1} className="header__search">
                        <button className="search__button search__buton--hidden"><img className="search__icon  search__icon--hidden" src={searchIcon} alt="search icon"></img></button>
                    </Col>
                    <Col xs={2} md={1}className="header__menu">
                        <SideNav/>
                        </Col>
                    </Row>
                </Container> 
                <SearchBar/>   
            </nav>
        </header>
    )
}

export default Header;