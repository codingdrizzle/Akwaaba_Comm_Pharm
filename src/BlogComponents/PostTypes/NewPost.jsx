import React, { useRef, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
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
const daystamp = `${dayName[day]}`;
const datestamp = `${date}/${month+1}/${year}`;
const stamp = `${daystamp}, ${datestamp}`
export function NewPost(props) {
  const [titleUpdate, setTitle] = useState("");
  const [textUpdate, setText] = useState("");
  const [publisherUpdate, setPublisher] = useState("");
  const [stampUpdate, setStamp] = useState("");
  const [src, setSrc] = useState("");

  // Refs
  const imgChanges = useRef(null);
  const titleChanges = useRef(null);
  const textChanges = useRef(null);
  const publisherChanges = useRef(null);
  const stampChanges = useRef(null);
  const extract = useRef(null);

  const trackChanges = () => {
    if(titleChanges.current.value !== "" && textChanges.current.value !== "" && publisherChanges.current.value !== "" &&  imgChanges.current.files.length !== 0){
      extract.current.disabled = false
    }else{
      extract.current.disabled = true
    }
    setTitle(titleChanges.current.value);
    setText(textChanges.current.value);
    setPublisher(
      publisherChanges.current.value === ""
        ? `${publisherChanges.current.value}`
        : `Published by "${publisherChanges.current.value}"`
    );
    setStamp(stamp)
  };

  const inpFile = () => {
        if(imgChanges.current.files.length !== 0){
      extract.current.disabled = false
    }else{
      extract.current.disabled = true
    }
    console.log(imgChanges.current.files)
    const file = imgChanges.current.files[0];
    if (file) {
      const reader = new FileReader();

      reader.addEventListener("load", () => {
        setSrc(reader.result);
      });
      reader.readAsDataURL(file);
    } else {
      setSrc(null);
      imgChanges.current.value = null;
    }
  }
    function extractData() {
    console.log('clicked  ')
    if(extract.current.disabled === true){
      alert("Fill in all blanks!")
    }
    const data = {
      image: imgChanges.current.files[0],
      title: titleChanges.current.value,
      text: textChanges.current.value,
      publisher: publisherChanges.current.value,
      publish_date: stampChanges.current.value
    };

    axios.post(props.endPoint, data)
    .then((data)=>console.log("posted" + data))
    .catch(err => console.error(err))
  }
  return (
    <>
      <Row>
        <Col className="mx-5">
          <Form
            action=""
            method="POST"
            encType="multipart/form-data"
            className=""
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
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
                    name="image"
                    accept=".png, .jpg, .jpeg .gif .icom"
                    ref={imgChanges}
                    onChange={inpFile}
                    className="inputs"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="News Title"
                    ref={titleChanges}
                    onChange={trackChanges}
                    className="inputs"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    as="textarea"
                    rows={3}
                    placeholder="News Text"
                    ref={textChanges}
                    onChange={trackChanges}
                    className="inputs"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Name of Publisher"
                    ref={publisherChanges}
                    onChange={trackChanges}
                    className="inputs"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    readOnly
                    disabled
                    value={`Published on ${stamp}`}
                    className="text-center inputs"
                    ref={stampChanges}
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
                  stamp={stampUpdate}
                />
              </Col>
              <Col xs="12" md="12" lg="12" className="mt-4">
                <div className="publish-btn-parent">
                  <Button
                    variant="primary"
                    type="submit"
                    className="publish-btn inputs"
                    ref={extract}
                    onClick={extractData}
                  >
                    Publish Post &nbsp;
                    <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
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
