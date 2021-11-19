import { Container, Col, Row} from "react-bootstrap";
import "../ComponentStyles/HealthTips.css";
import TipCard from "./TipCard"
import nicer from "../Images/nicer.jpg"

export default function HealthTips() {
  return(
    <>
      <Container>
        <Row>
          <Col xs="12" md="12" lg="12" className="my-5"><h3 className="title news-heading">Read health tips from 'Akwaaba Community Pharmacy'</h3></Col>
        </Row>

        <Row>
           <TipCard img={nicer}/>
        </Row>
      </Container>
    </>
  );
}
