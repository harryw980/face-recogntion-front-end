import React from 'react';
import './FaceRecognition.css';


function FaceRecognition({ celebrityNameMessage, imgURL, box, imageDetectionError }){
    if(imageDetectionError){ //usually wrong input format
        return <div className='center b red f2'>Invalid Image URL</div>
    }
    else{
        return (
            <div className='center ma'>
                <div className='absolute mt2 mb4'>
                    <img id='inputImage' alt='' src={imgURL} width='500px' height='auto' />
                    <div className='bounding-box' style={{ left:box.left, top:box.top, right:box.right, bottom:box.bottom, }}>
                        <div className=''>
                            <div className='bounding-box__concept' title=''>
                                <span className='f5'>
                                    {celebrityNameMessage}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FaceRecognition;