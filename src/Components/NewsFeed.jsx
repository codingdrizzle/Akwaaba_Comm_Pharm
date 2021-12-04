import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import axios from "axios";
import "../ComponentStyles/News.css";
import NewsCard from "./NewsCard";
import nicer from "../Images/nicer.jpg";

export default function NewsFeed() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);
  const fetchItems = async () => {
    axios
      .get("http://localhost:8080/get-news-feed")
      .then((res) => {
        const fetchedItems = [...res.data];
        setItems(fetchedItems);
      })
      .catch((err) => console.error(err));

    // const data = await fetch('/get-news-feed');

    // const items = await data.json();
    // console.log(items);
    // console.log("Hi there, I'm active");
    // setItems(items.items)
  };
  return (
    <>
      <Container>
        <Row>
          <Col xs="12" md="12" lg="12" className="my-5">
            <h3 className="title news-heading">
              News about Akwaaba Community Pharmacy
            </h3>
          </Col>
        </Row>

        <Row>
          {items.map((item) => (
            <NewsCard
              img={nicer}
              title={item.news_title}
              text={item.news_text}
              publisher={item.publisher}
              stamp={item.publish_date}
            />
          ))}
        </Row>
      </Container>
    </>
  );
}
