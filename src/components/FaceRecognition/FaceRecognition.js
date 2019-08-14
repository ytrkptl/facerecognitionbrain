import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, boxes }) => {
  return (
    <div className='centerFaceRec'>
      <div className='absoluteDiv'>
        <img 
          id='inputimage' 
          alt='' 
          src={imageUrl} 
          width='auto' 
          style={{maxWidth: "100%", margin: 'auto'}}
          height='400px'/>
        {boxes.map(box => {
        	return <div key={box.topRow} className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
        })
        }
      </div>
    </div>
  );
}

export default FaceRecognition;