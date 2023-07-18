import { createContext } from "react";


export const StadiumInfoContext = createContext()

export default function StadiumInfoProvider({children}){
  const value = {
    name:"신화풋살장",
    address:"광주광역시 광산구 산정동 15",
    time:"13:00~23:00",
    phone:"062-555-555",
    price:"2시간 ￦80,000"
  }

  return(
    <>
      <StadiumInfoContext.Provider value={{value}}>
        {children}
      </StadiumInfoContext.Provider>
    </>
  )
}