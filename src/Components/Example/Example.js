import { useState } from "react";
function Example()  {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const  onFirstNameChange = (event) => {
    setFirstName(event.target.value);
  }
  const  onLastNameChange = (event) => {
    setLastName(event.target.value);
  }
}

 return (
   <div className="Example">
     {fisrtName} {lastName}<br/>
     <label></label>
     <input type="text" onChange={onInputChange}/>
   </div>
 )
 
export default Example;