import React, {Component} from 'react';
import {Box} from "@material-ui/core";
import './Smiley.css';


//CSS

class Smiley extends Component {
    _onMouseMove(e){
        var eye = document.querySelectorAll('.eye');
        eye.forEach(function(eye)
        {
            let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
            let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
            let radian = Math.atan2( e.screenX - x, e.screenY - y);
            let rot = (radian * (180 / Math.PI) * -1) + 270;
            eye.style.transform = "rotate("+rot+"deg)";
        })
    }
    render() {
    return (
        <Box onMouseMove={this._onMouseMove.bind(this)}>
        <div className="face">
            <div className="eyes">
                <div className="eye"></div>
                <div className="eye"></div>
            </div>
        </div>
        </Box>
    );
    }
}

export default Smiley
