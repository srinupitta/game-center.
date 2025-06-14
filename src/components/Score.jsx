import React from 'react'
export default function Score(props) {
  return (
   props.state && 
   <>
    <div className='grand-parent'>
      <div className='parent'>
    <div className='text-class'>Thanks For Attempting The Exam!!</div>
    <div className='child'>
    <img  className='img' src="/scoreboard.png" />
    <div className='score-class'>Score:{props.score}&#x1f3c5;</div>
    </div>
  </div>
  </div>
  </>
  )
}
