import React, { useContext } from 'react'
import ImgSwiper from './ImgSwiper'
import '../css/components/InfoList.css'
import { Link } from 'react-router-dom'
import axios from "axios";
import { StadiumInfoContext } from '../context/StadiumInfoContext'


const InfoList = ({id,price,name,address,time,phone}) => {

  // const {value} = useContext(StadiumInfoContext)
  return (
    <div>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      <div className='card'>
        <ImgSwiper width={320} height={250}/>
        <div className='description'>
            <div className='head'>
              <div className='name'>
                <Link to={`/info/${id}`}
                    state={{
                    name:name,
                    time:time,
                    phone:phone,
                    address:address,
                  }}
              >{name}</Link></div>
              <div className='line'></div>
              <div className='price'>2시간 ￦{price}</div>
              <div><button><Link to='/reserve'>예약하기</Link></button></div>
            </div>

            <div className='address'>{address}</div>
            <div className='time'><span style={{fontSize:"20px"}} className="material-symbols-outlined">history</span> 이용시간대 {time}</div>
            <div className='phone'><span style={{fontSize:"20px"}} className="material-symbols-outlined">phone_in_talk</span> {phone}</div>

          <div className='round_sticker'>
            <div className='holiday' style={{width:"80px", height:"80px"}}>연중<br/>무휴</div>
            <div className='parking' style={{width:"80px", height:"80px"}}><span className="material-symbols-outlined">local_parking</span></div>
            <div className='review_count' style={{width:"80px", height:"80px"}}></div>
          </div>
        </div>
      </div>
      <hr style={{width:"1300px"}}/>
    </div>
  )
}

export default InfoList
