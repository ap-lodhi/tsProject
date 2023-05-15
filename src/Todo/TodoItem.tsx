import React, { useState } from "react";

export interface TodoItemProps {
  title: string;
  id: number;
  status: boolean;
}

function TodoItem({ title, id, status }: TodoItemProps) {
  const [completed, setCompleted] = useState(status);

  const handleToggle = () => {
    setCompleted(!completed);
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
    >
      <div>{title} --</div>
      <div onClick={handleToggle} style={{ cursor: "pointer" }}>
        {completed ? "completed" : "not completed"}
      </div>
    </div>
  );
}

export { TodoItem };
