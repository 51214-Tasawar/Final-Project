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
    
    const GetAllCustomer =({customer})=>{
      return (
        <div 
        
        className="w-1/4 3/6 bg-gray-300 rounded-md  p-5">
        <p>customerId : {customer.customerId}</p>
        <p>username : {customer.username}</p>
        <p>name : {customer.name}</p>
        <p>email : {customer.email}</p>
        </div>
     )
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