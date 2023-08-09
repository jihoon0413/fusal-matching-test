import { useContext, useEffect, useState } from "react"
import '../css/components/FutureBreakdown.css'
import { FutureBDContext } from "../context/FutureBreakDownContext"

const FutureBreakdown = ({reserveSort, fieldReview, teamReview}) => {

  const [fieldReveiwBtnBack, setFieldReiviewBtnBack] = useState('')
  const [teamReveiwBtnBack, setTeamReiviewBtnBack] = useState('')
  const [fieldReviewBtnText, setFieldReviewBtnText] = useState('')
  const [teamReviewBtnText, setTeamReviewBtnText] = useState('')

  const {futureBD,setFutureBD} = useContext(FutureBDContext)
  console.log(fieldReview, teamReview)

  useEffect(()=>{
    if(fieldReview){
      // 필드 리뷰가 있을때
      setFieldReiviewBtnBack('white')
      setFieldReviewBtnText('#4287EE')
    }else{
      setFieldReiviewBtnBack('#4287EE')
      setFieldReviewBtnText('white')
    }

    if(teamReview){
      // 필드 리뷰가 있을때
      setTeamReiviewBtnBack('white')
      setTeamReviewBtnText('#4287EE')
    }else{
      setTeamReiviewBtnBack('#4287EE')
      setTeamReviewBtnText('white')
    }
  },[])

  const setFutureBDdata = ()=>{
    
  }

  return (
    <li>
      <span style={{margin:'8px'}}>23.07.20</span> 
      신화풋살 - A구장 [ {reserveSort} ] 9:00~11:00
      {(reserveSort ==='전체대여')
      ?<button className='future_btn' style={{backgroundColor:`${fieldReveiwBtnBack}`,color:`${fieldReviewBtnText}`}} >구장 리뷰</button>
      :<><button className='future_btn' style={{backgroundColor:`${fieldReveiwBtnBack}`,color:`${fieldReviewBtnText}`}}>구장 리뷰</button> 
       <button className='future_btn' style={{backgroundColor:`${teamReveiwBtnBack}`,color:`${teamReviewBtnText}`}}>팀 리뷰</button></>
      }
      <hr style={{color:'blue'}}/>
    </li>
  )
}

export default FutureBreakdown
