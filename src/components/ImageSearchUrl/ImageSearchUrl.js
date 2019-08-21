import React from 'react';

const ImageSearchUrl = ({onSubmitClick, onInputChange}) => {
    return(
        <div>
            <div className="br2 shadow-2 w-30 center pa3 tc" style={{minWidth:'300px'}}>
                <input type='text' onChange={onInputChange} className="center w-70" style={{minWidth:'150px'}}></input>
                <button onClick={onSubmitClick} className="ba w-30 br1 link pointer grow bg-orange" style={{minWidth:'100px'}}>Detect Face</button>
            </div>
        </div>
    );
}

export default ImageSearchUrl;