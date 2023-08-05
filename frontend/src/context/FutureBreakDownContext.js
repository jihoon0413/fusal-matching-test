import { createContext, useState } from "react";

export const FutureBDContext = createContext()

export default function FutureBDProvider({children}){

  const [futureBD,setFutureBD] = useState()
  
  return(
    <>
      <FutureBDContext.Provider value={{futureBD,setFutureBD}}>
        {children}
      </FutureBDContext.Provider>
    </>
  )
}