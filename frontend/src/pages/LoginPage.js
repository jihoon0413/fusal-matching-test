import React from 'react'
import '../css/pages/LoginPage.css';
const LoginPage = () => {
  return (
    <div>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      <div className='loginbox'>
        <div className='login_ment'>예약은 로그인 필요해요!</div>
        <div className='login_input'>
          <div style={{display:"flex",alignItems:"center"}}>
            <span style={{fontSize:"30px"}}class="material-symbols-outlined">person</span>
            <input placeholder='팀 아이디'/>
          </div>
          <div style={{display:"flex",alignItems:"center"}}>
            <span style={{fontSize:"30px"}} class="material-symbols-outlined">lock</span>
            <input type='password' placeholder='팀 비밀번호'/>
          </div>
        </div>
        <div>
          <button className='btn_make'>회원가입</button>
          <span>/</span>
          <button className='btn_find'>비밀번호 찾기</button>
        </div>
        <button className='btn_login'>로그인</button>
      </div>
    </div>
  )
}

export default LoginPage
