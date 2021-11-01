import { Navbar, Nav, Container } from "react-bootstrap";
import "../../ComponentStyles/NavBar.css";
import brandlogo from "../../Images/brandlogo.png";

function NavBar() {
  return (
    <>
      <Navbar className="c-navbar-color shadow" sticky="top" variant="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="">
            <img src={brandlogo} alt="" width = "50px" />
           <a href="#home" className="c-brand-text">Akwaaba Community</a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="links">Home</Nav.Link>
              <Nav.Link href="#link" className="links">About</Nav.Link>
              <Nav.Link href="#link" className="links">News Feed</Nav.Link>
              <Nav.Link href="#link" className="links">Health Tips</Nav.Link>
              <Nav.Link href="#link" className="links">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
