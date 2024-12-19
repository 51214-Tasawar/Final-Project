import { Link } from "react-router-dom"

const Customer=({children})=>{
    return(
        <>
        <div className="w-full h-full bg-white p-10">
        <h1 className="text-2xl font-semibold">This My Customers Page</h1>
        <div className="w-full h-full flex py-4 gap-x-4 flex-col">
        <div className="w-full h-full  flex gap-x-3">
        <Link 
        to="/customers/createcustomer"
        className="text-white bg-gray-800   rounded-md py-2 px-3 ">
        Create New Customers
        </Link>
        <Link 
        to="/customers/getcustomer"
        className="text-white bg-gray-800 rounded-md py-2 px-3">
        Get Customers
        </Link>
        </div>
        <div className="w-full h-full bg-red-500 gap-y-2">
            {children}
        </div>
        </div>
        </div>
        </>
    )
}
export default Customer