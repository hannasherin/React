import { useState } from "react"
import "./App.css"
function App() {

  const [inputValue, setInputvalue] = useState('')
  const [data, setData] = useState([])

  const handleChange = (e) => {
    setInputvalue(e.target.value)
  }
  console.log(inputValue);

  const addTask = () => {
    if (inputValue.trim()) {
      setData([...data, inputValue])
      setInputvalue('')
    }

  }

  const deleteTask = (index) => {

    const is_confirm = window.confirm("Are  sure want to delete this?")
    if (is_confirm) {
      const datas = data.filter((_, inx) => inx != index)
      setData(datas)
      alert("delete Succesfully")
    }
  }



  return (
    <>
      <h1>Todo Project</h1> <hr />

      <input type="text"
        placeholder="Add New Task"
        value={inputValue}
        onChange={handleChange}
      />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteTask(index)}>delete</button>
          </li>
        ))}
      </ul>


    </>
  )
}

export default App
