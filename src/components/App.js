
import React from "react";
import './../styles/App.css';
import { useState } from "react";

const App = () => {

  let [disval,setdisval]=useState({display:"none"})

  return (
    <div>
        <button className="model-show" onClick={()=>{setdisval({display:"block"});console.log(disval)}}>Show Modal</button>
        <div className="model-overlay" style={disval}>
          <button className="model-close" onClick={()=>{setdisval({display:"none"});console.log(disval)}}>Close</button>
          <p className="model-p">This is content of the modal</p>
        </div>
    </div>
  )
}

export default App
