import React, { useState } from 'react';
function StateHookDemo(props){

    const[counter,setCounter]=useState(0);



    return(
        <div>
            <h4>State hook demo</h4>
            <h3>Counter value is {counter}</h3>
            <button onClick={()=>setCounter(counter + 1)}>Click</button>
        </div>
    )


}
export default StateHookDemo;
