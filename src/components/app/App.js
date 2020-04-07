import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import './App.css';

import Header from '../header/Index';
import ContentRoute from '../../routes/ContentRoute';
import Footer from '../footer/Index';
import BackToTop from '../backtotop/Index';



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
