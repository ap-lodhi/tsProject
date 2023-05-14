import React, { useState } from "react";
import { Count } from "./count";
import { Button } from "./Button";


function Counter(){
    const [count, setCount] = useState<number>(0);
    const handleChange =(val: number)=>{
        // console.log("first")
        setCount(count+val)
    }
    return(
        <div>

        <Count count={count}/>
        <Button label="Add" onClick={()=>handleChange(1)} />
        <Button label="reduce" onClick={()=>handleChange(-1)} />
        </div>
    )
}

export {Counter}