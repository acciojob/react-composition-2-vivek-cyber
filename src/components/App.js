
import React from "react";
import './../styles/App.css';
import { useState } from "react";
import Close from "./Close";

const App = () => {

  let [disval,setdisval]=useState(false)

  return (
    <div>
      <div>
        <button className="model-show" onClick={()=>{setdisval(true);console.log(disval)}}>Show Modal</button>
      </div>
    { disval && <Close setdisval={setdisval} />}



    </div>
  )
}

export default App
