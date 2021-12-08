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

  function extractData() {
    const data = {
      img: imgChanges.current.value,
      title: titleChanges.current.value,
      text: textChanges.current.value,
      publisher: publisherChanges.current.value,
      publish_date: stampChanges.current.value
    };

    axios.post(props.endPoint, data)
    .then((data)=>console.log("posted" + data))
    .catch(err => console.error(err))
  }
  const trackChanges = () => {
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
  };
  // imgChanges.current.addEventListener('change', inpFile)
  return (
    <>
      <Row>
        <Col className="mx-5">
          <Form
            action="#"
            method=""
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
                    value={`Published on ${stamp}`}
                    className="text-center"
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
                    className="publish-btn"
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
