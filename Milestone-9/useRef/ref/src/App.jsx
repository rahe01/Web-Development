import { useEffect, useRef, useState } from "react"

import InputForworded from "./Input"

function App() {
  
  const [count, setCount] = useState(0)
  let ref = useRef(0)
  const inputRef = useRef()
  console.log(count)

  const handleState = () =>{
    setCount(count + 1)
  }


  const handleRef = () =>{
    ref.current = ref.current + 1
    console.log(ref.current)
    alert(ref.current)
  }



  useEffect(()=>{
    inputRef.current.focus()
  },[])



  return (
    <div>
     <button className="btn btn-primary " onClick={handleState}>Click state </button>
     <button className="btn btn-secondary" onClick={handleRef}>Click ref</button>
     {/* <input ref={inputRef} type="text" /> */}

     <InputForworded type={'text'} ref={inputRef} placeholder={'Enter your name'}></InputForworded>
    </div>
  )
}

export default App
