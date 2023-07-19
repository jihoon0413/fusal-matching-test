import React, { useContext } from 'react'
import { StadiumInfoContext } from '../context/StadiumInfoContext'
import ImgSwiper from '../components/ImgSwiper'
import '../css/pages/InfoPage.css'
import img from '../img/사장님.jpg'

const InfoPage = () => {

  const {value} = useContext(StadiumInfoContext)


  return (
    <div>
       <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      <div className='center'>
        <ImgSwiper width={1300} height={400}/>
        <hr/>
        <div className='infos'>
          <div className='infos_stadium'>
            <div className="description">
              <div className='name' style={{marginBottom:'20px', fontSize:'40px'}}>{value.name}</div>
              <div className='address' style={{marginBottom:'10px', fontSize:'20px'}}>{value.address}</div>
              <div className='time'><span style={{fontSize:"20px"}} className="material-symbols-outlined">history</span> 이용시간대 {value.time}</div>
              <div className='phone'><span style={{fontSize:"20px"}} className="material-symbols-outlined">phone_in_talk</span> {value.phone}</div>
            </div>
            <div className='' >
              <img className='master_img' src={img} alt='사장님'/>
              <div className='' style={{marginLeft:"160px"}}>신사장님</div>
              <div className='round_sticker'>
                <div className='holiday' style={{width:"80px", height:"80px"}}>연중<br/>무휴</div>
                <div className='parking' style={{width:"80px", height:"80px"}}><span className="material-symbols-outlined">local_parking</span></div>
                <div className='review_count' style={{width:"80px", height:"80px"}}></div>
              </div>
            </div>
          </div>
          <div className='infos_review'>
            <div className='review_head'>
              <div className='review_count' style={{width:"50px", height:"50px"}}></div>
              <div style={{fontSize:"20px", fontWeight:"700"}}>풋살장 리뷰</div>
              <div style={{marginLeft:"5px"}}>+50</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoPage
