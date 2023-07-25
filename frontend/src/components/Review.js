import React from 'react'
import '../css/components/Review.css'

const Review = () => {
  return (
    <>
    <div>
      <div className='review'>
        <div style={{marginRight:"5px", fontWeight:"700"}}className='nickname'>최강기아</div>
        <div style={{marginRight:"10px"}}className='review_emoji'>😎</div>
        <div className='review_content'>구장이 예뻐요</div>
      </div>
      <hr style={{width:"calc(1300px / 2 - 150px", marginLeft:"10px"}}/>
    </div>
    </>
  )
}

export default Review
