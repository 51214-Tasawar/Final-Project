import React from "react";
import Auth from "./auth"
// import Auth from "./auth";
import Index from "./index";
import { Route, Routes, useLocation } from "react-router-dom";
import Products from "./product";
import Homepage from "./Products/Home";
import ContactUs from "./Products/ContactUs";
import AboutUs from "./Products/About";
import Services from "./Products/Services";
import Create from "./Products/create";
import Get from "./Products/get";
import Layout from "./layouts/layout";

const App = () => {
  const location = useLocation();

  const pathnm = location.pathname === "/";

  return (
    <>
      {pathnm ? (
        <Routes>
          <Route index element={<Auth />} />
        </Routes>
      ) : (
        <Layout>
          <Routes>
            <Route path="index" element={<Index />}></Route>
            <Route path="product" >
              <Route index element={<Products />}/>
              <Route path="create-product" element={<Create />}></Route>
              <Route path="get-Product" element={<Get />}></Route>
            </Route>
          </Routes>
        </Layout>
      )}
    </>
  );
};
export default App;
