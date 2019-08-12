import Tilt from 'react-tilt';
import React from 'react';
import logo from './Logo.png';
const Logo = () =>{
    return(
        <Tilt className="position br2 shadow-3 Tilt" options={{ reverse:true,max : 20 }} style={{ height: 100, width: 100 }} >
            <div className="Tilt-inner"> <img alt="" src={logo}></img> </div>
        </Tilt>
    );
}

export default Logo;