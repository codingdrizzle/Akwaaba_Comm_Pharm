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
  const titleChanges = useRef(null);
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
  return (
    <>
      <Row>
        <Col className="m-5">
          <Row className="my-4">
            <Col xs="12" md="12" lg="6" className="details-area p-5 pt-0">
              <Row className="my-3">
                <Col xs="12" md="12" lg="12">
                  <h4 className="type-caption">New Post</h4>
                </Col>
              </Row>
              <Form action="" method="" className="">
                <Form.Group className="mb-3">
                  <Form.Control
                    type="file"
                    accept=".png, .jpg, .jpeg .gif .icom"
                    ref={titleChanges}
                    onChange={trackChanges}
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
              </Form>
            </Col>
            <Col xs="12" md="12" lg="6" className="mt-2 p-4">
              <Row className="my-3">
                <Col xs="12" md="12" lg="12">
                  <h4 className="preview-caption">Post Preview</h4>
                </Col>
              </Row>
              <PreviewCard
                img=""
                title={titleUpdate}
                text={textUpdate}
                publisher={publisherUpdate}
                daystamp={daystamp}
                datestamp={datestamp}
                timestamp={timestamp}
              />
            </Col>
            <Col xs="12" md="12" lg="12" className="mt-2">
              <div className="publish-btn-parent">
                <Button variant="primary" type="submit" className="publish-btn">
                  Publish Post &nbsp;
                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    size=""
                  ></FontAwesomeIcon>
                </Button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
} 