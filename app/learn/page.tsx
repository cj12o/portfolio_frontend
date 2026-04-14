"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { checkServerStatus as status_backend } from "@/backend/email";

const Learn = () => {
  
  const [msg,setMsg] = useState("NOT Running");
  
  const handleClick = async () => {
    const response = await status_backend();
    console.log(response);
    setMsg(await response.message);
  };

  return (
    <div>
      <Button onClick={(e)=>{
        e.preventDefault();
        handleClick();  
      }}>
        click
      </Button>
      <p>{msg}</p>
    </div>
  );
};

export default Learn;
