import React, { useEffect, useState } from 'react'
import '../css/pages/MembershipPage.css';

const MembershipPage = () => {

  const [color,setColor] = useState("black")
  const [pw, setPw] = useState()
  const [checkpw, setCheckpw] = useState()
  const [hidden, setHidden] = useState("hidden")
  const fakeCheck = true
  
  const checkDuplication = ()=>{
    if(fakeCheck){
      setColor("green")
    }
    else{
      setColor("red")
    }
  }
  useEffect(()=>{
    if(checkpw>0){
      if(pw == checkpw){
        setHidden("visible")
      }else{
        setHidden("hidden")
      }
    }
  },[checkpw])

  return (
    <div>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <div className='membershipbox'>
        <div className='memebership_ment'>회원가입</div>
        <div className='membership_inputs'>
          <div className='membership_top'>광주에 있는 풋살장을 이용해보세요 !</div>
          
          <div style={{display:"flex",alignItems:"center", position:"relative"}}>
            <span style={{fontSize:"30px"}}className="material-symbols-outlined">person</span>
            <input placeholder='팀 아이디' style={{color:`${color}`}}/>
            <button style={{position:"absolute", left:"470px"}} onClick={()=>{checkDuplication()}}>중복 확인</button>
          </div>

          <div style={{display:"flex",alignItems:"center"}}>
            <span style={{fontSize:"30px"}}className="material-symbols-outlined">lock</span>
            <input placeholder='팀 비밀번호 입력' type='password' onChange={(e)=>{setPw(e.target.value)}}/>
          </div>

          <div style={{display:"flex",alignItems:"center", position:"relative"}}>
            <span style={{fontSize:"30px"}}className="material-symbols-outlined">lock</span>
            <input placeholder='팀 비밀번호 확인' type='password' onChange={(e)=>{setCheckpw(e.target.value)}}/>
            <div style={{position:"absolute", left:"470px", color:"red",visibility:`${hidden}`}}>ok!</div>
          </div>

          <div style={{display:"flex",alignItems:"center"}}>
            <span style={{fontSize:"30px"}}className="material-symbols-outlined">sports_soccer</span>
            <input placeholder='팀명' />
          </div>

          <div style={{display:"flex",alignItems:"center"}}>
            <span style={{fontSize:"30px"}}className="material-symbols-outlined">badge</span>
            <input placeholder='주장 이름'/>
          </div>

          <div style={{display:"flex",alignItems:"center"}}>
            <span style={{fontSize:"30px"}}className="material-symbols-outlined">call</span>
            <input placeholder='주장 전화번호'/>
          </div>
          
          <button className='btn_complete'>완료</button>
        </div>
      </div>
    </div>
  )
}

export default MembershipPage
