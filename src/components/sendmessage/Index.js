import React, { Component } from 'react';
import './Index.css';

class SendMessage extends Component {
    render() {
        return (
            <div className="write-message col-md-8 col col-12">
                <div className="p-b-40 lh-15">
                    <form className="contact-me">
                        <input type="text" name="topic" placeholder="Topic" className="dis-block m-b-20 width-100" />
                        <textarea name="content" cols={30} rows={10} placeholder="Write your comment" className="width-100 text-area-comment" defaultValue={""} />
                        <div className="name-and-email flex flex-j-sb">
                            <input type="text" name="name" placeholder="Name" className="dis-block width-100" />
                            <input type="text" name="email" placeholder="Email" className="dis-block width-100" />
                        </div>
                        <button type="submit" className="button button-no-color border-green fc-1 m-t-30">Send</button>
                    </form>
                </div>
            </div>

        );
    }
}

export default SendMessage;