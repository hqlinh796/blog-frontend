import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import Blog from '../containers/blog/Index';
import BlogDetail from '../containers/blogdetail/Index';
import Contact from '../containers/contact/Index';
import HomeMain from '../containers/home/Index';
import Search from '../containers/search/Index';


class ContentRoute extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={HomeMain} />
                <Route exact path="/blog/search" component={Search} />
                <Route exact path="/blog/:slug.:id" component={BlogDetail} />
                <Route exact path="/blog/:topic" component={Blog} />
                
                <Route path="/contact" component={Contact} />
            </Switch>
        );
    }
}


export default ContentRoute;