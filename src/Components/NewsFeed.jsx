import { Container, Col, Row} from "react-bootstrap";
import "../ComponentStyles/News.css";
import NewsCard from "./NewsCard"
import nicer from "../Images/nicer.jpg"

export default function NewsFeed() {
  return(
    <>
      <Container>
        <Row>
          <Col xs="12" md="12" lg="12" className="my-5"><h3 className="title news-heading">News about Akwaaba Community Pharmacy</h3></Col>
        </Row>

        <Row>
           <NewsCard img={nicer}/>
        </Row>
      </Container>
    </>
  );
}