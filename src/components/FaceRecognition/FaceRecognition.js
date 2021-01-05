import React from 'react';

const FaceRecognition = ({ imageUrl }) => {
  return (
    <div className='center ma'>
      <div className='abosolute mt2'>
        <img alt='' src={imageUrl} width='500px' heigh='auto' />
      </div>
    </div>
  );
}

export default FaceRecognition;
