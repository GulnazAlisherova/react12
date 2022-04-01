import { useState } from "react";
function Example() {

  const buttonCallback = (event) =>
    alert("Hello world");
}

//change

return (
  <div className="Example">
    <input type="text"/>
    <button onClick={buttonCallback}>Example</button>
  </div>
);
export default Example;