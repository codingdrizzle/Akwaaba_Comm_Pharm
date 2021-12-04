import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from './App';
import Blog from './BlogComponents/Blog'

const Routing = ()=>{
  return(
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/admin" component={Blog} />
      </Switch>
    </Router>
  );

}

ReactDOM.render(
    <Routing />,
  document.getElementById('root')
);
