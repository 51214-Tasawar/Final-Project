import { useState } from "react"

const App =()=>{
  const [count , setCount] = useState(0);
  return(
    <>
    <div>
      <h1>Current State Number{count}</h1>
      <button onClick={()=>setCount(count + 1)}>Increement</button><br/>
      <button onClick={()=>setCount(count - 1)}>Substraction</button>
    </div>
    </>
  )
}
 export default App 