import { useState } from "react";
function Example()  {
  const [fisrtName, setFirstName] = useState("");

  const onInputName(event.target.value);
}

 return (
   <div className="Example">
     {fisrtName}<br/>
     <input type="text" onChange={onInputChange}/>
   </div>
 )
 
export default Example;