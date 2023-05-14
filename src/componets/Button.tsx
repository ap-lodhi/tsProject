
import React from "react";

interface TButtonProps {
  // button label
  label: string;
  //on clilk handler
  onClick: () => void;
}

function Button({ label, onClick }: TButtonProps) {
  return <button onClick={onClick}>{label}</button>;
}

export { Button };
