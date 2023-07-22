import React from 'react'
import InfoList from '../components/InfoList'
import '../css/pages/ListPage.css'

const ListPage = () => {

  return (
    <div className='center'>
      <div>구장의 자세한 정보가 궁금하다면? click !</div>
      <InfoList/>
      <InfoList/>
      <InfoList/>

    </div>
  )
}

export default ListPage
