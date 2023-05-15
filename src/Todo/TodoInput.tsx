import React, { useState } from "react";
interface ITodoInputProps{
    onClick: (value:string)=>void
}

function TodoInput({onClick}:ITodoInputProps){
    const [state,setState] =useState<string>("")
    const handleChange:React.ChangeEventHandler<HTMLInputElement>=(e)=>{
        setState(e.target.value)
    }

    const handleClick:React.MouseEventHandler<HTMLButtonElement>=()=>{
        onClick(state)
    }
    return(
        <div>
            <input type="text" 
            placeholder="type here to add task"
            value={state}
            onChange={handleChange}
            />
            <button onClick={handleClick}>ADD TASK</button>
        </div>
    )
}
export {TodoInput}