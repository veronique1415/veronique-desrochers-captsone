import searchIcon from "../../assets/icons/search-icon.png"
import { Link } from "react-router-dom"
import "./Nav.scss"

const Nav = () => {
    return (
        <nav className="nav">
            <div className="search nav__item">
                <form  className="search">
                <button className="search__button search__buton--hidden"><img className="search__icon  search__icon--hidden" src={searchIcon} alt="search icon"></img></button>
                <input className="search__input search__input--hidden" name="search" type="text" ></input>
                </form>
            </div>
            <div className="menu  nav__item">
                <button className="menu__button">Menu</button>
                <ul className="menu__list menu__list--active">
                    <li className="menu__item"><Link to={"/about"}>About</Link></li>
                    <li className="menu__item"><Link to={"/producers"}>Producers</Link></li>
                    <li className="menu__item"><Link to={"/wines"}>Wines</Link></li>
                    <li className="menu__item"><Link to={"/findUs"}>Find us</Link></li>
                    <li className="menu__item"><Link to={"/listing"}>Listing</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;