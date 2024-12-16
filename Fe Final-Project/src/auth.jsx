import { useState } from "react"
import Login from "./component.jsx/login"
import Signup from "./component.jsx/signup"

const Auth=()=>{
    // const [auth , setAuth] =useState("signup")
    const [auth , setAuth] = useState("login")
    return(
        <>
     {auth=="login"&&<Login setAuth={setAuth}/>}
     {auth=="signup"&&<Signup setAuth={setAuth}/>}
        </>
    )
}
export default Auth ;