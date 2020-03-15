import React, { Component } from 'react';

class SearchResult extends Component {
    render() {
        return (
            <div className="search-result-wrapper col col-12 m-b-50 fs-30">
                <span>Kết quả tìm kiếm cho: </span>
                <span className="f-bold">{this.props.keyword}</span>
            </div>
        );
    }
}

export default SearchResult;