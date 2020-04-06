import React, { Component } from 'react';
import './Index.css';

class Rating extends Component {

    mouseOver = (id) => {
        this.removeRate();
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

    mouseOut = () => {
        
        let level = document.getElementById('level1');

        while (level.id !== 'level5') {
            level.classList.remove('hover-rate');
            level = level.nextElementSibling;
        }
        level.classList.remove('hover-rate');
        this.addRate();
    }


    addRate = () => {
        const { id } = this.props;
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


    removeRate = () => {
        let level = document.getElementById('level1');
        while (level.id !== 'level5') {
            level.classList.remove('rated');
            level = level.nextElementSibling;
        }
        level.classList.remove('rated');
    }

    calulateAverage = (arr) => {
        const avg = arr.reduce((total, value) => total += value)/arr.length;
        return Math.round(avg*100)/100;
    }

    render() {
        return (
            <div className="rate-wrapper p-tb-10">
                <div className="your-rate-wrapper p-t-20">
                    <span>Your rating: </span>
                    <i className="fas fa-star" id="level1" onClick={() => this.props.clickToRate(1)}
                    onMouseOver={() => this.mouseOver('level1')} onMouseOut={() => this.mouseOut()}/>

                    <i className="fas fa-star" id="level2" onClick={() => this.props.clickToRate(2)}
                    onMouseOver={() => this.mouseOver('level2')} onMouseOut={() => this.mouseOut()}/>

                    <i className="fas fa-star" id="level3" onClick={() => this.props.clickToRate(3)}
                    onMouseOver={() => this.mouseOver('level3')} onMouseOut={() => this.mouseOut()}/>

                    <i className="fas fa-star" id="level4" onClick={() => this.props.clickToRate(4)}
                    onMouseOver={() => this.mouseOver('level4')} onMouseOut={() => this.mouseOut()}/>

                    <i className="fas fa-star" id="level5" onClick={() => this.props.clickToRate(5)}
                    onMouseOver={() => this.mouseOver('level5')} onMouseOut={() => this.mouseOut()}/>
                </div>
                <div className="rate">
                    <span>Rate: {this.calulateAverage(this.props.rating || [0])} </span>
                    <span>({this.props.rating ? this.props.rating.length : 0} votes)</span>
                </div>
            </div>
        );
    }
}

export default Rating;