import React, { useState } from 'react'
import '../css/pages/MyPage.css'
import NowBreakdown from '../components/NowBreakdown'
import FutureBreakdown from '../components/FutureBreakdown'

const MyPage = () => {

  return (
    <div className='center'>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      <div className='mypage_top'>
        <div className='mypage_top_left'>
          <div className='icon'><span class="material-symbols-outlined">lock</span> <span class="material-symbols-outlined">edit</span></div>
          <div className='introduce'>
            <div className='profile'></div>
            <ul style={{display:'block'}}>
              <li style={{marginBottom:'5px'}}><span style={{display:'inline-block',width:'70px'}}>팀명</span><span style={{color:'#adadad80'}}>| </span><span>맥시멈스</span></li>
              <li style={{marginBottom:'5px'}}><span style={{display:'inline-block',width:'70px'}}>주장</span><span style={{color:'#adadad80'}}>| </span><span>손흥민</span></li>
              <li style={{marginBottom:'5px'}}><span style={{display:'inline-block',width:'70px'}}>전화번호</span><span style={{color:'#adadad80'}}>| </span><span>010-1234-5678</span></li>
              <li style={{marginBottom:'5px'}}><span style={{display:'inline-block',width:'70px'}}>실력</span><span style={{color:'#adadad80'}}>| </span><span>최상</span></li>
              <li style={{marginBottom:'3px'}}><span style={{display:'inline-block',width:'70px'}}>매너</span><span style={{color:'#adadad80'}}>| </span><span>최상</span></li>
            </ul>
          </div>
          <div style={{display:'flex',alignItem:'center', fontSize:'1.2rem'}}><span class="material-symbols-outlined">rewarded_ads</span><span style={{fontWeight:'700', marginLeft:'5px'}}> 수상 경력</span></div>
          <hr/>
          <ul className='mypage_list'>
            <li>2019년도 '오로라' 풋살 대회 준우승</li>
            <li>2019년도 '오로라' 풋살 대회 준우승</li>
            <li>2019년도 '오로라' 풋살 대회 준우승</li>
          </ul>
        </div>

        <div className='margin_top_right'>
          <div className='now_breakdown'>
            <div style={{display:'flex',alignItem:'center',fontSize:'1.2rem'}}><span class="material-symbols-outlined">indeterminate_check_box</span><span style={{fontWeight:'700', marginLeft:'5px'}}> 현재 매칭 내역</span></div>
            <hr/>
            <ul className='nowbreakdown_list'>
              <NowBreakdown/>
              <NowBreakdown/>
            </ul>
          </div>

          <div className='future_breakdown'>
            <div style={{display:'flex',alignItem:'center', fontSize:'1.2rem'}}><span class="material-symbols-outlined">select_check_box</span><span style={{fontWeight:'700', marginLeft:'5px'}}> 지난 매칭 내역</span></div>
            <hr/>
            <ul className='futurebreakdown_list'>
              <FutureBreakdown reserveSort='전체대여' fieldReview={false}/>
              <FutureBreakdown reserveSort='매칭' fieldReview={true} teamReview={false}/>
              <FutureBreakdown reserveSort='매칭' fieldReview={true} teamReview={true}/>
              <FutureBreakdown reserveSort='매칭' fieldReview={true} teamReview={true}/>
            </ul>
          </div>
      </div>
      </div>  
      <div className='mypage_bottom'>
        <div className='toggle_btn'></div>
      </div>
    </div>
  )
}

export default MyPage
