"use client";

import { useDashboard } from "../../context/DashboardContext";

export default function Counter() {

const {

counter,
setCounter,
addActivity

}=useDashboard();

const increase=()=>{

setCounter(counter+1);

addActivity("Counter Increased");

};

const decrease=()=>{

if(counter===0)return;

setCounter(counter-1);

addActivity("Counter Decreased");

};

const reset=()=>{

setCounter(0);

addActivity("Counter Reset");

};

return(

<div className="counter">

<h2>State Testing Counter</h2>

<h1>{counter}</h1>

<div className="counter-buttons">

<button onClick={increase}>
Increment
</button>

<button onClick={decrease}>
Decrement
</button>

<button onClick={reset}>
Reset
</button>

</div>

</div>

);

}