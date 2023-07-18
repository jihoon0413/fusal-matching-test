import React, { useContext } from 'react'
import { StadiumInfoContext } from '../context/StadiumInfoContext'

const InfoPage = () => {

  const {value} = useContext(StadiumInfoContext)
  console.log(value)

  return (
    <div>
    </div>
  )
}

export default InfoPage
