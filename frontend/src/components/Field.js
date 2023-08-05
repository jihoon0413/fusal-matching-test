import React, { useState } from 'react'
import img from '../img/Group 84.png'
import '../css/components/Field.css'
import Modal from './Modal'
import profile from '../img/ball.png'
import { changeText } from '../helper/ChangeText'

const Field = ({field,fieldName , endTime, startTime, date}) => {

  console.log(field)
  const [reserveSort,setReserveSort] = useState()
  const [modalState,setModalState] = useState(false)
  const [hover,setHover] = useState('none')

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
          {field.team
          ?<><div className='matching_team' onMouseOver={()=>setHover('block')} onMouseOut={()=>setHover('none')}>
              <img src={profile} style={{width:'80px',height:'80px',marginTop:'15px'}} alt='profile'/>
              <div className='teaminfo' style={{display:hover}}>
                <div>팀명 : {field.team.teamName}</div>
                <div>실력 : {changeText(field.team.skill)}</div>
                <div>매너 : {changeText(field.team.manner)}</div>
              </div>
            </div><button className='matching_btn' onClick={MatchingReserve}>매칭 신청</button></>
          :<><button className='matching_btn' style={{top:'160px',left:'145px'}}onClick={MatchingReserve}>매칭 신청</button>
          <button className='matching_btn' onClick={MatchingReserve}>매칭 신청</button></>
          }
        </div>
      </div>
      {field.team
      ?<button disabled className='whole_btn' style={{backgroundColor:'#4287ee50'}} onClick={WholdReserve}>전체 대여</button>
      :<button className='whole_btn' onClick={WholdReserve}>전체 대여</button>
      }
      

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
