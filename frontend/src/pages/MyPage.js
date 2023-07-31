import React from 'react'
import '../css/pages/MyPage.css'

const MyPage = () => {
  return (
    <div className='center'>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      <div className='mypage_top'>
        <div className='mypage_top_left'>
          <div className='icon'><span class="material-symbols-outlined">lock</span><span class="material-symbols-outlined">edit</span></div>
          <div className='introduce'>
            <div className='profile'></div>
            <ul style={{display:'block'}}>
              <li style={{marginBottom:'3px'}}><span style={{display:'inline-block',width:'70px'}}>팀명</span><span style={{color:'#adadad80'}}>| </span><span>맥시멈스</span></li>
              <li style={{marginBottom:'3px'}}><span style={{display:'inline-block',width:'70px'}}>주장</span><span style={{color:'#adadad80'}}>| </span><span>손흥민</span></li>
              <li style={{marginBottom:'3px'}}><span style={{display:'inline-block',width:'70px'}}>전화번호</span><span style={{color:'#adadad80'}}>| </span><span>010-1234-5678</span></li>
              <li style={{marginBottom:'3px'}}><span style={{display:'inline-block',width:'70px'}}>실력</span><span style={{color:'#adadad80'}}>| </span><span>최상</span></li>
              <li style={{marginBottom:'3px'}}><span style={{display:'inline-block',width:'70px'}}>매너</span><span style={{color:'#adadad80'}}>| </span><span>최상</span></li>
            </ul>
          </div>
          <div><span class="material-symbols-outlined">rewarded_ads</span>수상 경력</div>
          <hr/>
          <ul style={{display:'block', listStyle:'inherit'}}>
            <li>2019년도 '오로라' 풋살 대회 준우승</li>
            <li>2019년도 '오로라' 풋살 대회 준우승</li>
          </ul>
        </div>
      </div>
        
    </div>
  )
}

export default MyPage
