import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class PrevPostItem extends Component {

    toSlug = (str) => {
        // Chuyển hết sang chữ thường
        str = str.toLowerCase();

        // xóa dấu
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');

        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');

        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-');

        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, '');

        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, '');

        // return
        return str;
    }

    render() {
        return (
            <div className="pre-post flex col-12 col-sm-6 col">
                <img src={this.props.thumbnail} alt="" className="pre-post-thumbnail m-r-20" />
                <div className="pre-post-text flex flex-j-c flex-d-c">
                    <h2 className="fc-2 fs-14">
                        <i className="fas fa-arrow-left" aria-hidden="true" />
                        Prev
                    </h2>
                    <Link title={this.props.title} to={"/blog/" + this.toSlug(this.props.title) + '.' + this.props.id} className="fs-18 a-hover-to-green fc-black m-t-8 f-bold">
                        {this.props.title}
                    </Link>
                </div>
            </div>
        );
    }
}

export default PrevPostItem;