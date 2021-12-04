import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BlogLogin from "./BlogLogin";
import BlogNav from "./BlogNav";
import BlogNews from "./BlogNews";
import BlogTips from "./BlogTips";
import BlogForgot from "./Forgot-password"
import BlogSignup from "./BlogSignup";

function BlogRoute() {
  return (
    <Router>
      <BlogNav />
      <Switch>
        <Route path="/admin/blognews" exact component={BlogNews} />
        <Route path="/admin/blogtips" exact component={BlogTips} />
      </Switch>
    </Router>
  );
}

function Blog() {
  return (
    <>
      {/* <Router>
        <BlogNav />
        <Switch>
          <Route path="/admin/login" component={BlogLogin} />
          <Route path="/admin/blognews" component={BlogNews} />
          <Route path="/admin/blogtips" component={BlogTips} />
        </Switch>
      </Router> */}
        <Router>
        <Switch>
          <Route path="/admin" exact component={BlogLogin} />
          <Route path="/admin/forgot-password" exact component={BlogForgot} />
          <Route path="/admin/signup" exact component={BlogSignup} />
          <Route path="/admin/blogs" exact component={BlogRoute} />
        </Switch>
      </Router>
      {/* <BlogLogin />
      <BlogRoute /> */}
    </>
  );
}

export default Blog;
