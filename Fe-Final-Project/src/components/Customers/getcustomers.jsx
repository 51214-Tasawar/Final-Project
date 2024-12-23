import axios from "axios";
import { useEffect, useState } from "react";
import { data } from "react-router-dom";
import Modal from "react-modal";
import GetAllCustomer from "../GlaobalCode/getAllCustomer";

Modal.setAppElement("#root");

const GetCustomer = () => {
  const [data, setDate] = useState([]);

  const [actionModal, setActionModal] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const getAll = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:3006/customer/getcustomer",
        {
          withCredentials: true,
        }
      );
      if (data.data.length > 0) {
        return setDate(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const updateCustomer =async()=>{
    const {data} = await axios.patch("http://localhost:3006/customer/updatecustomer",
      {
       name ,
       username , 
       email
      },
         {
           withCredentials: true,
         }
       )

        setActionModal("")
        void GetAllCustomer ();

  }

  const deleteCustomer =async()=>{
    const {data} = await axios.delete("http://localhost:3006/customer/deletecutomer",
      {
        params:{username :username}
      } ,
      {
        withCredentials: true,
      }
    )
    void GetAllCustomer () 
    setActionModal("")
  }


  useEffect(() => {
    getAll();
  }, []);
  return (
    <>
      <div className="w-full h-full bg-red-300 p-4 flex  overflow-y-scroll gap-x-4 gap-y-4  flex-wrap ">
        {data.length > 0 ? (
          <>
            {data.map((customer, index) => {
              return (
                <GetAllCustomer
                  key={index}
                  customer={customer}
                  setActionModal={setActionModal}
                  setName={setName}
                  setUsername = {setUsername}
                  setEmail = {setEmail}
                />
              );
            })}
          </>
        ) : (
          <>
            <div>
              <p>No Customer Exits</p>
            </div>
          </>
        )}
        <Modal
          isOpen={actionModal === "update"}
          onRequestClose={() => {
            setActionModal("");
          }}
          className="fixed inset-0 flex items-center justify-center "
        >
          <div className="w-1/4 h-1/2 items-center bg-white  rounded-md  border-2 border-blue-700">
            <div className=" flex flex-col items-center justify-center mt-5">
              <input
                onChange={(e) => {
                  console.log(e.target.value);
                  setUsername(e.target.value);
                }}
                className="w-64 h-10 p-2 focus:outline-none  mb-6 bg-slate-200 rounded-md"
                type="name"
                name="name"
                required
                defaultValue={name}
              />
              <input
                onChange={(e) => {
                  console.log(e.target.value);
                  setUsername(e.target.value);
                }}
                className="w-64 h-10 p-2 focus:outline-none  mb-6 bg-slate-200 rounded-md"
                type="username"
                name="username"
                required
                defaultValue={username}
              />

              <input
                onChange={(e) => {
                  console.log(e.target.value);
                  setUsername(e.target.value);
                }}
                className="w-64 h-10 p-2 focus:outline-none  mb-2 bg-slate-200 rounded-md"
                type="email"
                name="email"
                required
                defaultValue={email}
              />
            </div>
            <div className="w-full h-1/2 flex items-center justify-center gap-x-4">
              <div className="bg-gray-700 text-white text-xl   px-2   rounded-md  hover:text-white hover:bg-blue-600 ">
                <button
                  className="p-1 px-2 rounded-md"
                  onClick={() => {
                    setActionModal("");
                  }}
                >
                  Close
                </button>
              </div>
              <div className="bg-gray-700 text-white text-xl px-2  rounded-md  hover:text-white hover:bg-blue-600">
                <button className="p-1 px-2 rounded-md" 
                onClick={updateCustomer}>
                  Update
                </button>
              </div>
            </div>
          </div>
        </Modal>
        <Modal
          isOpen={actionModal === "delete"}
          onRequestClose={() => {
            setActionModal("");
          }}
          className="fixed inset-0 flex items-center justify-center"
        >
          <div className="w-1/4 h-1/4  bg-white rounded-md p-2">
            <div className="w-full h-1/2 flex items-center justify-center">
              <p className="text-2xl font-semibold text-gray-500">
                Click delete button for delete customer
              </p>
            </div>
            <div className="w-full h-1/2 flex items-center justify-center gap-4">
              <div className="bg-gray-700 text-white text-xl   px-2   rounded-md  hover:text-white hover:bg-blue-600 ">
                <button
                  className="p-1 px-2 rounded-md"
                  onClick={() => {
                    setActionModal("");
                  }}
                >
                  Close
                </button>
              </div>
              <div className="bg-gray-700 text-white text-xl px-2  rounded-md  hover:text-white hover:bg-blue-600">
                <button className="p-1 px-2 rounded-md"
                 onClick={deleteCustomer}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};
export default GetCustomer;
