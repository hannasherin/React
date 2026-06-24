import { useState } from "react";

function Show(){
const [show,setShow]=useState(false)

const handleClick=()=>{
   setShow(!show)
};

return(
    <>
    <button onClick={handleClick}>
        {show ? 'Hide': 'Show'}
    </button>
   {show && <p> Welcome React!</p>}
    
    </>
)


}
export default Show;