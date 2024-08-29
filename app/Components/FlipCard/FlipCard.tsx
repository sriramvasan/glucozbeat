'use client';
import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip';
import styles from './FlipCard.module.css';

interface flipCardItem {

  heading : string,
  content: string, 
  image? :string,
  key?: number,
  className?: string
}

const FlipCard = ({heading, content, image, key, className }: flipCardItem) => {
const [flip, setFlip] = useState(false);
  return (
    <div className={`${className} ${styles.position}`}>
      <ReactCardFlip isFlipped={flip} 
      flipDirection='vertical' 
      flipSpeedBackToFront={0.5} 
      flipSpeedFrontToBack={0.5} >
        {/* Front of the card */}
        <div className='bg-purple-600 rounded-lg w-5/12 h-80 text-white text-justify p-5 m-5 ' onClick={() => setFlip(!flip)}>
            <h2 className={`sm:text-[20px] ${styles.heading2}`}>
                Myth {key}
            </h2>
            <hr className=' px-2 mx-2 ' />
            <div className={styles.content}>
            {heading}
            </div>
        </div>
        {/* Back of the card */}
        <div className='p-5 m-5 text-justify bg-purple-600 text-white rounded-lg w-5/12 h-80' onClick={() => setFlip(!flip)}>
            <h2 className={`md:text-[20px] sm:text-[15px] ${styles.heading2}`}>
                {heading}
            </h2>
            <hr className=' px-2 mx-2 md:px-1 md:mx-1' />
            <div className={`md:text-[15px] sm:text-[10px] ${styles.content}`}>
                {content}
            </div>
        </div>
      </ReactCardFlip>
    </div>

  )
}

export default FlipCard
