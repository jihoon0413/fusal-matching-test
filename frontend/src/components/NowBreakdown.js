import React from 'react'


const NowBreakdown = ({team,date,stadium,fieldNum,allRental,startTime,endTime}) => {
  console.log(allRental)
  return (
    <li>
      <span style={{margin:'8px'}}>{date}</span> 
      {stadium} - {fieldNum}구장 
      {allRental
      ?`[ 전체 대여 ]`
      :<>[ vs {team[1]?team[1].teamName:<span style={{fontWeight:'700',color:'red'}}> ? </span>}]</>
      }
      {startTime.slice(0,5)} ~ {endTime.slice(0,5)}
      <span style={{display:'flex', gap:'5px'}}>
        <button style={{color:'orange',border:'1px solid orange',backgroundColor:'white'}}>대기 중</button>
        <button style={{color:'white',border:'1px solid orange',backgroundColor:'orange'}}>취소</button>
      </span>
      <hr style={{color:'blue'}}/>
    </li>
      

  )
}

export default NowBreakdown
