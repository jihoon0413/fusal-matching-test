import React from 'react'
import '../css/components/MenuBar.css'

const MenuBar = () => {
  return (
    <div>
      <div className='menu'>
        <ul>
          <li className='logo'>광주풋살</li>
          <li className='info'>구장 정보</li>
          <li className='reserve'>예약하기</li>
          <li className='login'><button>로그인</button></li>
        </ul>
      </div>
    </div>
  )
}

export default MenuBar
