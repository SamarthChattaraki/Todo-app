import React from "react";
function Plan(prop){
    return(
        <>
        <div className="row mt-3">
         <div className="col-8">   
        <li>{prop.value}</li>
        </div>
        <div className="col-4">
        <button className="btn btn-danger" onClick={()=>{prop.sendFunc(prop.id)}}>Delete</button>
        </div>
        </div>
        </>
    )
}
export default Plan;