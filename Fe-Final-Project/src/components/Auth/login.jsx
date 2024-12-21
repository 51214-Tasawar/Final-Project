import { useNavigate } from "react-router-dom"

const Login =({setAuth})=>{
      const navigate =useNavigate()
      
    return(
        <>
       <div className="h-screen w-screen bg-red-300 flex justify-center items-center">
        <div className="w-1/4 h-2/4 bg-slate-200 flex  flex-col ">
         <h1 className="text-2xl flex justify-center m-2 font-medium">Login Form</h1>
         <div className="w-full h-2/4 bg-slate-200 flex flex-col gap-0"
         >
            <label className="m-1">Username</label>
            <input className="m-2 rounded-md h-8" 
            placeholder="Enter The Username" 
            type="text"
            required />
            <label className="m-1">Password</label>
            <input className="m-2 rounded-md h-8"
            placeholder="Enter your Password"
            type="password"
            required
            />
            <p>Don't have account ?<span className="hover:text-blue-400  cursor-pointer"
            onClick={()=>setAuth("signup")}>Signup</span> </p>
         </div>
         <button className="bg-blue-600 m-2 h-8 rounded-md" 
         onClick={()=>{
            navigate("index")
         }}>Login</button>
        </div>
       </div>
        </>
    )
}
export default Login