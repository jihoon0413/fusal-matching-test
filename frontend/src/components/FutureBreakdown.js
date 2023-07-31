import { useEffect, useState } from "react"
import '../css/components/FutureBreakdown.css'

const FutureBreakdown = ({reserveSort, review}) => {

  const [reveiwBtnBack, setReiviewBtnBack] = useState('')
  const [reviewBtnText, setReviewBtnText] = useState('')

  useEffect(()=>{
    if(review){
      // 리뷰가 있을때
      setReiviewBtnBack('white')
      setReviewBtnText('#4287EE')
    }else{
      setReiviewBtnBack('#4287EE')
      setReviewBtnText('white')
    }
  },[])

  return (
    <li>
      <span style={{margin:'8px'}}>23.07.20</span> 
      신화풋살 - A구장 [ {reserveSort} ] 9:00~11:00
      {(reserveSort ==='전체대여')
      ?<button className='future_btn' style={{backgroundColor:`${reveiwBtnBack}`,color:`${reviewBtnText}`}} >구장 리뷰</button>
      :<><button className='future_btn' style={{backgroundColor:`${reveiwBtnBack}`,color:`${reviewBtnText}`}}>구장 리뷰</button> 
       <button className='future_btn' style={{backgroundColor:`${reveiwBtnBack}`,color:`${reviewBtnText}`}}>팀 리뷰</button></>
      }
      <hr style={{color:'blue'}}/>
    </li>
  )
}

export default FutureBreakdown
