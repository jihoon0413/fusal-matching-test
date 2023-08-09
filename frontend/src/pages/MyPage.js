import React, { useContext, useEffect, useState } from 'react'
import '../css/pages/MyPage.css'
import NowBreakdown from '../components/NowBreakdown'
import FutureBreakdown from '../components/FutureBreakdown'
import { UserContext } from '../context/UserContext'
import axios from 'axios'
import { changeText } from '../helper/ChangeText'

const MyPage = () => {

  const {accessToken,idData} = useContext(UserContext)
  const [team,setTeam] = useState()
  const date =  new Date()
  const year = date.getFullYear()
  const month = date.getMonth()+1
  const day = date.getDate()
  
  useEffect(()=>{
    const teamFetch = async()=>{
      try{
        const result = await axios.get(`https://5b95-39-114-9-53.ngrok-free.app/teams?id=${idData}`,{
        headers: {
              'Content-Type': `application/json`,
              'ngrok-skip-browser-warning': '69420',
            },
        })
        setTeam(result.data)
      }catch(err){
        console.log("err입니당~",err)
      }
    }
    teamFetch()
  },[])

  console.log(team)
  
  console.log(year,month,day)


  return (
    <div className='center'>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      <div className='mypage_top'>
        <div className='mypage_top_left'>
          <div className='icon'><span className="material-symbols-outlined">lock</span> <span className="material-symbols-outlined">edit</span></div>
          <div className='introduce'>
            <div className='profile'></div>
            <ul style={{display:'block'}}>
              <li style={{marginBottom:'5px'}}><span style={{display:'inline-block',width:'70px'}}>팀명</span><span style={{color:'#adadad80'}}>| </span><span>{team?.teamName}</span></li>
              <li style={{marginBottom:'5px'}}><span style={{display:'inline-block',width:'70px'}}>주장</span><span style={{color:'#adadad80'}}>| </span><span>{team?.captainName}</span></li>
              <li style={{marginBottom:'5px'}}><span style={{display:'inline-block',width:'70px'}}>전화번호</span><span style={{color:'#adadad80'}}>| </span><span>{team?.tel}</span></li>
              <li style={{marginBottom:'5px'}}><span style={{display:'inline-block',width:'70px'}}>실력</span><span style={{color:'#adadad80'}}>| </span><span>{changeText(Number(team?.skill))}</span></li>
              <li style={{marginBottom:'3px'}}><span style={{display:'inline-block',width:'70px'}}>매너</span><span style={{color:'#adadad80'}}>| </span><span>{changeText(Number(team?.manner))}</span></li>
            </ul>
          </div>
          <div style={{display:'flex',alignItem:'center', fontSize:'1.2rem'}}><span className="material-symbols-outlined">rewarded_ads</span><span style={{fontWeight:'700', marginLeft:'5px'}}> 수상 경력</span></div>
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

            {team?.matchingRecordList.map((matchingRecord)=>{
              let matYear = matchingRecord?.field.matchingDate.slice(0,4)
              let matMonth = matchingRecord?.field.matchingDate.slice(5,7)
              let matDay = matchingRecord?.field.matchingDate.slice(8,10)
              if(Number(matYear)>=year || Number(matMonth)>=month){
                if(Number(matDay)>day){
                  return (<NowBreakdown 
                    date={matchingRecord?.field.matchingDate} 
                    stadium={matchingRecord?.field.stadiumName} 
                    fieldNum={matchingRecord?.field.fieldNum} 
                    allRental={matchingRecord?.field.allRental}
                    team={matchingRecord?.field?.team}
                    startTime={matchingRecord?.field.startTime}
                    endTime={matchingRecord?.field.endTime}
                    />)
                }
              }
              else{
                console.log(matYear,matMonth,matDay)
              }
            }
            )}
            </ul>
          </div>

          <div className='future_breakdown'>
            <div style={{display:'flex',alignItem:'center', fontSize:'1.2rem'}}><span class="material-symbols-outlined">select_check_box</span><span style={{fontWeight:'700', marginLeft:'5px'}}> 지난 매칭 내역</span></div>
            <hr/>
            <ul className='futurebreakdown_list'>
              <FutureBreakdown reserveSort='전체대여' fieldReview={false}/>
              <FutureBreakdown reserveSort='매칭' fieldReview={true} teamReview={false}/>
              <FutureBreakdown reserveSort='매칭' fieldReview={false} teamReview={true}/>
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
