import Greet from "./components/Geeet"
import Welcome from "./components/Welcome"
import Displaycls from "./components/Displaycls"
import Displayfn from "./components/Displayfn"

function App() {
  let name='Hanna'

  // conditional rendering  only these two worked here
  // ? :
  // &&   only works on true case

  let is_logged=true;
  let is_Active=true;
  return (
    <>
      <h1>My name is {name}</h1>
      <h2>{is_logged ? 'welcome':'Please loggin'}</h2>
      <h2>{is_Active && 'You can perform Task'}</h2>
      <Greet/>
      <Welcome/>
      <Displaycls/>
      <Displayfn/>

    </>
  )
}

export default App
