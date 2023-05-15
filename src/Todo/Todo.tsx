import { title } from "process";
import React, { useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoItem, TodoItemProps } from "./TodoItem";
interface TodoItem{
    title:string;
    id:number;
    status:Boolean;
}

function Todo(){
    const [data, setData] = useState<TodoItemProps[]>([]);
    const handleAdd=(title:string)=>{
        const payload: TodoItemProps = {
          title,
          id: data.length + 1,
          status: false,
        };
        setData([...data, payload])
    }

    return(
        <>
        <TodoInput onClick={handleAdd}/>
        {
            data.map(task=><TodoItem {...task} key={task.id}/>)
        }
        </>
    )
}

export {Todo}