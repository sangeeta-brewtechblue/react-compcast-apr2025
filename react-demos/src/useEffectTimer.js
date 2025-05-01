import React, { useState, useEffect } from 'react';

function UseEffectTimer(){
    const[date] = useState(new Date());
    const[second,setSecond]= useState(date.getMilliseconds());

   

    useEffect(()=>{
       // const [date]=useState(new Date());
     
     const timerId = setInterval(()=>setSecond(second + 1),1000);
             
            console.log("setting interval here");
            return () => {
                clearInterval(timerId);
            };  
          
 } );
    // useEffect(()=>{
    return(
        <div>
            <h3>Use effect Timer demo</h3>
            <h4>Today is {date.toDateString()}</h4>
            <h5>Seconds passed {second}</h5>

        </div>
    )
}
export default UseEffectTimer;