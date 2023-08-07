import React, { useContext, useState } from 'react'
import '../css/components/MenuBar.css'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const MenuBar = () => {

  const {rightLogin,setRightLogin} = useContext(UserContext)

  const [click,setClick] = useState(false)

  const clickMenu = (e)=>{
    setClick(true)
    if(click){
      e.target.style.weight = '700'
      setClick(false)
    }else{
      e.target.style.weight = '400'
    }
  }

  return (
    <div>
      <div className='menu'>
        <ul>
          <li className='logo' onClick={(e)=>{clickMenu(e)}}><Link to='/'>광주 풋살</Link></li>
          <li className='info'onClick={(e)=>{clickMenu(e)}}><Link to='/'>구장 정보</Link></li>
          <li className='reserve'><Link to='reserve'>예약하기</Link></li>

          {rightLogin 
          ?<div>
            <button className='mypage'><Link to='/mypage' style={{color:'blue'}}>myPage</Link></button>
            <li className='login'><button onClick={()=>{setRightLogin(false)}}>로그아웃</button></li></div> 
          :<li className='login'><Link to='login'><button>로그인</button></Link></li>
          }
        </ul>
      </div>
    </div>
  )
}

export default MenuBar
