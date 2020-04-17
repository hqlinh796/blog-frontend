import React from 'react';
import Footer from '../footer/Index';
import BackToTop from '../backtotop/Index';
import ContentRoute from '../../routes/ContentRoute';
import Header from '../header/Index';
import LoadingBar from '../loadingbar/Index';

const Index = props => {
    return (
        <div>
          
          <Header />
          <ContentRoute />
          <Footer />
          <BackToTop />
        </div>
    );
};

export default Index;