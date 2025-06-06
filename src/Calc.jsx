import {useState} from 'react'

const Calc = () => {
    const [val,setVal]=useState("")
    const [result,setResult]=useState(0)
    const [displayResult,setDisplayResult]= useState(false)
    const [error,setError]= useState(false)
    const style={
        height:"50px",
        width:"50px",
        borderRadius:"20%",
        margin:"10px"
    }
    const enterVal=(e)=>{
        e.preventDefault()
        setVal(val+e.target.value)
    }
    const generateResult=(e)=>{
        e.preventDefault()
        
        try {
            setError(false)
            setResult(eval(val))
        } catch (error) {
           setError(true)
            
        }
        setDisplayResult(true)
    }
    const reset=(e)=>{
        e.preventDefault()
        setDisplayResult(false)
        setResult(0)
        setVal("")
        setError(false)
    }
    console.log(result)


  return (
    <>
   
     <form  style={{alignContent:"center",alignItems:"center"}}>
    <input type="text" style={{height:"20px",width:"200px",margin:"20px"}} value={val} /> <br />
    { error ? <div style={{color:"gray",textAlign:"center"}}>Error</div> :displayResult? <div style={{color:"gray",textAlign:"center"}}>{result}</div> :""}
    <button value="7"onClick={enterVal} style={style}>7</button> <button value="8"onClick={enterVal} style={style}>8</button> <button onClick={enterVal} value="9"style={style}>9</button> <button value="+" onClick={enterVal} style={style}>+</button> <br />
    <button value="4" onClick={enterVal} style={style}>4</button> <button value="5" onClick={enterVal} style={style}>5</button> <button value="6" onClick={enterVal} style={style}>6</button> <button value="-" onClick={enterVal} style={style}>-</button> <br />
    <button value="1" onClick={enterVal} style={style}>1</button> <button value="2" onClick={enterVal} style={style}>2</button> <button value="3" onClick={enterVal} style={style}>3</button> <button value="*" onClick={enterVal} style={style}>*</button> <br />
    <button onClick={reset} style={style}>C</button> <button value="0" onClick={enterVal} style={style}>0</button> <button onClick={generateResult}style={style}>=</button> <button value="/" onClick={enterVal} style={style}>/</button> <br />
   </form>
    </>

  )
}

export default Calc