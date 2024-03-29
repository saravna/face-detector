import React from 'react';

const Navigation=({isSignedIn,onRouteChange})=>{
    if(isSignedIn){
        return(
            <nav style={{display:'flex',justifyContent:'flex-end',marginRight:'20px'}}>
                <p onClick={() => onRouteChange('signin')} className="f3 dim black underline pa3 pointer">Sign Out</p>
            </nav>
        );
    } else {
        return(
            <nav style={{display:'flex',justifyContent:'flex-end',marginRight:'20px'}}>
                <p onClick={() => onRouteChange('signin')} className="f3 dim black underline pa3 pointer">Sign In</p>
                <p onClick={() => onRouteChange('register')} className="f3 dim black underline pa3 pointer">Register</p>
            </nav>
        );
    }
}

export default Navigation;