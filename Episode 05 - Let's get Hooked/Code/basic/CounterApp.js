import { useState } from "react";
const [counter, setCounter] = useState(0);

function updateCounterApp() {
  setCounter(counter + 1);
}

/*
<button onclick=(()=>updateCounterApp)>
click the button update the counter by 1 
</button>
*/
