const GetAllCustomer =({customer , setActionModal , setName , setUsername , setEmail
   
})=>{
    return (
      <div 
      
      className="w-1/4 3/6 bg-gray-300 rounded-md  p-5">
      <p>customerId : {customer.customerId}</p>
      <p>username : {customer.username}</p>
      <p>name : {customer.name}</p>
      <p>email : {customer.email}</p>
      <div className="flex gap-x-2 mt-5">
        <button className="bg-gray-600 text-white rounded-md  px-5"
        onClick={()=>{
          setName(customer.name)
          setUsername (customer.username)
          setEmail (customer.email)
          setActionModal("update")
        }}
        >
          Update</button>
        <button className="bg-gray-600 text-white rounded-md  px-5"
        onClick={()=>{
          setUsername(customer.username)
          setActionModal("delete")
        }}
        >Delete</button>
      </div>
      </div>
   )
  }

  export default GetAllCustomer