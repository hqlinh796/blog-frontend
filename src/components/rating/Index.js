import React, { useEffect, useState } from 'react';
import LikeFacebook from '../likefacebook';
import ShareFacebook from '../sharefacebook';
import './Index.css';


const Rating = (props) => {

    const mouseOver = (id) => {
        setYourRating(id);
    }

    const mouseOut = () => {
        const yourRating = parseInt(localStorage.getItem(`vote-${props.id}`)) || 0;
        setYourRating(yourRating);
    }
    const calculateAverageRating = (arr) => {
        if (!arr.length)
            return 0;
        const avg = arr.reduce((total, value) => total = parseInt(total) + parseInt(value)) / arr.length;
        return Math.round(avg * 100) / 100;
    }

    const getLocation = () => window.location.href;

    const [yourRating, setYourRating] = useState(0);

    useEffect(() => {
        const yourRating = parseInt(localStorage.getItem(`vote-${props.id}`)) || 0;
        setYourRating(yourRating);
    }, [props.id])


    const renderRatingElement = (rating) => {
        let i = 0;
        let elements = [];
        while (i < rating) {
            const index = i+1;
            elements.push(
                <i className="fas fa-star rated" id={`${i+1}`} onClick={() => props.clickToRate(index)}
                    onMouseOver={() => mouseOver(index)} onMouseOut={mouseOut}  key={i}/>
            )
            i++;
        }
        while (i < 5) {
            const index = i+1;
            elements.push(
                <i className="fas fa-star" id={`${i+1}`} onClick={() => props.clickToRate(index)}
                    onMouseOver={() => mouseOver(index)} onMouseOut={mouseOut}  key={i}/>
            )
            i++;
        }
        return elements;
    }


    return (
        <div className="rate-wrapper p-tb-10">
            <div className="your-rate-wrapper p-t-20">
                <span>Your rating: </span>
                {renderRatingElement(yourRating)}

            </div>
            <div className="rate">
                <span>Ratings: {calculateAverageRating(props.rating || [0])} </span>
                <span>({props.rating ? props.rating.length : 0} votes)</span>
            </div>
            <div>
                <LikeFacebook location={getLocation()} />
            </div>
        </div>
    );

}

export default Rating;