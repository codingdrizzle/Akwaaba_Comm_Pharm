import React from 'react'
import {Col, Card} from 'react-bootstrap'
export default function NewsCard(props){

  const {img, title, text, publisher, stamp} = props;
          const dayName = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
      const D = new Date();
      let day = D.getDay();
      let date = D.getDate();
      let month = D.getMonth()
      let year = D.getFullYear()
      const daystamp = `${dayName[day]}`;
      const datestamp = `${date}/${month}/${year}`;
      //   let hour = D.getHours()
      //   let minute = D.getMinutes().toString()
      // const timestamp = `${hour}:${minute}`;
    return(
        <Col xs="12" md="4" lg="4" className="my-3">
            <Card className="shadow">
              <Card.Img variant="top" src={img}></Card.Img>
              <Card.Body>
                <Card.Title className="news-title">{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
                 <Card.Footer className="text-muted news-footer">
                   <p>Published by {publisher}</p>
                   <div className="to-right">
                    <p className="date-stamp"><span className="bold">{stamp}</span></p> 
                    {/* <p className="date-stamp"><span className="bold">{daystamp}, </span>{datestamp}</p>  */}
                    {/* <p className="time-stamp">{timestamp}</p>  */}
                   </div>
                  </Card.Footer>
              </Card.Body>
            </Card>
        </Col>
    );
}