import { Route, Routes, useLocation } from "react-router-dom";
import Index from "./";
import Auth from "./auth";
import Product from "./product";
import CreateProduct from "./components/Products/createproduct";
import GetProduct from "./components/Products/getproduct";
import Layouts from "./components/Layouts/layout";

// Protected and Public Route ? ---

const App=()=>{
 const pathlocation = useLocation() ;
  const ispathlocation = pathlocation.pathname == "/";
  return(
    <>
    {ispathlocation ? (
      <Routes>
        <Route index element={<Auth/>}></Route>
      </Routes>
    ):(
      <Layouts>
      <Routes>
      <Route path="index" element={<Index/>}/>
      <Route path="product" >
   <Route index element={<Product/>}/>
   <Route path="createproduct" element={<CreateProduct/>}/>
   <Route path="getproduct" element={<GetProduct/>}/>
   </Route>
      </Routes>
      </Layouts>
    )

    }
    {/* <Routes>
   
   <Route path="index" element={<Index/>}/>
   <Route path="product" >
   <Route index element={<Product/>}/>
   <Route path="createproduct" element={<CreateProduct/>}/>
   <Route path="getproduct" element={<GetProduct/>}/>
   </Route>
    </Routes> */}

      
 
    </>
  )
}

export default App ;