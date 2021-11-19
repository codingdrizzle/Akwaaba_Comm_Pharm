import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import BlogLogin from "./BlogLogin";
import BlogNav from "./BlogNav";
import BlogNews from "./BlogNews";
import BlogTips from "./BlogTips";

function Blog() {
  return (
    <>
      {/* <Router>
          <BlogNav/>
        <Switch>
          <Route path="/login" component={BlogLogin} />
          <Route path="/blognews" component={BlogNews} />
          <Route path="/blogtips" component={BlogTips} />
        </Switch>
      </Router> */}
      {/* <BlogLogin /> */}
      <BlogNews />
    </>
  );
}

export default Blog;
