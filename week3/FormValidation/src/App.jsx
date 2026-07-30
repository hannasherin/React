import { useState } from "react"

function App() {
  // store form Input Value 
 const[formdata,setFormData]=useState({
  name:'',
  email:'',
  password:'',
 })
 
//  store validation error message 
const[errors,setErrors]=useState({})

// update form data when the user type
const handleChange=(e)=>{
 const{name,value}=e.target ;
 setFormData({...formdata,[name]: value})
}
console.log(formdata)



const validateForm=()=>{
  const newError={}


  //name validate
  if(formdata.name.trim()=== ""){
    newError.name="Name is Required"
  }

  // email validation 
  if(formdata.email.trim()===""){
    newError.email="Email is Required"
  }
  else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formdata.email)){
    newError.email="Enter The  valid Email Format"
  }

// password validate 
if(formdata.password.trim()===""){
  newError.password="Password Required"
}else if(formdata.password.length <6){
  newError.password="password must be at least 6 char"
}
 else if(!/[A-Z]/.test(formdata.password)){
  newError.password="must contain one uppercase letter"
 }
 else if(!/[a-z]/.test(formdata.password)){
  newError.password="must contain one lowercase letter"
 } else if(!/[!@#%^*()]/.test(formdata.passsword)){
    newError.password="Must contain one special character"
  }

//  update the error state 
setErrors(newError)

// return true if these are no validation errors 
return Object.keys(newError).length===0


}

const  handleSubmit=(event)=>{
  event.preventDefault()

  if(validateForm()){
    alert("form Submitted sucessfully")
    console.log(formdata);
    setFormData({
      name:'',
  email:'',
  password:'',
    })
    // clean Error message 
setErrors({})

  }
}
console.log(errors);



  return (
    <>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
      {/* Name  */}
      <label htmlFor="">Name :</label>
      <input type="text"
      placeholder=" Enter Your Name"
      name="name" 
      value={formdata.name}
      onChange={handleChange}
      />
    
    {/* for error  */}
    <p style={{color:"red"}}>{errors.name}</p>
    
<br />

        {/* email  */}
       <label htmlFor="">Email :</label>
      <input type="email"
      placeholder=" Enter Your Email"
      name="email" 
      value={formdata.email}
      onChange={handleChange}
      />

<p style={{color:'red'}}>{errors.email}</p>
<br />


  {/* password */}
       <label htmlFor="">Password :</label>
      <input type="password"
      placeholder=" Enter Your Password"
      name="password" 
      value={formdata.password}
      onChange={handleChange}
      />

<p style={{color:"red"}}>{errors.password}</p>
<br />
<button type="submit">Register</button>
</form>

    </>
  )
}

export default App 
