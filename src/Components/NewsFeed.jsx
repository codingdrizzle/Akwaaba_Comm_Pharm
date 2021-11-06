import axios from "axios";
import {useEffect} from 'react'




function NewsFeed() {
  // useEffect(function getData() {
  //   axios
  //     .get("/news-feed")
  //     .then((response) => {
  //       const data = response.data;
  //       console.log(data);
  //     })
  //     .catch(() => console.log("Found error"));
  // }, []);
  return <div>Hello NewsFeed</div>;
}

export default NewsFeed;
