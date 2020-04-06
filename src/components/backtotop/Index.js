import React, { Component, Fragment } from 'react';
import '../backtotop/Index.css';

class BackToTop extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            isShowBTT: false
        })
    }
    
    showBTT = isShowBTT => {
        if (isShowBTT)
            return (
                <div className="back-to-top dis-show" onClick={this.scrollToTop}>
                    <i className="fas fa-arrow-circle-up fs-50" />
                </div>
            )
        return (
            <div className="back-to-top">
                <i className="fas fa-arrow-circle-up fs-50" />
            </div>
        )
    }

    scrollToTop = () => window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });

    render() {
        return (
            <Fragment>
                {this.showBTT(this.state.isShowBTT)}
            </Fragment>
        );
    }
    componentDidMount() {
        //back to top
        window.addEventListener('scroll', () => {
            if (window.scrollY > 1000) {
                if (!this.state.isShowBTT)
                    this.setState({
                        isShowBTT: true
                    })
            }
            else {
                if (this.state.isShowBTT)
                    this.setState({
                        isShowBTT: false
                    })
            }
        })
    }
}

export default BackToTop;