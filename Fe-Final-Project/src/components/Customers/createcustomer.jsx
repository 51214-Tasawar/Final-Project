import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateCustomer = () => {
 
  const UploadImage = useRef() 
  const [custimg , setCustimg] = useState("") 

  const navigate = useNavigate()
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

 const CreateNewCustomer = async()=>{
         
         
       const {data } = await axios.post("http://localhost:3006/customer/createcustomer" ,
       {
        name , 
        username ,
        email , 
        password
       }, {
       withCredentials : true
       })
       if(data?.data){
       alert("New Customer Created Successfully")
        return  navigate("/customers/getcustomer")
       }else{
       alert(data.error);
      }
      
 }
  return (
    <>
      <div className="w-full h-full bg-white">
        <h1 className="text-xl font-semibold py-2 ">Create Customer</h1>
        <div className="w-full h-full flex flex-col">
          <label>Upload Image</label>
          <div 
          onClick={()=>{
            UploadImage.current.click()
          }}
          className="w-36 h-28  bg-gray-200 rounded-md cursor-pointer flex justify-center items-center mb-2">
            {custimg?(<img src={custimg} className="w-full h-full"></img>):(<p className="font-semibold text-white text-4xl "> + </p>)}
            <input
                onChange={(e) => {
                  console.log(e.target);
                  const custimgFiles = e.target.files[0]
                  const imgurl = URL.createObjectURL(custimgFiles)
                  setCustimg(imgurl)
                }}
                ref={UploadImage}
                className="hidden"
                type="file"
                placeholder="Upload Image"
                name="username"
                accept="image/*"
                multiple
                required
              />
          </div>
        </div>
        <div className="w-full h-full flex ">
          <div className="w-1/2 h-full flex-col justify-center">
            <div className="w-full h-full  flex flex-col">
              <label className="text-lg mb-2"> Enter Username </label>
              <input
                onChange={(e) => {
                  console.log(e.target.value);
                  setUsername(e.target.value);
                }}
                className="w-64 h-10 p-2 focus:outline-none  mb-2 bg-slate-200 rounded-md"
                type="username"
                placeholder="Enter Username"
                name="username"
                required
              />
            </div>
            <div className="w-full h-full  flex flex-col">
              <label className="text-lg mb-2"> Password </label>
              <input
                onChange={(e) => {
                  console.log(e.target.value);
                  setPassword(e.target.value);
                }}
                className="w-64 h-10 p-2 focus:outline-none  mb-2 bg-slate-200 rounded-md"
                type="password"
                placeholder="Enter Password"
                name="password"
                required
              />
            </div>
            <div className="w-full h-full  flex flex-col">
              <label className="text-lg mb-2"> Confirm Password </label>
              <input
                onChange={(e) => {
                  console.log(e.target.value);
                  setCpassword(e.target.value);
                }}
                className="w-64 h-10 p-2 focus:outline-none  mb-2 bg-slate-200 rounded-md"
                type="password"
                placeholder="Enter Confirm Password"
                name="cpassword"
                required
              />
            </div>
          </div>
          <div className="w-1/2 h-full ">
            <div className="w-1/2 h-full  flex flex-col">
              <label className="text-lg mb-2"> Name </label>
              <input
                onChange={(e) => {
                  console.log(e.target.value);
                  setName(e.target.value);
                }}
                className="w-64 h-10 p-2 focus:outline-none  mb-2 bg-slate-200 rounded-md"
                type="name"
                placeholder="Enter Name"
                name="name"
                required
              />
            </div>
            <div className="w-1/2 h-full  flex flex-col">
              <label className="text-lg mb-2"> Email </label>
              <input
                onChange={(e) => {
                  console.log(e.target.value);
                  setEmail(e.target.value);
                }}
                className="w-64 h-10 p-2 focus:outline-none  mb-2 bg-slate-200 rounded-md"
                type="email"
                placeholder="Enter Email"
                name="email"
                required
              />
            </div>
            <div>
              <button
               onClick={CreateNewCustomer}
                disabled={!(name && username && email && password === cpassword)}
                className="bg-blue-700 w-40 h-10 text-white rounded-md mt-2 disabled:bg-blue-400 disabled:text-gray-300"
              >
                Create Customer
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateCustomer;
