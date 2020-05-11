import React from 'react';

const SortPost = (props) => {

    const handleOnChange = (e) => {
        props.changeSort(e.target.value);
    }

    return (
        <div className="col col-sm-8 p-tb-30 flex flex-j-e flex-a-c">
            <label htmlFor="sort-by">Sort by &nbsp;</label>
            <select name="" id="sort-by" onChange={(e) => handleOnChange(e)}>
                <option value="date">Date</option>
                <option value="title">Title</option>
                <option value="views">View</option>
                <option value="rating">Rating</option>
            </select>
        </div>
    );
};

export default SortPost;