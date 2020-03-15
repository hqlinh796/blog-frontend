import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import HomeSlide from '../components/home/HomeSlide';
import Slide2 from '../components/share/Slide2'


class HeaderRoute extends Component {
    render() {
        return (
                <Switch>
                    <Route exact path="/">
                        <HomeSlide/>
                    </Route>
                    <Route path="/blog/:slug.:id">
                        <Slide2 title="Blog detail"/>
                    </Route>
                    <Route path={"/blog/:topic"} component={Slide2}/>
                    
                    <Route path="/contact">
                        <Slide2 title="Contact me"/>
                    </Route>
                </Switch>
        );
    }
}

export default HeaderRoute;