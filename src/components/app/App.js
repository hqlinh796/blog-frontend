import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';
import Layout from '../layout/Index';

import Login from '../../containers/login/Index';
import Signup from '../../containers/signup/Index';
import Header from '../header/Index';
import ContentRoute from '../../routes/ContentRoute';
import Footer from '../footer/Index';
import BackToTop from '../backtotop/Index';
import Messenger from '../messenger/Index';


function App() {
  return (
    <Router>
        
        <Header />
        <ContentRoute />
        <Footer />
        <BackToTop />
    </Router>   
  );
}

export default App;
