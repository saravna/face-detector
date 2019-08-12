import React from 'react';

const ImageSearchUrl = ({onSubmitClick, onInputChange}) => {
    return(
        <div>
            <div className="br2 shadow-2 w-30 center pa3 tc">
                <input type='text' onChange={onInputChange} className="center w-70"></input>
                <button onClick={onSubmitClick} className="ba w-30 br1 link pointer grow bg-orange">Detect Face</button>
            </div>
        </div>
    );
}

export default ImageSearchUrl;