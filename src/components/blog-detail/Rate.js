import React, { Component } from 'react';

class Rate extends Component {

    mouseOver = (id) => {
        //alert('ok');
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
    }

    

    render() {
        return (
            <div className="rate-wrapper p-lr-30 p-tb-10">
                <div className="your-rate-wrapper p-t-20">
                    <span>Your rate: </span>
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
                    <span>Rate: {this.props.rate} </span>
                </div>
            </div>
        );
    }
}

export default Rate;