import React, { createContext, useState } from 'react'

export const LoginAll = createContext();
export default function LoginContext({children}) {
    const [LoginCheck , setLoginCheck] = useState(false);
    const [loginVisible, setLoginVisible] = useState(false);
  return (
    <LoginAll.Provider value={{LoginCheck , setLoginCheck , loginVisible , setLoginVisible}}>
        {children}
    </LoginAll.Provider>
    
  )
}
