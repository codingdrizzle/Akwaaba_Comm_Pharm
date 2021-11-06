import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhoneAlt,
  faAddressCard,
  faMapPin,
  faRoad,
  faMapMarker,
  faCity,
  faPuzzlePiece,
  faFlag
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faWhatsapp,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "../ComponentStyles/Contact.css"
import flag from "../Images/flag.png";
import Map from "./Map";
function Contact() {
  return (
    <Container className="mt-5">
      <Row>
        <Col xs={12} lg={6} className="my-1">
          <h3 className="title text-center">Location on Map</h3>
          <Map />
        </Col>
        <Col xs={12} lg={6} className="my-1">
          <h3 className="title">Location Details</h3>
          <Row className="mx-auto">
            <Col xs={12} md={12} className="my-2">
              <img src={flag} alt="hello" />
              <span className="title mx-2">Country : Ghana</span>
            </Col>
            <Col xs={12} md={12} className="my-2">
              <FontAwesomeIcon icon={faPuzzlePiece} className="iconSize"></FontAwesomeIcon>
              <span className="title mx-2">Region : Eastern Region</span>
            </Col>
            <Col xs={12} md={12} className="my-2">
              <FontAwesomeIcon icon={faCity} className="iconSize"></FontAwesomeIcon>
              <span className="title mx-2">City/Town : Akyem Kukurantumi</span>
            </Col>
            <Col xs={12} md={12} className="my-2">
              <FontAwesomeIcon icon={faRoad} className="iconSize"></FontAwesomeIcon>
              <span className="title mx-2">Street Name : Kukurantumi</span>
            </Col>
            <Col xs={12} md={12} className="my-2">
              <FontAwesomeIcon icon={faAddressCard} className="iconSize"></FontAwesomeIcon>
              <span className="title mx-2">GPS Address : EE-0500-4475</span>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
