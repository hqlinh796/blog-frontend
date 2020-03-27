import React, { Component } from 'react';

class WriteComment extends Component {
    render() {
        return (
            <div className="write-comment">
                <div className="p-lr-30 p-tb-40 lh-15">
                    <h1 className="fs-18 f-bold m-b-20">
                        Write your comment
    </h1>
                    <form>
                        <textarea name="content" cols={30} rows={10} placeholder="Write your comment" className="width-100 text-area-comment" defaultValue={""} />
                        <div className="name-and-email flex flex-j-sb">
                            <input type="text" name="name" placeholder="Name" className="dis-block width-100" />
                            <input type="text" name="email" placeholder="Email" className="dis-block width-100" />
                        </div>
                        <div className="rate-in-comment m-tb-30">
                            <span>Your rate: </span>
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                        </div>
                        <button type="submit" className="button button-no-color border-green fc-1 ">Send
        comment</button>
                    </form>
                </div>
            </div>

        );
    }
}

export default WriteComment;