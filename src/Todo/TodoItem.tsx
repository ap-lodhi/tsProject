import React from "react";
export interface TodoItemProps{
    title:string;
    id:number;
    status:boolean;
}



function TodoItem({title,id ,status}:TodoItemProps){
    return(
        <div style={{display:'flex',justifyContent:"center",marginTop:"20px"}}>
            <div>{title}</div>
            <div>{`- ${status}`}</div>
        </div>
    )

}

export {TodoItem}