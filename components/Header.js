import React, { useEffect, useState } from 'react';
import "./Header.css";

export default function Header({active, isBreak, initial }) {

  const workMessage = "Keep Working!";
  const breakMessage = "Relax";
  const initialMessage = "Bienvenido!"

  const [message, setMessage] = useState("");
  
  useEffect(() =>{
    if(active){
      setMessage(workMessage);
    } else {
      setMessage(breakMessage);
    }  
  },[active])

  useEffect(() =>{
    if(isBreak){
      setMessage("Break Time")
    } else {
      setMessage(workMessage)
    }
  },[isBreak])
  
  useEffect(() =>{
    setMessage(initialMessage)
  },[initial])

  return (
    <div className="header">
      <h2>{message}</h2>
    </div>
  );
};