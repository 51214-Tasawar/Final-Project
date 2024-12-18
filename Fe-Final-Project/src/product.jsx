import { Link } from "react-router-dom"

const Product=()=>{
    return(
        <>
        <div className="w-full h-full  flex flex-col">
        <h1 className="font-semibold text-2xl ">Product Page</h1>
        <div className="w-full flex h-screen   py-4 gap-x-4 ">
        <button className="bg-gray-500 rounded-md h-10 p-2">Create Product</button>
        <button className="bg-gray-500 rounded-md h-10 p-2">Get Product</button>
        </div>
        </div>
        </>
    )
}
export default Product