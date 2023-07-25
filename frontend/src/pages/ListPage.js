import React, { useEffect, useState } from 'react'
import InfoList from '../components/InfoList'
import '../css/pages/ListPage.css'
import axios from 'axios'


const ListPage = () => {

  const [stadiums,setStadiums] = useState(null) 
  useEffect(()=>{
    const fetchStadiums = async()=>{
      try{
        const result = await axios.get("https://7812-218-156-213-133.ngrok-free.app/stadiums",{
        headers: {
              'Content-Type': `application/json`,
              'ngrok-skip-browser-warning': '69420',
            },
        })
        setStadiums(result.data)
      }catch(err){
        console.log("err입니당~",err)
      }
    }
    fetchStadiums()
  },[])

  console.log(stadiums)
  return (
    <div className='center'>
      <div>구장의 자세한 정보가 궁금하다면? click !</div>
      {stadiums?.map(stadium =>(
        <InfoList 
          key={stadium.id}
          id={stadium.id}
          name={stadium.stadiumName}
          time={stadium.time}
          phone={stadium.tel}
          address={stadium.address}
          price={stadium.cost}
        />
      ))}

    </div>
  )
}

export default ListPage
