import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTaskFromServer } from '../slice/taskSlice';

const TaskList = () => {
   const{tasks,isloading,error}= useSelector((state)=>state.taskInfo)
   console.log(tasks);

   const dispatch=useDispatch()

   useEffect(()=>{
    
  dispatch(getTaskFromServer())
   },[])
   
  return (
    <div>
      <h1>Task List</h1>
    </div>
  )
}

export default TaskList
