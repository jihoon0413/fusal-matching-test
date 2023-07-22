import React, { useContext } from 'react'
import '../css/components/MenuBar.css'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const MenuBar = () => {

  const {rightLogin,setRightLogin} = useContext(UserContext)


  return (
    <div>
      <div className='menu'>
        <ul>
          <li className='logo'><Link to='/'>광주 풋살</Link></li>
          <li className='info'><Link to='/'>구장 정보</Link></li>
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
