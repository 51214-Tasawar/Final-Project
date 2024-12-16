import { useState } from "react"
import Login from "./component/login"
import Signup from "./component/signup"

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