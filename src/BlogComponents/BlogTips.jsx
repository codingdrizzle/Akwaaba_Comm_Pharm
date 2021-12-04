import React from "react";
import { Row, Col } from "react-bootstrap";
import NewPost from "./PostTypes/NewPost";

export default function BlogTips() {
  return (
    <>
      <Row>
        <Col>
          <h3 className="news-blog-caption">Blog Health Tips</h3>
        </Col>
      </Row>
     <NewPost />
    </>
  );
}