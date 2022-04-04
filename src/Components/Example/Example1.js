import { useState } from "react";

function Example1 () {
   const [firsName, setFirstName]= useState ("");
   const [LastName, setLastName]= useState ("");


   const onFirstChange = (event) => {
       setFirstName(event.target.value)
   }
   const onInputChange = (event) => {
       setLastName(event.target.value);
   }
    
    return (
        <div className="Example1">
            {firsName} {LastName} <br/>
            <label>
                First name:
                <input type="text" onChange = {onFirstChange}/>
            </label>
            <label>
                Last name:
                <input type="text" onChange = {onInputChange}/>
            </label>
        </div>
    );
}
export default Example1;