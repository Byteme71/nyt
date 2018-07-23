import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Article from "./components/pages/Article.js";
import Home from "./components/pages/Home.js";


const App = () => (
  <Router>
    <div className="container">
      <Header/>
      <Route exact path="/" component={Home} />
      <Route exact path="/savedArticles" component={Article} />
    </div>
  </Router>
);

export default App;
