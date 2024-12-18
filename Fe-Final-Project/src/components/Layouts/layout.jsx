import Navbar from "./Nav-Bar";
import SideBar from "./side-bar";

const Layouts =({children})=>{
    return(
        <>
         <div className=" h-fullw-full bg-gray-200">
            <Navbar/>
            <div className="w-full h-full flex ">
            <SideBar/>
            {children}
            </div>
         </div>
        </>
    )
}

export default Layouts ;