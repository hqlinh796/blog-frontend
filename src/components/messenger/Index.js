import React, { Component } from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';


class Messenger extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            isShow: true
        })
    }
    
    handleClick = () => this.setState({
        isShow: !this.state.isShow
    })

    render() {
        return (
            <MessengerCustomerChat
                pageId="110885300571206"
                appId="577342806204805"
                shouldShowDialog={this.state.isShow}
            />
        );
    }
    componentDidMount() {
        const btn = document.getElementById('facebook');
        btn.addEventListener('click', () => this.handleClick());
    }
}

export default Messenger;
