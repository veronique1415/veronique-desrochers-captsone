import 'bootstrap/dist/css/bootstrap.min.css';  
import { Button, Container, Offcanvas } from 'react-bootstrap';  
import {useState} from 'react'  
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import './SideNav.scss'


const SideNav = () => {
    const [show, setShow] = useState(false);  
  const closeSidebar = () => setShow(false);  
  const showSidebar = () => setShow(true);  
  
  return (  
    <>  
    <Container className='p-0 sidenav'>  
      <Button className='sidenav__button' onClick={showSidebar}>  
      <FontAwesomeIcon icon={faBars} className='fa-lg'/>
      </Button>  
      <Offcanvas placement='end' show={show} onHide={closeSidebar} className="sidenav__modal">  
        <Offcanvas.Header closeButton className='sidenav__modal--header'>  
          <Offcanvas.Title className='sidenav__modal--menu'>Menu</Offcanvas.Title>  
        </Offcanvas.Header>  
        <Offcanvas.Body className='sidenav__modal--body'>
        <ul className='sidenav__list'>  
            <li className='sidenav__item'><Link to={"/"} className='sidenav__link'>Home</Link></li>
            <li className='sidenav__item'><Link to={"/about"} className='sidenav__link'>About</Link></li>
            <li className='sidenav__item'><Link to={"/producers"} className='sidenav__link'>Our Producers</Link></li>
            <li className='sidenav__item'><Link to={"/wines"} className='sidenav__link'>Wines</Link></li>
            <li className='sidenav__item'><Link to={"/listing"} className='sidenav__link'>Listing</Link></li>
            <li className='sidenav__item'><Link to={"findUs"} className='sidenav__link'>Find Us</Link></li>
        </ul>
        <div className='sidenav__logo--container'>
        
        </div>    <Link to={"https://www.instagram.com/grand.ordinaire/"} className="sidenav__link sidenav__logo"><FontAwesomeIcon icon={faInstagram} className='fa-2xl'/></Link>
        </Offcanvas.Body>  
      </Offcanvas>  
      </Container>  
    </>  
  );  
}  

export default SideNav;
        

