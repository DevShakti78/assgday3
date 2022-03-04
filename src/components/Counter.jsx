import { useState} from "react"
export function Counter(){
    const [Counter,setCounter] = useState(0)
    return (
    <div>
        <h3>Counter:{Counter}</h3>
        <button onClick={()=>{
            setCounter(Counter+1)
console.log("butoon clicked")
        }}>Increment</button>
        <button onClick={()=>{
            setCounter(Counter-1)
console.log("butoon clicked")
        }}>Decrement</button>
        <button onClick={()=>{
            setCounter(Counter+2)
console.log("butoon clicked")
        }}>Double Counter</button>
        
        
    </div>
    )
}