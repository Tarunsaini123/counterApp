import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(10)


  const removeValue = ()=>{
    if(counter===0){
      setCounter(0)
    }else{
      setCounter(counter-1)
    }
  }

  const addValue = ()=>{
    if(counter===30){
      setCounter(30)
    }else{
      setCounter(counter+1)
    }
  }

  return (
    <>
     <h1>Counter app</h1>
     <button
     onClick={addValue}
     >Add Value {counter}</button>
     <button
     onClick={removeValue}
     >Remove Value{counter}</button>
    </>
  ) 
}

export default App
