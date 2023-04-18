import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Toggle from './Toggle';

function NavBar() {

  let navStyle = {
    background: 'linear-gradient(24deg,rgba(210, 210, 210,0.9),rgb(90, 87, 84),rgb(255, 145, 0))',
    color:"white"
}

  return (
    <Navbar style={navStyle} collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
      <Toggle />
        <Navbar.Brand><Link to="/"><span style={{color:'rgb(255, 153, 0)',fontWeight:800}}>J</span>spiders</Link></Navbar.Brand>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          
          </Nav>
          <Nav>
         <Link to="/signup">SignUp</Link>
         <Link to="/login">LogIn</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;