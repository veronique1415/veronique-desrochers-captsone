import Nav from "../Nav/Nav";
import "./Header.scss"

const Header = () => {
    return (
        <header className="header">
            <h2 className="header__heading">Grand Ordinaire.</h2>
            <Nav />
        </header>
    )
}

export default Header;