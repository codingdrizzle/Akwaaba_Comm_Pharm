import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhoneAlt,
  faAddressCard,
  faMapPin,
  faRoad,
  faCity,
  faPuzzlePiece,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faWhatsapp,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "../ComponentStyles/Contact.css";
import flag from "../Images/flag.png";
import Map from "./Map";
function Contact() {
  return (
    <Container className="mt-5">
      <Row>
        <Col xs={12} lg={4} className="my-1">
          <h3 className="title text-center">Location on Map</h3>
          <Map />
        </Col>
        <Col xs={12} lg={4} className="my-1">
          <h3 className="title">Location Details</h3>
          <Row className="mx-auto">
            <Col xs={12} md={12} className="my-2">
              <img src={flag} alt="hello" />
              <span className="title mx-2">Country : Ghana</span>
            </Col>
            <Col xs={12} md={12} className="my-2">
              <FontAwesomeIcon
                icon={faPuzzlePiece}
                className="iconSize"
              ></FontAwesomeIcon>
              <span className="title mx-2">Region : Eastern Region</span>
            </Col>
            <Col xs={12} md={12} className="my-2">
              <FontAwesomeIcon
                icon={faCity}
                className="iconSize"
              ></FontAwesomeIcon>
              <span className="title mx-2">City/Town : Akyem Kukurantumi</span>
            </Col>
            <Col xs={12} md={12} className="my-2">
              <FontAwesomeIcon
                icon={faRoad}
                className="iconSize"
              ></FontAwesomeIcon>
              <span className="title mx-2">Street Name : Kukurantumi</span>
            </Col>
            <Col xs={12} md={12} className="my-2">
              <FontAwesomeIcon
                icon={faAddressCard}
                className="iconSize"
              ></FontAwesomeIcon>
              <span className="title mx-2">GPS Address : EE-0500-4475</span>
            </Col>
          </Row>
        </Col>
        <Col xs={12} lg={4} className="my-1">
          <Row>
            <h3 className="title text-center">Reach Us</h3>
            <Col xs={12} md={12} lg={12} className="my-4">
              <div className="icons">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="iconSize-cont"
                  title="contact@example.com"
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  icon={faPhoneAlt}
                  className="iconSize-cont"
                  title="+233 24 446 5747"
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  icon={faMapPin}
                  className="iconSize-cont"
                  title="P.O.Box"
                ></FontAwesomeIcon>
              </div>
            </Col>
            <h3 className="title text-center">Social Media</h3>
            <Col xs={12} md={12} lg={12} className="my-4">
              <div className="icons">
              <a href="/#" className="icon-link">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="iconSize-cont fb"
                  title="P.O.Box"
                ></FontAwesomeIcon>
              </a>
               <a href="/#" className="icon-link">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="iconSize-cont ig"
                  title="P.O.Box"
                ></FontAwesomeIcon>
              </a>
               <a href="/#" className="icon-link">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="iconSize-cont tw"
                  title="P.O.Box"
                ></FontAwesomeIcon>
              </a>
               <a href="/#" className="icon-link">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="iconSize-cont ln"
                  title="P.O.Box"
                ></FontAwesomeIcon>
              </a>
               <a href="/#" className="icon-link">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="iconSize-cont wa"
                  title="P.O.Box"
                ></FontAwesomeIcon>
              </a>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
