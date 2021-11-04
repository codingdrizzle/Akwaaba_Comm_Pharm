import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../ComponentStyles/NavBar.css";
import brandlogo from "../Images/brandlogo.png";

function NavBar() {
  const styleLink = {
    textDecoration : 'none'
  }
  return (
    <>
      <Navbar
        className="c-navbar-color shadow"
        sticky="top"
        variant="light"
        expand="lg"
      >
        <Container>
          <Link style={{styleLink}} to="/">
          <Navbar.Brand href="#home" className="">
            <img src={brandlogo} alt="" width="50px" />
            <a href="/" className="c-brand-text">
              Akwaaba Community Pharmacy
            </a>
          </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link style={styleLink} to="/">
                <Nav.Link href="/" className="links">
                  Home
                </Nav.Link>
              </Link>
              <Link style={styleLink} to="/about">
                <Nav.Link href="/about" className="links">
                  About
                </Nav.Link>
              </Link>
              <Link style={styleLink} to="/news-feed">
                <Nav.Link href="/news-feed" className="links">
                  News Feed
                </Nav.Link>
              </Link>
              <Link style={styleLink} to="/health-tips">
                <Nav.Link href="health-tips" className="links">
                  Health Tips
                </Nav.Link>
              </Link>
              <Link style={styleLink} to="/contact">
                <Nav.Link href="/contact" className="links">
                  Contact
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
