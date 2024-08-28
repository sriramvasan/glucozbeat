'use client';
import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip';

interface flipCardItem {

  heading : string,
  content: string, 
  image? :string,
  
}

const FlipCard = ({heading, content, image }: flipCardItem) => {
const [flip, setFlip] = useState(false);
  return (
    <div className=''>
      <ReactCardFlip isFlipped={flip} 
      flipDirection='vertical' 
      flipSpeedBackToFront={0.5} 
      flipSpeedFrontToBack={0.5} >
        <div className='bg-purple-600 text-white w-5/12 h-72 rounded-lg text-center p-5 m-5' onClick={() => setFlip(!flip)}>
            Welcome to GDM Teams.
            <div></div>
            <br />
            <br />
        </div>
        <div className='p-5 m-5 text-center bg-purple-600 text-white rounded-lg  w-5/12 h-72' onClick={() => setFlip(!flip)}>
                Computer Science Portal.
                <br />
                <br />

            </div>
      </ReactCardFlip>
    </div>

  )
}

export default FlipCard
