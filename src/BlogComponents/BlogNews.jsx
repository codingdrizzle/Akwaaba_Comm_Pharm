import React from "react";
import { Row, Col } from "react-bootstrap";
import NewPost from "./PostTypes/NewPost";

export default function BlogNews() {
  return (
    <>
      <Row>
        <Col>
          <h3 className="news-blog-caption">Blog NewsFeed</h3>
        </Col>
      </Row>
     <NewPost />
    </>
  );
}
