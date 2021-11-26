import React, { useRef, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import "../../BlogComponentStyles/BlogNews.css";
import PreviewCard from "../PreviewCard"; 


const dayName = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
const D = new Date();
let day = D.getDay();
let date = D.getDate();
let month = D.getMonth();
let year = D.getFullYear();
let hour = D.getHours();
let minute = D.getMinutes().toString();
minute = minute.length === 1 ? `0${minute}` : `${minute}`;
const daystamp = `${dayName[day]}`;
const datestamp = `${date}/${month}/${year}`;
const timestamp = `${hour}:${minute}`;
export default function NewPost() {
  const [titleUpdate, setTitle] = useState("");
  const [textUpdate, setText] = useState("");
  const [publisherUpdate, setPublisher] = useState("");
  const [src, setSrc] = useState("");

  // Refs
  const titleChanges = useRef(null);
  const imgChanges = useRef(null);
  const textChanges = useRef(null);
  const publisherChanges = useRef(null);

  const trackChanges = () => {
    setTitle(titleChanges.current.value);
    setText(textChanges.current.value);
    setPublisher(
      publisherChanges.current.value === ""
        ? `${publisherChanges.current.value}`
        : `Published by "${publisherChanges.current.value}"`
    );
  };
  

  const inpFile = ()=>{
    const file = imgChanges.current.files[0];
    if(file){
      const reader = new FileReader();

      reader.addEventListener('load', ()=>{
        setSrc(reader.result)
      })
      reader.readAsDataURL(file); 
    }else{
      setSrc(null);
      imgChanges.current.value = null
    }
  }
  // imgChanges.current.addEventListener('change', inpFile)
  return (
    <>
      <Row>
        <Col className="mx-5">
          <Form action="#" method="POST" className="">
            <Row className="my-4 p-2 details-area">
              <Col xs="12" md="12" lg="6" className="details-area pt-0">
                <Row className="my-3">
                  <Col xs="12" md="12" lg="12">
                    <h4 className="type-caption">New Post</h4>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="file"
                    accept=".png, .jpg, .jpeg .gif .icom"
                    ref={imgChanges}
                    onChange={inpFile}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="News Title"
                    ref={titleChanges}
                    onChange={trackChanges}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="News Text"
                    ref={textChanges}
                    onChange={trackChanges}
                  />
                  <Form.Control />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Name of Publisher"
                    ref={publisherChanges}
                    onChange={trackChanges}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    readOnly
                    disabled
                    value={`Published on ${daystamp}, ${datestamp}  -${timestamp}-`}
                    className="text-center"
                  />
                </Form.Group>
              </Col>
              <Col xs="12" md="12" lg="6" className="mt-2">
                <Row className="my-3">
                  <Col xs="12" md="12" lg="12">
                    <h4 className="preview-caption">Post Preview</h4>
                  </Col>
                </Row>
                <PreviewCard
                  img={src}
                  title={titleUpdate}
                  text={textUpdate}
                  publisher={publisherUpdate}
                  daystamp={daystamp}
                  datestamp={datestamp}
                  timestamp={timestamp}
                />
              </Col>
              <Col xs="12" md="12" lg="12" className="mt-4">
                <div className="publish-btn-parent">
                  <Button
                    variant="primary"
                    type="submit"
                    className="publish-btn"
                  >
                    Publish Post &nbsp;
                    <FontAwesomeIcon
                      icon={faPaperPlane}
                    ></FontAwesomeIcon>
                  </Button>
                </div>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </>
  );
}