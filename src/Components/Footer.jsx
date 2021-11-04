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
import brandlogo from "../Images/logo1.png";
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
        <Row className="bottomBorder">
          <Col xs="12" md="12" lg="3">
            <a href="/" className="footer-brand-text">
              <img src={brandlogo} alt="" classNmae="footer-brand-logo" />
              {/* <span className="footer-text">Akwaaba</span> <br />
              <span className="footer-text">Community</span> */}
            </a>
          </Col>
          <Col xs="6" md="6" lg="3">
            <div className="list">
              <h4 className="footer-tag">Related Links</h4>
              <ul>
                <li>
                  <Link style={styleLink} to="/">
                    - Home -
                  </Link>
                </li>
                <li>
                  <Link style={styleLink} to="/about">
                    - About -
                  </Link>
                </li>
                <li>
                  <Link style={styleLink} to="/news-feed">
                    - News Feed -
                  </Link>
                </li>
                <li>
                  <Link style={styleLink} to="/health-tips">
                    - Health Tips -
                  </Link>
                </li>
                <li>
                  <Link style={styleLink} to="/contact">
                    - Contact -
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          {/* Categories */}
          <Col xs="6" md="6" lg="3">
            <div className="list">
              <h4 className="footer-tag">Categories</h4>
              <ul className="text-left">
                <li>Pharmaceutical</li>
                <li>Drugs</li>
                <li>Health</li>
              </ul>
            </div>
          </Col>
          <Col xs="6" md="5" lg="3">
            <div className="list">
              <h4 className="footer-tag">Working Days</h4>
              <ul>
                <li>Monday (Open 24 hours)</li>
                <li>Tuesday (Open 24 hours)</li>
                <li>Wednesday (Open 24 hours)</li>
                <li>Thursday (Open 24 hours)</li>
                <li>Friday (Open 24 hours)</li>
                <li>Saturday (Open 24 hours)</li>
                <li>Sunday (Open 24 hours)</li>
              </ul>
            </div>
          </Col>
        </Row>
        {/* Comment Section */}
        <Row className="bottomBorder">
          <Col xs="12" md="12" lg="6" className="comment">
            <FloatingLabel
              controlId="floatingTextarea2"
              label="Leave a comment here"
            >
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ width: "400px", height: "150px" }}
              />
              <Button variant="success" type="submit" className="m-3">
                Submit
              </Button>
            </FloatingLabel>
          </Col>
          <Col xs="12" md="12" lg="6" className="worldMap">
            <FontAwesomeIcon
              icon={faFacebook}
              className="footer-icons"
              id="facebook"
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              icon={faInstagram}
              className="footer-icons"
              id="instagram"
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              icon={faTwitter}
              className="footer-icons"
              id="twitter"
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              icon={faLinkedin}
              className="footer-icons"
              id="linkedin"
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="footer-icons"
              id="whatsapp"
            ></FontAwesomeIcon>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="12" lg="12">
            <p>
              <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon> Terms of
              service | Private Policy
            </p>
          </Col>
          <Col xs="12" md="12" lg="12" className="">
            <div>
              <img src={brandlogotranswhite} alt="" />
                <p  style={{ display: "inline-block" }}>Akwaaba Community Pharmacy</p> <br />
                <p  style={{ display: "inline-block" }}>Copyright &copy; {year} | All rights reserved.</p>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Footer;
