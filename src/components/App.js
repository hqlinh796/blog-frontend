import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import '../css/App.css';

import Footer from './share/Footer';
import BackToTop from './share/BackToTop';
import ContentRoute from '../routes/ContentRoute';
import Header from './share/Header';


function App() {
  return (
    <Router>
        <Header/>
        <ContentRoute/>
        <Footer />
        <BackToTop />
    </Router>   
  );
}

export default App;
