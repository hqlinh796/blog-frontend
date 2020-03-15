import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import Blog from '../containers/Blog';
import BlogDetail from '../containers/BlogDetail';
import Contact from '../containers/Contact';
import HomeMain from '../containers/HomeMain';


class ContentRoute extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={HomeMain} />
                <Route exact path="/blog/:slug.:id" component={BlogDetail} />
                <Route exact path="/blog/:topic" component={Blog} />
                <Route path="/contact" component={Contact} />
            </Switch>
        );
    }
}


export default ContentRoute;