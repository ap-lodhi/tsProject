import React, { useState } from "react";
interface ITodoInputProps{
    onClick: (value:string)=>void
}

function TodoInput({onClick}:ITodoInputProps){
    const [state,setState] =useState<string>("")
}