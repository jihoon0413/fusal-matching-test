import { useContext, useEffect, useState } from "react"
import '../css/components/FutureBreakdown.css'
import { FutureBDContext } from "../context/FutureBreakDownContext"

const FutureBreakdown = ({team,date,stadium,fieldNum,allRental,startTime,endTime}) => {

  const [fieldReveiwBtnBack, setFieldReiviewBtnBack] = useState('')
  const [teamReveiwBtnBack, setTeamReiviewBtnBack] = useState('')
  const [fieldReviewBtnText, setFieldReviewBtnText] = useState('')
  const [teamReviewBtnText, setTeamReviewBtnText] = useState('')

  const {futureBD,setFutureBD} = useContext(FutureBDContext)

  useEffect(()=>{
    if(team[0]?.evalStadium){
      // 필드 리뷰가 있을때
      setFieldReiviewBtnBack('white')
      setFieldReviewBtnText('#4287EE')
    }else{
      setFieldReiviewBtnBack('#4287EE')
      setFieldReviewBtnText('white')
    }

    if(team[0]?.evalOpposite){
      // 팀 리뷰가 있을때
      setTeamReiviewBtnBack('white')
      setTeamReviewBtnText('#4287EE')
    }else{
      setTeamReiviewBtnBack('#4287EE')
      setTeamReviewBtnText('white')
    }
  },[])

  const futureClick = ()=>{
    setFutureBD(true)
  }

  return (
    <li>
      <span style={{margin:'8px'}}>{date}</span> 
      {stadium} - {fieldNum}구장 
      {allRental
      ?`[ 전체 대여 ]`
      :<>[ vs {team[1]?team[1].teamName:<span style={{fontWeight:'700',color:'red'}}> ? </span>}]</>
      }
      {startTime.slice(0,5)} ~ {endTime.slice(0,5)}
      {(allRental ===true)
      ?<button className='future_btn' onClick={futureClick} style={{backgroundColor:`${fieldReveiwBtnBack}`,color:`${fieldReviewBtnText}`}} >구장 리뷰</button>
      :<><button className='future_btn' onClick={futureClick} style={{backgroundColor:`${fieldReveiwBtnBack}`,color:`${fieldReviewBtnText}`}}>구장 리뷰</button> 
       <button className='future_btn' onClick={futureClick} style={{backgroundColor:`${teamReveiwBtnBack}`,color:`${teamReviewBtnText}`}}>팀 리뷰</button></>
      }
      <hr style={{color:'blue'}}/>
    </li>
  )
}

export default FutureBreakdown
