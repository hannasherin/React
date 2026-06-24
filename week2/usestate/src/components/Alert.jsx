const Alert=()=>{
  
     const handleClick=()=>{
        alert('my name is Hanna')
     }

    const clickMe=(name)=>{
        alert(`My Name is ${name}`)
    }



    return(
        <>
        
        <h1>Alert message</h1>
        {/* <button onClick={()=>alert('Button Clicked')}>Click Me</button> */}
        <button onClick={handleClick}>Click Me </button>
        {/* <button onClick={handleClick()}>Click Me </button> */}  {/*its Works immediatly */}
        <button onClick={()=>clickMe('Hanna Basheer')}>Click</button>



        </>
    )
}
export default Alert