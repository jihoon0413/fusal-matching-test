import { createContext, useState } from "react";

export const FutureBDContext = createContext()

export default function FutureBDProvider({children}){

  const [futureBD,setFutureBD] = useState(false)
  const [BDtitle,setBDTitle] = useState()
  const [matchingId,setMatchingId] = useState()
  const [oppositeTeam,setOppositeTeam] = useState()
  const [stadium,setStadium] = useState()
  return(
    <>
      <FutureBDContext.Provider value={{futureBD,setFutureBD,BDtitle,setBDTitle,matchingId,setMatchingId,oppositeTeam,setOppositeTeam,stadium,setStadium}}>
        {children}
      </FutureBDContext.Provider>
    </>
  )
}