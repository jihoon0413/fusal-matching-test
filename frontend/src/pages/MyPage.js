import React, { useContext, useEffect, useState } from 'react'
import '../css/pages/MyPage.css'
import NowBreakdown from '../components/NowBreakdown'
import FutureBreakdown from '../components/FutureBreakdown'
import { UserContext } from '../context/UserContext'
import axios from 'axios'
import { changeText } from '../helper/ChangeText'
import profile from '../img/ball.png'
import { FutureBDContext } from '../context/FutureBreakDownContext'

const MyPage = () => {

  const {accessToken,idData} = useContext(UserContext)
  const [team,setTeam] = useState()
  const date =  new Date()
  const year = date.getFullYear()
  const month = date.getMonth()+1
  const day = date.getDate()
  const {futureBD,setFutureBD} = useContext(FutureBDContext)
  useEffect(()=>{
    const teamFetch = async()=>{
      try{
        const result = await axios.get(`https://6f2b-121-147-100-85.ngrok-free.app/teams?id=${idData}`,{
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
 
  return (
    <>
    <div className='center'>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      <div className='mypage_top'>
        <div className='mypage_top_left'>
          <div className='icon'><span className="material-symbols-outlined">lock</span> <span className="material-symbols-outlined">edit</span></div>
          <div className='introduce'>
            <div className='profile'>
              <img src={team?.imageUrl?team?.imageUrl:profile} style={{width:'110px',height:'110px',margin:'15px'}} alt='profile'/>
            </div>
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
              if(Number(matYear)<year){
                //현재 보다 matching년도가 전일때

              }
              else if(Number(matYear) === year){
                //->현재보다 matching월이 전일 때
                if(Number(matMonth) <month){ 
                  //->현재와 matching월이 같을 때
                }
                else if(Number(matMonth) === month){
                  //-->>현재보다 matching day가 전일 때
                  if(Number(matDay)<day){
                    
                  }else{
                    return (<NowBreakdown 
                      date={matchingRecord?.field.matchingDate} 
                      stadium={matchingRecord?.field.stadiumName} 
                      fieldNum={matchingRecord?.field.fieldNum} 
                      allRental={matchingRecord?.field.allRental}
                      team={matchingRecord?.field?.team}
                      startTime={matchingRecord?.field.startTime}
                      endTime={matchingRecord?.field.endTime}
                      teamId={team?.id}
                      matchingId={matchingRecord?.field.matchingId}

                      />)
                  }
                }
                //->현재보다 matching월이 빠를 때
                else{
                  return (<NowBreakdown 
                    date={matchingRecord?.field.matchingDate} 
                    stadium={matchingRecord?.field.stadiumName} 
                    fieldNum={matchingRecord?.field.fieldNum} 
                    allRental={matchingRecord?.field.allRental}
                    team={matchingRecord?.field?.team}
                    startTime={matchingRecord?.field.startTime}
                    endTime={matchingRecord?.field.endTime}
                    teamId={team?.id}
                    matchingId={matchingRecord?.field.matchingId}
                    />)
                }}
                //현재보다 mathing 년도가 빠를 때
              else{
                return (<NowBreakdown 
                  date={matchingRecord?.field.matchingDate} 
                  stadium={matchingRecord?.field.stadiumName} 
                  fieldNum={matchingRecord?.field.fieldNum} 
                  allRental={matchingRecord?.field.allRental}
                  team={matchingRecord?.field?.team}
                  startTime={matchingRecord?.field.startTime}
                  endTime={matchingRecord?.field.endTime}
                  teamId={team?.id}
                  matchingId={matchingRecord?.field.matchingId}
                  />)
              }
            })}
            </ul>
          </div>

          <div className='future_breakdown'>
            <div style={{display:'flex',alignItem:'center', fontSize:'1.2rem'}}><span class="material-symbols-outlined">select_check_box</span><span style={{fontWeight:'700', marginLeft:'5px'}}> 지난 매칭 내역</span></div>
            <hr/>
            <ul className='futurebreakdown_list'>
            {team?.matchingRecordList.map((matchingRecord)=>{
              let matYear = matchingRecord?.field.matchingDate.slice(0,4)
              let matMonth = matchingRecord?.field.matchingDate.slice(5,7)
              let matDay = matchingRecord?.field.matchingDate.slice(8,10)

              //현재 보다 matching년도가 전일때
              if(Number(matYear)<year){
                return (<FutureBreakdown 
                  date={matchingRecord?.field.matchingDate} 
                  stadium={matchingRecord?.field.stadiumName} 
                  fieldNum={matchingRecord?.field.fieldNum} 
                  allRental={matchingRecord?.field.allRental}
                  team={matchingRecord?.field?.team}
                  startTime={matchingRecord?.field.startTime}
                  endTime={matchingRecord?.field.endTime}
                  />)}

                //현재랑 matching년도가 같을 때
              else if(Number(matYear) === year){
                //->현재보다 matching월이 전일 때
                if(Number(matMonth) <month){ 
                  return (<FutureBreakdown 
                    date={matchingRecord?.field.matchingDate} 
                    stadium={matchingRecord?.field.stadiumName} 
                    fieldNum={matchingRecord?.field.fieldNum} 
                    allRental={matchingRecord?.field.allRental}
                    team={matchingRecord?.field?.team}
                    startTime={matchingRecord?.field.startTime}
                    endTime={matchingRecord?.field.endTime}
                    />)
                  //->현재와 matching월이 같을 때
                }else if(Number(matMonth) === month){
                  //-->>현재보다 matching day가 전일 때
                  if(Number(matDay)<day){
                    return (<FutureBreakdown 
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
                //->현재보다 matching월이 빠를 때
                else{
                  
              }}
                //현재보다 mathing 년도가 빠를 때
              else{
                
              }
            })}
            </ul>
          </div>
      </div>
      </div>


    </div>
    {!futureBD
      ?
      <div className='center'>
        <div className='mypage_bottom_toggle'>
          <div className='toggle_btn'></div>

          <div style={{marginTop:'20px',display:'flex',alignItems:'center',justifyContent:'center', height:'300px'}}>

            <div className='stadium_review'>
              <span className='review_mark'>구장 리뷰</span>
              <span style={{fontWeight:'700'}}>23.06.01 abc풋살 - 맥시멈스 vs 미르 14:00~16:00</span>
              <hr style={{width:'400px' ,margin:'5px 0 0 85px'}}/>
              <div style={{marginTop:'30px'}}>
                <input placeholder='리뷰를 작성해 주세요.' style={{height:'50px'}}/>
                <button style={{marginLeft:'10px',backgroundColor:'#4287EE',color:'white'}}>등록</button>
              </div>
            </div>

            <div className='team_review'>
              <span className='review_mark'>팀 리뷰</span>
              <span style={{fontWeight:'700'}}>23.06.01 abc풋살 - 맥시멈스 vs 미르 14:00~16:00</span>
              <hr style={{width:'500px' ,margin:'5px 0 0 70px'}}/>
              <div className='points'>
              <div className='point'>
                <span className='title'>🏆 실력 </span>
                <button className='point_btn' style={{width:'30px', height:'30px'}}></button>
                <button className='point_btn' style={{width:'25px', height:'25px'}}></button>
                <button className='point_btn' style={{width:'20px', height:'20px'}}></button>
                <button className='point_btn' style={{width:'25px', height:'25px'}}></button>
                <button className='point_btn' style={{width:'20px', height:'20px'}}></button>
                <button className='point_btn' style={{width:'25px', height:'25px'}}></button>
                <button className='point_btn' style={{width:'30px', height:'30px'}}></button>
              </div>
              <hr className='pointbar'/>
              <div className='point_ment'>
                <div>훈련이 필요해보여요 !</div>
                <div>좋아요 !</div>
                <div style={{marginLeft:'20px'}}>와우, 프로인가요?</div>
              </div>

              <div className='point'>
                <span className='title'>⭐ 매너 </span>
                <button className='point_btn' style={{width:'30px', height:'30px'}}></button>
                <button className='point_btn' style={{width:'25px', height:'25px'}}></button>
                <button className='point_btn' style={{width:'20px', height:'20px'}}></button>
                <button className='point_btn' style={{width:'25px', height:'25px'}}></button>
                <button className='point_btn' style={{width:'20px', height:'20px'}}></button>
                <button className='point_btn' style={{width:'25px', height:'25px'}}></button>
                <button className='point_btn' style={{width:'30px', height:'30px'}}></button>
              </div>
              <hr className='pointbar2'/>
              <div className='point_ment2'>
                <div>매너가 아주 꽝 !</div>
                <div>좋아요 !</div>
                <div>최고의 매너예요!</div>
              </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      :<div className='mypage_bottom'>
        <ul className='bottom_ul'>
          <ul className='bottom_ul_ul' style={{marginBottom:'10px'}}>
            <li><span style={{fontWeight:'700'}}>상호명</span> (주) JNU산공이공<span style={{margin:'0 10px'}}>|</span></li>
            <li>기획자 : 이은경<span style={{margin:'0 10px'}}>|</span></li>
            <li>FE : 서민지<span style={{margin:'0 10px'}}>|</span></li>
            <li>BE : 신지훈</li>
          </ul>
        
        <li style={{marginBottom:'10px'}}><span style={{fontWeight:'700'}}>주소 :</span> 광주 북구 용봉로 77, 자동차공학관(공과대학 1호관)</li>
        <li style={{marginBottom:'80px'}}><span style={{fontWeight:'700'}}>고객지원 :</span> 이메일 (luk0992@naver.com )</li>
        <li style={{color:'#4287EE'}}>Copyright © JNU산공이공</li>
        </ul>
      </div>
      
      }
  </>  
  )
}

export default MyPage
