import React from "react";
import { Card } from "react-bootstrap";
export default function NewsCard(props) {
  const { img, title, text, publisher, daystamp, datestamp, timestamp } = props;
  return (
    <Card className="shadow">
      <Card.Img variant="top" src={img}></Card.Img>
      <Card.Body>
        <Card.Title className="news-title">{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Card.Footer className="text-muted prev-footer">
          <p>
            <strong>{publisher}</strong>
          </p>
          <p className="date-stamp">
            <span className="bold">{daystamp}, </span>
            {datestamp} &nbsp;&nbsp;-{timestamp}-
          </p>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
}
