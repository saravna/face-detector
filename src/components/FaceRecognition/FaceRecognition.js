import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = (props) => {
    const {box,imageUrl} = props;
    console.log();
    return(
        <div className="center">
            <div className="absolute mt2">
            <img alt='' id="image" src={imageUrl} height='auto' width='400px '></img>
            <div style={{top : box.top, right : box.right, bottom : box.bottom, left : box.left}} 
                className="bounding-box"></div>
            </div>
        </div>
    );
}

export default FaceRecognition;