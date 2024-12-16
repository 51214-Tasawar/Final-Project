import { Link } from "react-router-dom";

const AboutUs=()=>{
   return (
    <>
<div className="w-screen h-screen">
   <div className="w-screen h-20 bg-blue-400 flex justify-end ">
    <div className="flex justify-start mr-80 items-center">
    <h1 className="font-semibold font-serif">Info About Us Is the Following</h1>
    </div>
   <Link to={"/contactUs"} className="bg-blue-800 h-1/2 m-5 rounded-md p-2">
     Contact Us </Link>
    <Link to={"/services"} className="bg-blue-800 h-1/2 m-5 rounded-md p-2">Services</Link>
    <Link to={"/homepage"} className="bg-blue-800 h-1/2 m-5 rounded-md p-2">Home Page</Link>
   </div>
   </div>
    </>
   )
}
export default AboutUs ;