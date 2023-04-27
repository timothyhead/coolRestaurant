import React, { useEffect, useState } from "react";

function Admin(props) {

     const  [password, setPassword] = useState("123450");
     const [enteredPassword, setEnteredPassword] = useState();

   
     useEffect(() => {
        enteredPassword === password ? props.isLoggedin(true) : props.isLoggedin(false);
        console.log("Hello");
  
     }, [enteredPassword,password, props])

     function handleChange(event) {
   console.log("event", event);
setPassword(event);
     }
    


return(
 <div> 
 {
    enteredPassword === password ? <h1>Loggedin</h1> : <h1>Loggedout</h1>
 }
<form>
    <label className="block">Enter password</label>
    <input className="block centre margin-bottom-20" type="number" value={enteredPassword}  onChange={(e) => setEnteredPassword(e.target.value)}></input>
    <label className="block">Change password</label>
   <input className="block centre" type="number"   onChange={(e) => handleChange(e.target.value)}></input>
   

    
</form>
 
 </div>
)
}

export default Admin