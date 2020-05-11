import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';
import Blog from '../../containers/blog/Index';
import BlogDetail from '../../containers/blogdetail/Index';
import Contact from '../../containers/contact/Index';
import Home from '../../containers/home/Index';
import Search from '../../containers/search/Index'



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blog/search" component={Search} />
        <Route exact path="/blog/:slug.:id" component={BlogDetail} />
        <Route exact path="/blog/:topic" component={Blog} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>   
  );
}

export default App;
