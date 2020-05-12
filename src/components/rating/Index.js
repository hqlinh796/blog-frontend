import React, { useEffect, useState } from 'react';
import LikeFacebook from '../likefacebook';
import ShareFacebook from '../sharefacebook';
import './Index.css';


const Rating = (props) => {

    const mouseOver = (id) => {
        removeRate();
        let level = document.getElementById('level1');
        if (!level)
            return;
        while (level.id !== id) {
            //if (level)
            level.classList.add('hover-rate');
            level = level.nextElementSibling;
        }
        level.classList.add('hover-rate');
        if (level.id === 'level5')
            return;

        level = level.nextElementSibling;
        while (level.id !== 'level5') {
            level.classList.remove('hover-rate');
            level = level.nextElementSibling;
        }
        level.classList.remove('hover-rate');
    }

    const mouseOut = () => {

        let level = document.getElementById('level1');

        while (level.id !== 'level5') {
            level.classList.remove('hover-rate');
            level = level.nextElementSibling;
        }
        level.classList.remove('hover-rate');
        addRate();
    }


    const addRate = () => {
        const { id } = props;
        const vote = localStorage.getItem(`vote-${id}`);
        if (vote) {
            let level = document.getElementById('level1');
            if (!level)
                return;
            while (level.id !== `level${vote}`) {
                //if (level)
                level.classList.add('rated');
                level = level.nextElementSibling;
            }
            level.classList.add('rated');
            if (level.id === 'level5')
                return;

            level = level.nextElementSibling;
            while (level.id !== 'level5') {
                level.classList.remove('rared');
                level = level.nextElementSibling;
            }
            level.classList.remove('rated');
        }
    }


    const removeRate = () => {
        let level = document.getElementById('level1');
        while (level.id !== 'level5') {
            level.classList.remove('rated');
            level = level.nextElementSibling;
        }
        level.classList.remove('rated');
    }

    const calulateAverage = (arr) => {
        const avg = arr.reduce((total, value) => total += value) / arr.length;
        return Math.round(avg * 100) / 100;
    }

    const [location, setLocation] = useState(() => window.location.href);
    useEffect(() => {
        setLocation(window.location.href);
    })


    return (
        <div className="rate-wrapper p-tb-10">
            <div className="your-rate-wrapper p-t-20">
                <span>Your rating: </span>
                <i className="fas fa-star" id="level1" onClick={() => props.clickToRate(1)}
                    onMouseOver={() => mouseOver('level1')} onMouseOut={() => mouseOut()} />

                <i className="fas fa-star" id="level2" onClick={() => props.clickToRate(2)}
                    onMouseOver={() => mouseOver('level2')} onMouseOut={() => mouseOut()} />

                <i className="fas fa-star" id="level3" onClick={() => props.clickToRate(3)}
                    onMouseOver={() => mouseOver('level3')} onMouseOut={() => mouseOut()} />

                <i className="fas fa-star" id="level4" onClick={() => props.clickToRate(4)}
                    onMouseOver={() => mouseOver('level4')} onMouseOut={() => mouseOut()} />

                <i className="fas fa-star" id="level5" onClick={() => props.clickToRate(5)}
                    onMouseOver={() => mouseOver('level5')} onMouseOut={() => mouseOut()} />
            </div>
            <div className="rate">
                <span>Ratings: {calulateAverage(props.rating || [0])} </span>
                <span>({props.rating ? props.rating.length : 0} votes)</span>
            </div>
            <div>
                <LikeFacebook location={location} />
                <ShareFacebook location={location} />
            </div>
        </div>
    );

}

export default Rating;