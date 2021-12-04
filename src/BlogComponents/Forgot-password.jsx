import React, {useRef} from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import "../BlogComponentStyles/BlogLogin.css";

function validateEmail (emailAdress)
{
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailAdress.match(regexEmail)) {
    return true; 
  } else {
    return false; 
  }
}

function BlogForgot() {
    const checkMail = useRef(null);
    function checker(){
        let mailAddress = checkMail.current.value;
        validateEmail(mailAddress);
        console.log(validateEmail(mailAddress))
    }
  return (
    <div className="login-page">
      <Row>
        <Col xs="12" md="12" lg="12">
          <Card className="shadow p-4">
            <div className="login-head">
              <FontAwesomeIcon
                icon={faLock}
                className="lockIcon"
              ></FontAwesomeIcon>
              <h3 className="login-caption">FORGOT PASSWORD</h3>
            </div>
            <Card.Body>
              <Form action="#" method="GET" className="login-form">
                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    className="inputs"
                    ref={checkMail}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" id="login-btn" onClick={checker}>
                    Recover
                </Button>
                <div className="forgot-foot">
                    <Link to="/admin">
                  <p className="signup"><a href="/#">Login</a></p>
                    </Link>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
export default BlogForgot;