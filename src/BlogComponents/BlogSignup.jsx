import React, { useRef, useState } from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import Alert from 'react-bootstrap/Alert'
import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import "../BlogComponentStyles/BlogLogin.css";
function BlogSignup() {
   // All States
  const [icon, setIcon] = useState(faEye);
   const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [msg, setMsg] = useState("");

  // All Refs
  const Email = useRef(null);
  const Username = useRef(null);
  const Password = useRef(null);
  const RePassword = useRef(null);
  const changeIcon1 = useRef(null);

// Alert Message
// Email Validation
function validateEmail(emailAddress) {
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailAddress.match(regexEmail)) {
    return true;
  } else {
    return false;
  }
}

// Password Validation
function ValidatePassword(password, repassword) {
  if (password.length >= 6 && repassword.length >= 6) {
    if (password === repassword) {
      return true;
    }else{
      setMsg("Passwords does not match.")
    }
  } else {
          setMsg("Password must be at least 6 characters")
    return false;

  }
}

// Check Already Exists User by Email
function isUserExist(email_add) {
  var isExists = false;
  axios
    .get("http://localhost:8080/users/user")
    .then((fetched) => {
      const users = [...fetched.data];
      for (let i = 0; i < users.length; i++) {
        if (email_add === users[i].email)
        setMsg("already exist")
      }
    })
    .catch((err) => console.error(err));
}


  //toggle view icon
  const toggleView = () => {
    let type1, type2;
    if (Password.current.getAttribute("type") === "password") {
      type1 = "text";
      Password.current.setAttribute("type", type1);
      setIcon(faEyeSlash);
    } else {
      type1 = "password";
      Password.current.setAttribute("type", type1);
      setIcon(faEye);
    }
    if (RePassword.current.getAttribute("type") === "password") {
      type2 = "text";
      RePassword.current.setAttribute("type", type2);
      setIcon(faEyeSlash);
    } else {
      type2 = "password";
      RePassword.current.setAttribute("type", type2);
      setIcon(faEye);
    }
  };

  // Watch inputs onChange
  const setterStates = () => {
    setEmail(Email.current.value);
    setUsername(Username.current.value);
    setPassword(Password.current.value);
    setRePassword(RePassword.current.value);
  };

  // Post credentials to database
  const submitCredentials = () => {
    let credentials = {
      email: Email.current.value,
      username: Username.current.value,
      password: Password.current.value,
    };
    axios
      .post("http://localhost:8080/users/register", credentials)
      .then((data) => console.log(data))
      .catch(console.log("error found"));
  };
  // Check Valide email
  function checker() {
    if (isUserExist(Email.current.value)) {
    } else {
      if (validateEmail(Email.current.value)) {
        setMsg('')
        if (
          ValidatePassword(Password.current.value, RePassword.current.value)
        ) {
        setMsg('')
          //  submitCredentials()
        }
      } else {
        setMsg("Email address is not valid.")
      }
    }
    setShow(true)
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
            {/* <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Error message
        </p>
      </Alert> */}
            <Card.Body>
              <Form
                action="#"
                method="POST"
                className="login-form"
                onSubmit={(e) => e.preventDefault()}
              >
                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Email Address"
                    className="inputs"
                    onChange={setterStates}
                    value={email}
                    ref={Email}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="username"
                    placeholder="Username"
                    className="inputs"
                    onChange={setterStates}
                    ref={Username}
                    value={username}
                    id="username-input"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    className="inputs"
                    id="password-input"
                    onChange={setterStates}
                    value={password}
                    ref={Password}
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
                    onChange={setterStates}
                    value={repassword}
                    ref={RePassword}
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
                  Register
                </Button>
                <div className="forgot-foot">
                  <Link to="/admin">
                    <p className="signup">
                      <a href="/#">Login</a>
                    </p>
                  </Link>
                </div>
              </Form>
              <h6>{msg}</h6>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
export default BlogSignup;
