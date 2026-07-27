"use client";

const tests=[

["Button.test.jsx","Passed","100%","6ms"],

["Card.test.jsx","Passed","100%","4ms"],

["SearchInput.test.jsx","Passed","100%","7ms"],

["Counter.test.jsx","Passed","92%","8ms"],

["MovieList.test.jsx","Passed","81%","12ms"]

];

export default function TestResults(){

return(

<table className="test-table">

<thead>

<tr>

<th>Test</th>

<th>Status</th>

<th>Coverage</th>

<th>Runtime</th>

</tr>

</thead>

<tbody>

{

tests.map(test=>(

<tr key={test[0]}>

<td>{test[0]}</td>

<td className="passed">

{test[1]}

</td>

<td>{test[2]}</td>

<td>{test[3]}</td>

</tr>

))

}

</tbody>

</table>

);

}