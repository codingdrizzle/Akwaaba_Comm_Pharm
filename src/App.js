import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import About from "./Components/About";
import NewsFeed from "./Components/NewsFeed";
import HealthTips from "./Components/HealthTips";
import Contact from "./Components/Contact";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/news-feed" exact component={NewsFeed} />
          <Route path="/health-tips" component={HealthTips} />
          <Route path="/contact" component={Contact} />
          <Home />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
