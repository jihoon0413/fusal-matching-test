import React, { useState } from 'react'
import img from '../img/Group 84.png'
import '../css/components/Field.css'
import Modal from './Modal'

const Field = ({fieldName , endTime, startTime, date}) => {

  const [reserveSort,setReserveSort] = useState()
  const [modalState,setModalState] = useState(false)

  const MatchingReserve = ()=>{
    setReserveSort("매칭 신청")
    setModalState(true)
  }
  const WholdReserve = ()=>{
    setReserveSort("전체 대여")
    setModalState(true)
  }

  return (
    <div className='field'>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      <div className='field_name'>{fieldName}구장</div>
      <div className='field_background'>
        <div className='field_main'>
          <img src={img} alt='field' className='field_img'/>
          <div className='matching_team'></div>
          <button className='matching_btn' onClick={MatchingReserve}>매칭 신청</button>
        </div>
      </div>
      <button className='whole_btn' onClick={WholdReserve}>전체 대여</button>

      {(modalState)
      ?
      <><Modal setModalState={setModalState} reserveSort={reserveSort} fieldName={fieldName} date={date} startTime={startTime} endTime={endTime}/>
      <div style={{backgroundColor:'rgba(179, 179, 179, 0.5)', width:'100%', height:'100%', position:'fixed',top:'0',left:'0',zIndex:'1'}}></div></>
      :<></>
      }
      

    </div>
  )
}

export default Field
