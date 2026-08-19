

import React from 'react'

const EditTask = () => {

const {tasks.isloading,erroro  }

  // find selected task 
useEffect(()=>{
   const task=tasks.find()
})
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300">
      <form className="bg-white shadow-lg rounded-lg p-6 w-96">
        <h2 className="text-2xl font-bold text-gray-700 mb-4 text-center">Edit Task</h2>

        <input
          type="text"
          placeholder="Enter Title"
          className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="text"
          placeholder="Description"
          className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600 transition duration-300"
        >
          Update
        </button>
      </form>
    </div>
  )
}

export default EditTask
