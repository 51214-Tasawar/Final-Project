import axios from "axios"
import { useEffect, useState } from "react"
import { data } from "react-router-dom"

const GetCustomer =()=>{
    const [data , setDate] = useState([])
  const getAll =async()=>{
    
    try{
    const {data } = await axios.get("http://localhost:3006/customer/getcustomer" , {
        withCredentials : true
    })
   if(data.data.length>0){
     return setDate(data.data)
   }
    }catch(error){
   console.log(error)
    }
  } 
     useEffect(()=>{
        getAll();
     } , [])
    return(
        <>
        <div className="w-full h-full bg-red-300 p-4 flex  overflow-y-scroll gap-x-4 gap-y-4  flex-wrap ">
            {data.length > 0 ? 
            (<>
            {data.map((customer , index)=>{
             return  <GetAllCustomer key={index}  customer={customer}/>
             
            })}
            </>)
            :(<>
            <div>
                <p>No Customer Exits</p>
            </div></>)}
          
        </div>
        </>
    )
}
export default GetCustomer