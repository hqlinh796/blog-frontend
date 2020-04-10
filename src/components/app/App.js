import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import './App.css';

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
        <Messenger />
    </Router>   
  );
}

export default App;
