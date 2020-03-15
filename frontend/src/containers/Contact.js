import React, { Component } from 'react';
import SendMessage from '../components/contact/SendMessage'
import Info from '../components/contact/Info'


class Contact extends Component {
    render() {
        return (
            
                <section className="container-contact-wrapper container p-tb-50">
                    <div className="row flex-j-sb">
                        <div className="col col-12">
                            <h1 className="fs-25 f-bold m-b-50">
                                Contact me
                        </h1>
                        </div>
                        <SendMessage />
                         <Info />
                    </div>
                </section>
            

        );
    }
}

export default Contact;