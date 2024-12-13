import { useState } from "react"

const App =()=>{
  const [count , setCount] = useState(0);
  return(
    <>
    <div>
      <h1>Current State Number : {count}</h1>
      <button onClick={()=>setCount(count + 1)}
        className="bg-green-500 p-2 rounded-md text-white font-light">Increement</button>
      <button onClick={()=>setCount(count - 1)}
        className="bg-red-500 p-2 rounded-md text-white font-light  ml-2">Substraction</button>
    </div>
    </>
  )
}
 export default App 