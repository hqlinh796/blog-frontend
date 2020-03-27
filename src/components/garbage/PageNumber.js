import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class PageNumber extends Component {

    getListPage = (page) => {
        let result = [];
        const {totalPosts, totalPostsPerPage } = this.props;
        const numberOfPage = parseInt(totalPosts/totalPostsPerPage) + 1;
        let startPage = 0, endPage = numberOfPage-1;

        if (numberOfPage>3){
            if (page===0){
                startPage = 0;
                endPage = 2;
            }else if (page===numberOfPage-1){
                endPage = page;
                startPage = numberOfPage - 3;
            }else{
                startPage = page - 1;
                endPage = parseInt(page) + 1;
            }
        }

        result.push(
            <Link to='/blog?page=0' key={-1}>
                <div className="page-number-content">
                    &lt;
                </div>
            </Link>
        )
        
        for (let i = startPage; i<=endPage; i++){
            if (i === parseInt(page))
                result.push(
                    <Link to={'/blog?page=' + i} key={i}>
                        <div className="page-number-content page-active">
                            {parseInt(i) + 1}
                        </div>
                    </Link>
                )
            else
                result.push(
                    <Link to={'/blog?page=' + i} key={i}>
                        <div className="page-number-content">
                            {parseInt(i) + 1}
                        </div>
                    </Link>
                )
        }

        result.push(
            <Link to={'/blog?page=' + (numberOfPage-1)} key={numberOfPage}>
                <div className="page-number-content">
                    &gt;
                </div>
            </Link>
        )
        
        return result;
    }

    render() {
        return (
            <div className="page-number flex flex-a-c flex-j-c p-b-100">
                
                {this.getListPage(this.props.page)}
                
            </div>

        );
    }
}

export default PageNumber;