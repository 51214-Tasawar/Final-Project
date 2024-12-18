const Signup =({setAuth})=>{
    return(
        <>
        <div className="h-screen w-screen bg-red-300 flex justify-center items-center">
        <div className="w-1/4 h-5/6 bg-slate-200 flex  flex-col ">
         <h1 className="text-2xl flex justify-center m-2 font-medium">SignUp Form</h1>
         <div className="w-full h-2/4 bg-slate-200 flex flex-col gap-0"
         >
            <label className="m-1">name</label>
            <input className="m-2 rounded-md h-8" 
            placeholder="Enter The name" 
            type="text"
            required />
            <label className="m-1">Username</label>
            <input className="m-2 rounded-md h-8" 
            placeholder="Enter The Username" 
            type="text"
            required />
            <label className="m-1">Email</label>
            <input className="m-2 rounded-md h-8" 
            placeholder="Enter The Email" 
            type="email"
            required />
            <label className="m-1">Password</label>
            <input className="m-2 rounded-md h-8"
            placeholder="Enter your Password"
            type="password"
            required
            />
             <label className="m-1">Confirm Password</label>
            <input className="m-2 rounded-md h-8"
            placeholder="Enter your confirm Password"
            type="password"
            required
            />
            <p>Already have account ?<span className="hover:text-blue-400  cursor-pointer"
            onClick={()=>setAuth("login")} >Login</span> </p>
            <button className="bg-blue-600 m-2 h-8 rounded-md" 
             onClick={()=>setAuth("login")}
            >SignUp</button>
         </div> 
        </div>
        
       </div>
       {/* <h1>Testing Demo</h1> */}
        </>
    )
}
export default Signup