import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import HomeSlide from '../components/homeslide/Index';
import Slide from '../components/slide/Index'


class HeaderRoute extends Component {
    render() {
        return (
                <Switch>
                    <Route exact path="/">
                        <HomeSlide/>
                    </Route>
                    <Route path="/blog/:slug.:id" component={Slide}/>
                   
                    <Route path="/blog/:topic" component={Slide}/>
                    
                    <Route path="/contact">
                        <Slide title="Contact me"/>
                    </Route>
                </Switch>
        );
    }
}

export default HeaderRoute;