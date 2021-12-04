import React, { useRef, useState } from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faLock } from "@fortawesome/free-solid-svg-icons";
import "../BlogComponentStyles/BlogLogin.css";
function BlogLogin() {
  const [icon, setIcon] = useState(faEye);
  const viewPassword = useRef(null);
  const changeIcon = useRef(null);
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
  return (
    <div className="login-page">
      <Row>
        <Col xs="12" md="12" lg="12">
          <Card className="shadow p-4">
            <div className="login-head">
              <FontAwesomeIcon
                icon={faLock}
                className="lockIcon"
                onClick={toggleView}
                ref={changeIcon}
              ></FontAwesomeIcon>
              <h3 className="login-caption">LOGIN</h3>
            </div>
            <Card.Body>
              <Form action="#" method="GET" className="login-form">
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
                  <div className="eye">
                    <FontAwesomeIcon
                      icon={icon}
                      className="eyeIcon"
                      onClick={toggleView}
                      ref={changeIcon}
                    ></FontAwesomeIcon>
                  </div>
                </Form.Group>
                <Button variant="primary" type="submit" id="login-btn">
                  Login
                </Button>
                <div className="login-foot">
                  <Link to="/admin/forgot-password">
                  <p className="forgot"><a href="/#">Forgot Password ?</a></p>
                  </Link>
                  <Link to="/admin/signup">
                  <p className="signup"><a href="/#">SignUp</a></p>
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
export default BlogLogin;