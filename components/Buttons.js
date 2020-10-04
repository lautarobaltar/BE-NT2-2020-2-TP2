import React, { useState } from 'react';
import { Button} from 'react-native';
import "./Buttons.css"

export default function Buttons({active,toggle,setReset}) {

  return (
    <div className="buttons"> 
      <Button 
        title={!active ? 'Iniciar' : 'Pausar'} 
        onPress={()=>{toggle(!active)}}
      />
      <Button 
        title='Reiniciar'
        onPress={()=>{setReset(true)}}
      />
    </div>  
  );
}