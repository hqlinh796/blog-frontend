import React from 'react';
import Styles from './Index.module.css';

const Index = (props) => {
    return (
        
            <div className={`col col-12 ${Styles.searchText} p-b-50`}>
                <span>Search results for: </span>
                <span className="fc-black f-bold">&nbsp;{props.keyword}</span>
            </div>
    );
};

export default Index;