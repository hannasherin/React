

function App() {
 const names=['Roy','John','Mathew','Zara']

  return (
    <>
     <h1>List And Key</h1> <hr />
<ul>
  {names.map((item,index)=>{
    return <li key={index}>{item}</li>
  })}
</ul>
     
    </>

  )
}

export default App
