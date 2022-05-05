
import './App.css';
import Navbar from "./components/Navbar"

import { useState } from 'react';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert=(message, Type)=>{
setAlert({
  msg:message,
  type:Type,
})
setTimeout(()=>{
setAlert(null)
},1500)
  }
  const toggleMode =()=>{
if(mode === "light"){
  setMode("dark")
  document.body.style.backgroundColor="rgb(50, 49, 49)";
  showAlert("Dark mode has been enabled","success")
}
else {
  setMode("light")
  document.body.style.backgroundColor="white"
showAlert("Light mode has been enabled","success")
}
  }
  return (
 <>
<Navbar title="LOGOBAKERY" mode={mode} toggleMode={toggleMode}/>

<div className="container my-3">

</div>


 </>
  );
}

export default App;
