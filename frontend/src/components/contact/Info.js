import React, { Component } from 'react';

class Info extends Component {
    render() {
        return (
            <div className="info-contact col-md-3 col p-b-40  col-12">
                <div className="flex">
                    <div className="thumbnail-info-contact m-r-20">
                        <i className="fas fa-home fs-30 fc-2" />
                    </div>
                    <div>
                        <h1 className="fs-18">
                            320/38 Bong Sao, Quan 8
          </h1>
                        <h2 className="fs-16 fc-2">
                            Hà Quang Linh
          </h2>
                    </div>
                </div>
                <div className="flex m-tb-30">
                    <div className="thumbnail-info-contact m-r-20">
                        <i className="fas fa-phone-alt fs-30 fc-2" />
                    </div>
                    <div>
                        <h1 className="fs-18">
                            Phone
          </h1>
                        <h2 className="fs-16 fc-2">
                            (+84) 396 498 332
          </h2>
                    </div>
                </div>
                <div className="flex">
                    <div className="thumbnail-info-contact m-r-20">
                        <i className="fas fa-envelope fs-30 fc-2" />
                    </div>
                    <div>
                        <h1 className="fs-18">
                            Email
          </h1>
                        <h2 className="fs-16 fc-2">
                            hqlinh.cr@gmail.com
          </h2>
                    </div>
                </div>
            </div>

        );
    }
}

export default Info;