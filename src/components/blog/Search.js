import React, { Component } from 'react';

class Search extends Component {

    constructor(props){
        super(props);
        this.state = ({
            keyword:  ''
        })
    }

    getKeyword = (e) => {
        const value = e.target.value;
        this.setState({
            keyword: value
        })
    }


    render() {
        console.log("search render");
        return (
            <div className="blog-slide-bar-search">
                <form>
                    <input autoComplete="off" name="keyword" type="text" value={this.state.keyword} onChange={(event) => this.getKeyword(event)} placeholder="Search keyword . . ." className="dis-block width-100 m-b-20 p-lr-10" />
                    <button onClick={(event) => this.props.keyword(event, this.state.keyword)} className="dis-block width-100 button button-no-color border-green fc-1">Search</button>
                </form>
            </div>
        );
    }

    shouldComponentUpdate(nextProps, nextState){
        if (nextState.keyword === this.state.keyword && nextState.keyword !== ""){
            this.setState({
                keyword: ""
            })
            return false;
        }
        return true;
    }
}

export default Search;