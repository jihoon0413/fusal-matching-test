import React, { useContext, useState } from 'react'
import '../css/components/Modal.css'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const Modal = ({fieldName , endTime, startTime, date, setModalState, reserveSort}) => {

  const {rightLogin} = useContext(UserContext)
  const [title,setTitle] = useState("이 일정으로 예약할까요 ?")
  const [titleColor,setTitleColor] = useState("#EE8042")
  const [buttonState,setButtonState] = useState(true)
  const [display,setDisplay] = useState("block")

  const navigate = useNavigate()
  const matchingReserve = ()=>{
    if(rightLogin){
      setTitle("예약이 완료되었습니다 !")
      setTitleColor("#4287EE")
      setButtonState(false)
    }else{
      alert("예약은 로그인이 필요합니다");
      navigate('/login')}
    }
  const cancel =()=>{
    console.log('취소')
    setModalState(false)
    setDisplay("none")
  }
  return (
    <div>
      <div className ='modal' style={{display:{display}}}>
        <div className ='modal_head' style={{backgroundColor:`${titleColor}`}}>
          <div className ='modal_title'>{title}</div>
          <span className ="material-symbols-outlined" onClick={cancel}>cancel</span>
        </div>
        <div className='modal_content'>
          <div style={{fontWeight:'700', marginBottom:'10px'}}>[ {reserveSort} ]</div>
          <div style={{marginBottom:'5px'}}>{fieldName}구장 {date}</div>
          <div style={{marginBottom:'20px'}}>{startTime} ~ {endTime}</div>
          {(buttonState)
          ?<><button style={{marginRight:'15px',backgroundColor:`${titleColor}`}} onClick={matchingReserve}>예약</button>
            <button onClick={cancel}>취소</button></>
          : <div>My Page에서 다시 확인할 수 있습니다.</div>
          }
          
        </div>
      </div>
    </div>
  )
}

export default Modal
