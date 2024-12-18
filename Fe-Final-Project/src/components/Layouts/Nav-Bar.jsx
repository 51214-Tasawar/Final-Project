import { Link } from "react-router-dom"

const Navbar =()=>{
    return(
        <>
        <div className="absoulte top-0 border-b-4  border-white bg-gray-600 w-full h-20 flex justify-end px-4 ">
            <div className="bg-gray-600  w-2/6 h- flex  justify-evenly items-center px-4 ">
                <Link to="index" className="font-semibold text-white text-xl">Home </Link>
                <Link className="font-semibold text-white text-xl">Contact Us</Link>
                <Link className="font-semibold text-white text-xl">About Us</Link>
            </div>
        </div>
        </>
    )
}

export default Navbar