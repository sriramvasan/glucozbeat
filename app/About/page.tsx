import React from 'react'
import FlipCard from '../Components/FlipCard/FlipCard'

const About = () => {
  return (
    <div >
      Welcome to the About us Page
      <div className='space-x-10 mx-auto justify-start'>
        <FlipCard heading = 'a' content='b' />
      </div>
      
    </div>
  )
}
export default About