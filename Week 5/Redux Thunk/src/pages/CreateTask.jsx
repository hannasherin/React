import React, { useState } from 'react'
import { addTaskToServer } from '../slice/taskSlice'
import { useDispatch } from 'react-redux'

const CreateTask = () => {

  const [formData, setFormData] = useState({
    title: '',
    description: '',
  })
  const dispatch=useDispatch()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({...formData,[name]:value})
  }
//  console.log(formData);
const handleSubmit=(e)=>{
  e.preventDefault()
  dispatch(addTaskToServer(formData))
  setFormData({
    title:'',
    description:'',
  })
}
 

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border border-gray-300 rounded-lg shadow-md bg-white">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Create Task</h1>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={handleChange}
          value={formData.title}
        />

        <input
          type="text"
          name="description"
          placeholder="Description"
          className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={handleChange}
          value={formData.description}

        />

        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition"
        >
          Create
        </button>
      </form>
    </div>
  )
}

export default CreateTask
