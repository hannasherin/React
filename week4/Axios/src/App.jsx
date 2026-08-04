import { useEffect, useState } from "react"
import api from "./api/axios"
import axios from "axios"
// import axios from "axios"


function App() {
  const [studentsData, setStudentData] = useState([])
  const[formData,setFormData]=useState({
    name:'',
    email:'',
    course:'',
  })
  const[editId,setEditId]=useState(null)
    const [errors , setErrors ] = useState({})


  useEffect(() => {
    fetchData()
  }, [])

const validateForm =()=>{
    const newError = {}
    if(formData.name.trim() === ""){
       newError.name = "name is required"
    }else if(formData.name.length < 3){
      newError.name = "name must be 3 and above char"
    }
    if(formData.email.trim() === "" ){
      newError.email = "email is required"
    }
    if(formData.course.trim() === ""){
      newError.course = "course is required"
    }
    setErrors(newError)

   return Object.keys(newError).length === 0 
}

  const deletestudent=async(id)=>{
    const is_confirmed=window.confirm(
      'are you sure'
    )
    if(is_confirmed){
      await api.delete(`/students/${id}`)
    fetchData()
    }
    
  }

  const fetchData = async () => {
    const response = await api.get("/students")
        // const response = await axios.get("http://localhost:3001/students") another method to get itso firstly import axios

    const data = await response.data
    setStudentData(data)
  }
  console.log(studentsData);

  const handleChange=(e)=>{
    const{name,value}=e.target 
    setFormData({...formData,[name]:value})
  }
  console.log(formData);
  
  const handleSubmit=async(e)=>{
    e.preventDefault()
    if(validateForm()){
     await api.put(`/students/${editId}`,formData)
     alert('Student data update')
  }else{

      await api.post("/students",formData)
    fetchData()
    
    alert("New Student created")
    }
    
    
setFormData({
      name:'',
      email:'',
      course:''
    })

  }
  

  const editStudent=(student)=>{
    // console.log(student);
    setFormData({
      name:student.name,
      email:student.email,
      course:student.course
    })
    setEditId(student.id)
    
  }

  return (
    <>
 <h1>Create New student</h1>
<form onSubmit={handleSubmit} >
  <input type="text"
  placeholder="Enter your name" 
  name="name"
  value={formData.name}
  onChange={handleChange}
  />
  <p>{errors.name}</p>
<br /><br />
{/* email  */}
  <input type="email"
  placeholder="Enter Your Email"
  name="email" 
  value={formData.email}
  onChange={handleChange}
  />
  <p>{errors.email}</p>
<br /><br />

<input type="text"
  placeholder="Enter Your Course"
  name="course" 
  value={formData.course}
  onChange={handleChange}
  />
  <p>{errors.course}</p>
<br /><br />

<button type="submit"> { editId ? "update" : "create"}</button>

</form>

    <h1>Student List</h1>
      <ul>
        {studentsData.map((item)=>(
          <li key={item.id}>
             <p>Id:{item.id}</p>
             <p>{item.name}</p>
             <p>{item.course}</p>
             <p>{item.email}</p>

             <button onClick={()=>deletestudent(item.id)}>delete</button>
             <button onClick={()=>editStudent(item)}>edit</button>
             <hr />
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
