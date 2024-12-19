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