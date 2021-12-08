import React, { useRef, useState } from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import {Link, Redirect, useHistory} from "react-router-dom"
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faLock } from "@fortawesome/free-solid-svg-icons";
import "../BlogComponentStyles/BlogLogin.css";
function BlogLogin() {
  const [icon, setIcon] = useState(faEye);
  const Username = useRef(null);
  const Password = useRef(null);
  const changeIcon = useRef(null);
  const toggleView = () => {
    let type;
    if (Password.current.getAttribute("type") === "password") {
      type = "text";
      Password.current.setAttribute("type", type);
      setIcon(faEyeSlash);
    } else {
      type = "password";
      Password.current.setAttribute("type", type);
      setIcon(faEye);
    }
  };

  const history = useHistory();
  const authUser = ()=>{
    axios.get("http://localhost:8080/users")
    .then((res)=>{
      const Users = [...res.data]
      for(let i=0; i<Users.length;i++){
        if(Username.current.value === Users[i].username && Password.current.value === Users[i].password){
          console.log('Valid User');
          history.push("/admin/blogs");
          <Redirect to="/admin/blogs"/>
        }else{
          alert("Invalid Username or Password. Try again!")
          console.log("Sorry!! YOu're an Alien")
        }
      }
    })
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
                onClick={toggleView}
                ref={changeIcon}
              ></FontAwesomeIcon>
              <h3 className="login-caption">LOGIN</h3>
            </div>
            <Card.Body>
              <Form action="#" method="GET" className="login-form" onSubmit={(e)=>e.preventDefault()}>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="username"
                    placeholder="Username"
                    className="inputs"
                    id="username-input"
                    ref={Username}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    className="inputs"
                    id="password-input"
                    ref={Password}
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
                <Button variant="primary" type="submit" id="login-btn" onClick={authUser}>
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