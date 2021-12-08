import React from 'react'
import {Col, Card} from 'react-bootstrap'
import "../ComponentStyles/News.css";
export default function Cardi(props){

  const {img, title, text, publisher, stamp} = props;
    return(
        <Col xs="12" md="6" lg="4" className="my-3">
            <Card className="shadow">
              <Card.Img variant="top" src={img}></Card.Img>
              <Card.Body>
                <Card.Title className="news-title">{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
                 <Card.Footer className="text-muted news-footer">
                   <p>Published by {publisher}</p>
                    <p className="date-stamp"><strong>{stamp}</strong></p> 
                  </Card.Footer>
              </Card.Body>
            </Card>
        </Col>
    );
}