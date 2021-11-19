import { Row, Col, Form, FloatingLabel, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faWhatsapp,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import "../ComponentStyles/Footer.css";
import logoBig from "../Images/footer-logo-big.png";
import logoSmall from "../Images/footer-logo-small.png";
import brandlogotranswhite from "../Images/brandlogo-trans-white-small.png";

function Footer() {
  const styleLink = {
    color: "rgb(255, 255, 255)",
    textDecoration: "none",
    fontWeight: "bold",
  };
  var year = new Date().getFullYear();
  return (
    <>
      <div className="footer">
        <Row className="bottomBorder py-3">
          <Col xs="12" md="4" lg="3" className="brandlogo-parent">
            <a href="/" className="footer-brand-text logo-big">
              <img src={logoBig} alt="" classNmae="footer-brand-logo" />
            </a>
            <a href="/" className="footer-brand-text logo-small">
              <img src={logoSmall} alt="" classNmae="footer-brand-logo" />
            </a>
          </Col>
          <Col xs="12" md="4" lg="3">
            <div className="list">
              <h4 className="footer-tag">Related Links</h4>
              <ul>
                <li className="footer-links">
                  <Link style={styleLink} to="/">
                    - Home -
                  </Link>
                </li>
                <li className="footer-links">
                  <Link style={styleLink} to="/about">
                    - About -
                  </Link>
                </li>
                <li className="footer-links">
                  <Link style={styleLink} to="/news-feed">
                    - News Feed -
                  </Link>
                </li>
                <li className="footer-links">
                  <Link style={styleLink} to="/health-tips">
                    - Health Tips -
                  </Link>
                </li>
                <li className="footer-links">
                  <Link style={styleLink} to="/contact">
                    - Contact -
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          {/* Categories */}
          <Col xs="12" md="4" lg="3">
            <div className="list">
              <h4 className="footer-tag">Categories</h4>
              <ul className="text-left">
                <li className="categories">Pharmaceutical</li>
                <li className="categories">Drugs</li>
                <li className="categories">Health</li>
              </ul>
            </div>
          </Col>
          {/* Working days */}
          <Col xs="12" md="12" lg="3">
            <div className="list">
              <h4 className="footer-tag">Working Days</h4>
              <ul>
                <li className="opendays">Monday (Open 24 hours)</li>
                <li className="opendays">Tuesday (Open 24 hours)</li>
                <li className="opendays">Wednesday (Open 24 hours)</li>
                <li className="opendays">Thursday (Open 24 hours)</li>
                <li className="opendays">Friday (Open 24 hours)</li>
                <li className="opendays">Saturday (Open 24 hours)</li>
                <li className="opendays">Sunday (Open 24 hours)</li>
              </ul>
            </div>
          </Col>
        </Row>
        {/* Comment Section */}
        <Row className="bottomBorder py-3">
          <Col xs="12" md="12" lg="12" className="comment">
            <FloatingLabel
              controlId="floatingTextarea2"
              label="Leave a comment here"
              style={{color: "white"}}
            >
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "150px", color:"white" }}
                className="commentBox"
              />
              <Button variant="success" type="submit" className="m-3">
                Send Comment
              </Button>
            </FloatingLabel>
          </Col>
          {/* Social media handles */}
          <Col xs="12" md="12" lg="12">
            <div className="footer-icons-parent">
              <a href="/fb" type="button" target="_blank">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="footer-icons"
                  id="facebook"
                ></FontAwesomeIcon>
              </a>
              <a href="/in" type="button" target="_blank">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="footer-icons"
                  id="instagram"
                ></FontAwesomeIcon>
              </a>
              <a href="/tw" type="button" target="_blank">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="footer-icons"
                  id="twitter"
                ></FontAwesomeIcon>
              </a>
              <a href="/li" type="button" target="_blank">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="footer-icons"
                  id="linkedin"
                ></FontAwesomeIcon>
              </a>
              <a href="https://wa.link/23q0pz" type="button" target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="footer-icons"
                  id="whatsapp"
                ></FontAwesomeIcon>
              </a>
            </div>
          </Col>
        </Row>
        {/* Right Protection */}
        <Row style={{ color: " rgb(58, 58, 58)" }}>
          <Col xs="12" md="12" lg="12">
            <div className="right-protection-parent">
              <p>
                <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
                &nbsp;Terms of service | Private Policy
              </p>
            </div>
          </Col>
          <Col xs="12" md="12" lg="12">
            <div className="right-protection-parent">
              <p>
                <img src={brandlogotranswhite} alt="" />
                Akwaaba Community Pharmacy
              </p>
            </div>
            <div className="right-protection-parent">
              <p>Copyright &copy; {year} | All rights reserved.</p>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Footer;
