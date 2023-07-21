import { createContext, useState } from "react";

export const UserContext = createContext()

export default function UserProvider({children}){

  const [rightLogin,setRightLogin] = useState(false)

  return(
    <>
      <UserContext.Provider value={{rightLogin,setRightLogin}}>
        {children}
      </UserContext.Provider>
    </>
  )
}