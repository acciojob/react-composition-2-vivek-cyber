import React from "react";

function Close(props)
{
    console.log(props)
    return(
        <div className="model-overlay" >
          <button className="model-close" onClick={()=>{props.setdisval(false);}}>Close</button>
          <p className="model-p">This is content of the modal</p>
        </div>
    )
}

export default Close