import { useState } from "react";
function Example()  {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const  onFirstNameChange = (event) =>
}

 return (
   <div className="Example">
     {fisrtName}<br/>
     <input type="text" onChange={onInputChange}/>
   </div>
 )
 
export default Example;