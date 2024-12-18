const SideBar =()=>{
    return(
        <>
        <div className="bg-gray-600 w-1/6 h-screen flex justify-end px-4 ">
        <div className="w-full h-2/4 bg-gray-600  flex flex-col items-start pt-2">
       <p className="text-white w-full rounded-md font-light text-xl p-1 hover:bg-white hover:text-gray-600">Product Managemnt</p>
       <p className="text-white w-full rounded-md font-light text-xl p-1 hover:bg-white hover:text-gray-600">Customer Managemnt</p>
       <p className="text-white w-full rounded-md font-light text-xl p-1 hover:bg-white hover:text-gray-600">Order Managemnt</p>
       <input
       placeholder="Search..." required 
       className="rounded-md w-full p-1 m-2"
       />
       <button className="text-gray bg-white 
       rounded-md  p-1 m-2">Search</button>
        </div>
        </div>
        </>
    )
}

export default SideBar