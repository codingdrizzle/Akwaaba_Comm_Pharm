import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../ComponentStyles/NavBar.css";
import brandlogo from "../Images/brandlogo.png";

function BlogNav() {
  const styleLink = {
    textDecoration: "none",
  };
  return (
    <>
      <Navbar
        className="c-navbar-color shadow"
        sticky="top"
        variant="light"
        expand="lg"
      >
        <Container>
          <Link style={{ styleLink }} to="/admin/blogs">
            <Navbar.Brand href="#blog" className="">
              <img src={brandlogo} alt="" width="50px" />
              <a href="/blog" className="c-brand-text">
                Akwaaba Community Pharmacy
              </a>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link style={styleLink} to="/admin/blogs/blognews">
                <Nav.Link href="/admin/blogs/blognews" className="links">
                  Blog News
                </Nav.Link>
              </Link>
              <Link style={styleLink} to="/admin/blogs/blogtips">
                <Nav.Link href="/admin/blogs/blogtips" className="links">
                  Blog Tips
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default BlogNav;
