import React from 'react';

function Loading() {
  return (
    <div>
      <div className='spinner-grow text-primary' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </div>
    </div>
  );
}

export default Loading;
