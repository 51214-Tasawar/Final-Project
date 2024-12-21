import { Route, Routes, useLocation } from "react-router-dom";
import Index from "./";
import Auth from "./auth";
import Customer from "./customers";
import CreateCustomer from "./components/Customers/createcustomer";
import GetCustomer from "./components/Customers/getcustomers";
import Layouts from "./components/Layouts/layout";

// Protected and Public Route ? ---

const App=()=>{
 const pathlocation = useLocation() ;
  const ispathlocation = pathlocation.pathname == "/";
  return(
    <>
    {/* {ispathlocation ? (
      <Routes>
        <Route index element={<Auth/>}></Route>
      </Routes>
    ):( */}
      <Layouts>
      <Routes>
      <Route path="index" element={<Index/>}/>
      <Route path="customers" >
   <Route index element={<Customer/>}/>
   <Route path="createcustomer" element={<Customer><CreateCustomer/></Customer>}/>
   <Route path="getcustomer" element={<Customer><GetCustomer/></Customer>}/>
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