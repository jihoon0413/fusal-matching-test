import React from 'react'
import img from '../img/Group 84.png'
import '../css/components/Field.css'

const Field = () => {
  return (
    <div className='field'>
      <div className='field_name'>A구장</div>
      <div className='field_background'>
        <div className='field_main'>
          <img src={img} alt='field' className='field_img'/>
          <div className='matching_team'></div>
          <button className='matching_btn'>매칭 신청</button>
        </div>
      </div>
      <button className='whole_btn'>전체 대여</button>
    </div>
  )
}

export default Field
