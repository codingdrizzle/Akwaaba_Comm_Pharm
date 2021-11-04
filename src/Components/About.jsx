import { Container, Col, Row, Card } from "react-bootstrap";
import "../ComponentStyles/About.css";
import avatar from "../Images/avatar.png";
function About() {
  const styleCont = {
    overflowX: "hidden",
    display: "none",
    visibility: "hidden",
  };
  return (
    <>
      <Container className="my-5" styles={styleCont}>
        {" "}
        {/*Start of Container*/}
        <Row className="my-4">
          <Col xs="12" md="12" lg="12">
            <h2 className="text-center">
              Know about Akwaaba Community Pharmacy
            </h2>
          </Col>
        </Row>
        <Row className="my-4">
          <Col xs="12" md="12">
            <Card className="shadow rounded-3">
              <Card.Body>
                <Row>
                  <Col xs="12" md="12" lg="12">
                    <h4 className="text-left text-success">About Us</h4>
                    <p className="about-text">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Sit, nam repudiandae deserunt provident itaque esse
                      aliquam! Culpa, iure sed voluptatibus eius temporibus
                      vitae voluptate, ab exercitationem nisi numquam,
                      laboriosam praesentium <br />
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Fugiat, laudantium repellendus dolore a iusto cum
                      architecto obcaecati dolor rem at. Rem laboriosam
                      aspernatur impedit modi dolor eum, mollitia id eius?
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* Goals | Vision | Mission */}
        <Row className="my-4">
          <Col xs="12" md="12">
            <Card className="shadow rounded-3">
              <Card.Body>
                <Row>
                  <Col xs="12" md="12" lg="4" className="my-1">
                    <Card className="rounded-3">
                      <Card.Body>
                        <h4 className="text-center text-success">Goals</h4>
                        <ul>
                          <li className="goals">
                            Lorem ipsum dolor sit amet consectetur.
                          </li>
                          <li className="goals">
                            Lorem ipsum dolor sit amet consectetur.
                          </li>
                          <li className="goals">
                            Lorem ipsum dolor sit amet consectetur.
                          </li>
                          <li className="goals">
                            Lorem ipsum dolor sit amet consectetur.
                          </li>
                        </ul>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs="12" md="12" lg="4" className="my-1">
                    <Card className="rounded-3">
                      <Card.Body>
                        <h4 className="text-center text-success">Vision</h4>
                        <ul>
                          <li className="goals">
                            Lorem ipsum dolor sit amet consectetur.
                          </li>
                          <li className="goals">
                            Lorem ipsum dolor sit amet consectetur.
                          </li>
                          <li className="goals">
                            Lorem ipsum dolor sit amet consectetur.
                          </li>
                          <li className="goals">
                            Lorem ipsum dolor sit amet consectetur.
                          </li>
                        </ul>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs="12" md="12" lg="4" className="my-1">
                    <Card className="rounded-3">
                      <Card.Body>
                        <h4 className="text-center text-success">Mission</h4>
                        <ul>
                          <li className="goals">
                            Lorem ipsum dolor sit amet consectetur.
                          </li>
                          <li className="goals">
                            Lorem ipsum dolor sit amet consectetur.
                          </li>
                          <li className="goals">
                            Lorem ipsum dolor sit amet consectetur.
                          </li>
                          <li className="goals">
                            Lorem ipsum dolor sit amet consectetur.
                          </li>
                        </ul>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* Our Staff */}
        <Row className="my-4">
          <Col xs="12" md="12">
            <Card className="shadow rounded-3">
              <Card.Body>
                <Row>
                  <Col xs="12" md="12" lg="12">
                    <Row>
                      <Col xs="6" md="4" lg="3" className="my-2">
                        <Card>
                          <Card.Body className="avatar-thumbnail">
                            <img
                              src={avatar}
                              alt=""
                              className="rounded-circle avatar"
                            />
                            <h5 className="text-center mt-1">
                              Dr. Daniel Buabin <br />
                              <strong className="position">
                                (CEO/Founder)
                              </strong>
                            </h5>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col xs="6" md="4" lg="3" className="my-2">
                        <Card>
                          <Card.Body className="avatar-thumbnail">
                            <img
                              src={avatar}
                              alt=""
                              className="rounded-circle avatar"
                            />
                            <h5 className="text-center mt-1">
                              Fname Lname <br />
                              <strong className="position">(Staff)</strong>
                            </h5>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col xs="6" md="4" lg="3" className="my-2">
                        <Card>
                          <Card.Body className="avatar-thumbnail">
                            <img
                              src={avatar}
                              alt=""
                              className="rounded-circle avatar"
                            />
                            <h5 className="text-center mt-1">
                              Fname Lname <br />
                              <strong className="position">(Staff)</strong>
                            </h5>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col xs="6" md="4" lg="3" className="my-2">
                        <Card>
                          <Card.Body className="avatar-thumbnail">
                            <img
                              src={avatar}
                              alt=""
                              className="rounded-circle avatar"
                            />
                            <h5 className="text-center mt-1">
                              Fname Lname <br />
                              <strong className="position">(Staff)</strong>
                            </h5>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      {/*End of Container*/}
    </>
  );
}

export default About;
