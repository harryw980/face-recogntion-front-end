import React from 'react';
import './Logo.css';
import Tilt from 'react-tilt';
import brain from './logo.png';


function Logo() {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner"> <img alt='brain' src={brain} /> </div>
            </Tilt>
        </div>
    );
}

export default Logo;