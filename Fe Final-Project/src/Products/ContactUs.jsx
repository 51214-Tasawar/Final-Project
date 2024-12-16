import { Link } from "react-router-dom";

const ContactUs=()=>{
   return (
    <>
<div className="w-screen h-screen">
   <div className="w-screen h-20 bg-blue-400 flex justify-end ">
    <div className="flex justify-start mr-80 items-center">
    <h1 className="font-semibold font-serif">Contact Us  Via This Page</h1>
    </div>
   <Link to={"/homepage"} className="bg-blue-800 h-1/2 m-5 rounded-md p-2">
     Home Page </Link>
    <Link to={"/services"} className="bg-blue-800 h-1/2 m-5 rounded-md p-2">Services</Link>
    <Link to={"/AboutUs"} className="bg-blue-800 h-1/2 m-5 rounded-md p-2">About Us</Link>
   </div>
   </div>
    </>
   )
}
export default ContactUs ;