import React, { useRef, useState } from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import "../BlogComponentStyles/BlogLogin.css";
function validateEmail(emailAdress) {
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailAdress.match(regexEmail)) {
    return true;
  } else {
    return false;
  }
}
function BlogSignup() {
  const [icon, setIcon] = useState(faEye);
  const viewPassword = useRef(null);
  const changeIcon1 = useRef(null);
  const toggleView = () => {
    let type;
    if (viewPassword.current.getAttribute("type") === "password") {
      type = "text";
      viewPassword.current.setAttribute("type", type);
      setIcon(faEyeSlash);
    } else {
      type = "password";
      viewPassword.current.setAttribute("type", type);
      setIcon(faEye);
    }
  };
  const checkMail = useRef(null);
  function checker() {
    let mailAddress = checkMail.current.value;
    validateEmail(mailAddress);
    console.log(validateEmail(mailAddress));
  }
  return (
    <div className="login-page">
      <Row>
        <Col xs="12" md="12" lg="12">
          <Card className="shadow p-4">
            <div className="login-head">
              <FontAwesomeIcon
                icon={faUserPlus}
                className="lockIcon"
                style={{ fontSize: "40px" }}
              ></FontAwesomeIcon>
              <h3 className="login-caption my-4">SIGNUP</h3>
            </div>
            <Card.Body>
              <Form action="#" method="GET" className="login-form">
                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Email Address"
                    className="inputs"
                    ref={checkMail}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="username"
                    placeholder="Username"
                    className="inputs"
                    id="username-input"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    className="inputs"
                    id="password-input"
                    ref={viewPassword}
                  />
                  <div className="eye1">
                    <FontAwesomeIcon
                      icon={icon}
                      className="eyeIcon"
                      onClick={toggleView}
                      ref={changeIcon1}
                    ></FontAwesomeIcon>
                  </div>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    className="inputs"
                    id="password-input"
                    ref={viewPassword}
                  />
                  <div className="eye2">
                    <FontAwesomeIcon
                      icon={icon}
                      className="eyeIcon"
                      onClick={toggleView}
                      ref={changeIcon1}
                    ></FontAwesomeIcon>
                  </div>
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  id="login-btn"
                  onClick={checker}
                >
                  Signup
                </Button>
                <div className="forgot-foot">
                  <Link to="/admin">
                    <p className="signup">
                      <a href="/#">Login</a>
                    </p>
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
export default BlogSignup;
