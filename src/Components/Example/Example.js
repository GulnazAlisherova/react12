import { useState } from "react";

function Example() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const onFirstNameChange = (event) => {
        setFirstName(event.target.value);
    }
    const onLastNameChange = (event) => {
        setLastName(event.target.value);
    }



    return ( 
        <div className="Example">
            <label>
                A:
                <input type="text" onChange={onFirstNameChange} />
            </label><br />
            <label>
                B:
                <input type="text" onChange={onLastNameChange} />
            </label><br />
        A + B = { Number(firstName) + Number(lastName) }
        </div>
     );
}
export default Example;