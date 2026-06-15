

function App() {
  
  let name='Hanna Sherin'
  const is_loggedIn=true

  return (
    // <>
    //   <h1>Hello React Js</h1>
    // </>
    <div>
      <h1>{is_loggedIn ? "Welcome" : "Please Login"}</h1>
      <h1 className="text" style={{color:'red',backgroundColor:'bisque'}}>Hello React Js</h1>
      <h2 id="para">Apple</h2>
      <label htmlFor="">Username:</label>
      <h3>My name is {name}</h3>

    </div>
  )
}

export default App
