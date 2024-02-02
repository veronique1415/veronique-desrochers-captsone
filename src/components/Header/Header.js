import searchIcon from "../../assets/icons/search-icon.png"
import { Link } from "react-router-dom"
import { Container, Row, Col} from "react-bootstrap"
import "./Header.scss"
import { useState } from "react"
import SideNav from "../SideNav/SideNav"
import SearchBar from "../SearchBar/SearchBar"


const Header = () => {
    const [open, setOpen] = useState(false);

    const handleCloseSearch = () => {
        setOpen(false);
      };

    return (
        <>
        <header className="header">
            <nav className="nav">
            <Container  className="mw-100 header__wrapper">
                <Row className="pr-0">
                    <Col className="header__container py-4" xs={8} md={10}>
                        <Link to={"/"} className="header__heading"><h1 className="header__heading">Grand Ordinaire.</h1></Link>
                    </Col>
                    <Col xs={2} md={1} className="header__search">
                        <button className="search__button search__buton--hidden"
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}>
                            <img className="search__icon  search__icon--hidden" src={searchIcon} alt="search icon"></img></button>
                    </Col>
                    <Col xs={2} md={1}className="header__menu">
                        <SideNav/>
                        </Col>
                    </Row>
                </Container>   
            </nav>
            <SearchBar open={open} onCloseSearch={handleCloseSearch}/> 
        </header>
        </>
    )
}

export default Header;