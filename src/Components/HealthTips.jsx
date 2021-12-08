import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import axios from "axios";
import "../ComponentStyles/HealthTips.css";
import Cardi from "./Cardi";
import Loader from "./Loader";
import nicer from "../Images/nicer.jpg";

export default function HealthTips() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);
  const [loaded, setLoad] = useState(false);
  const fetchItems = async () => {
    setLoad(false);
    axios
      .get("http://localhost:8080/health-tips")
      .then((res) => {
        const fetchedItems = [...res.data];
        setItems(fetchedItems);
        setLoad(true);
      })
      .catch((err) => console.error(err));
    console.log("done fetching, we meuve!!!");
  };
  return (
    <>
      <Container>
        <Row>
          <Col xs="12" md="12" lg="12" className="my-5">
            <h3 className="title news-heading">
              Read health tips from 'Akwaaba Community Pharmacy'
            </h3>
          </Col>
        </Row>

               {loaded?
        <Row>
          {items.map((item) => (
            <Cardi
            key={item._id}
              img={nicer}
              title={item.tips_title}
              text={item.tips_text}
              publisher={item.publisher}
              stamp={item.publish_date}
            />
          ))}
        </Row> :  <Loader/>}
      </Container>
    </>
  );
}
