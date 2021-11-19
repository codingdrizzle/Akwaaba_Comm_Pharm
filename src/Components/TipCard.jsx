import React from 'react'
import {Col, Card} from 'react-bootstrap'
export default function TipCard(props){
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
              <Card.Img variant="top" src={props.img}></Card.Img>
              <Card.Body>
                <Card.Title className="tip-title">Heading for Tip</Card.Title>
                <Card.Text> Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Sit, nam repudiandae deserunt provident itaque esse
                      aliquam! Culpa, iure sed voluptatibus eius temporibus
                      vitae voluptate, ab exercitationem nisi numquam,
                      laboriosam praesentium
                </Card.Text>
                 <Card.Footer className="text-muted tip-footer">
                   <p>Published by Name</p>
                   <div className="to-right">
                    <p className="date-stamp"><span className="bold">{daystamp}, </span>{datestamp}</p> 
                    {/* <p className="time-stamp">{timestamp}</p>  */}
                   </div>
                  </Card.Footer>
              </Card.Body>
            </Card>
        </Col>
    );
}