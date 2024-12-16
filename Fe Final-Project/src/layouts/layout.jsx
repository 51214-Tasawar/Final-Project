import Navbar from "./nev-bar"
import SideBar from "./side-bar"

const Layout =({children})=>{
    return(
        <>
        <div>
            <Navbar/>
           <div className="w-full h-full flex ">
             <SideBar/>
            {children}
           </div>
        </div>
        </>
    )
}

export default Layout