import React from 'react';

function Navigation({ signedIn, routeChange, isGuest }) {
    //Displaying buttons for signinPage/registerPage accourding to isSignedIn state
    if(signedIn){
        return (
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p onClick={() => routeChange('signin', false)} className='f3 link dim black underline pa3 pointer'>{isGuest?'Guest Sign Out':`Sign Out`}</p>
            </nav>
        );
    }else{
        return (
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p onClick={() => routeChange('signin', false)} className='f3 link dim black underline pa3 pointer'>Sign In</p>
                <p onClick={() => routeChange('register', false)} className='f3 link dim black underline pa3 pointer'>Register</p>
            </nav>
        );
    }
}

export default Navigation;
