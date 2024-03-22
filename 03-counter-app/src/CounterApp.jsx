import { useState } from "react";

export const CounterApp = () => {
  
  
  const [counter, setCounter]= useState(0);

  // const counterIncrement = () =>{
  //   console.log('click')
  //   //Modificación constante estandar
  //   // setCounter(counter+1)
    
  //   //Modifiación optimizada
  //   setCounter(c=> c +1 )

  // }

  // Método optimizado completo
  const counterIncrement = () => setCounter(c=> c +1 ) 
  
  return<>
    <h2>contador: {counter}</h2>

    {/* Evento click estandar */}
    {/* 
    <button onClick={()=>{
      counterIncrement()
    }}>Incrementar contador +1</button> */}

    {/* Evento click optimizado */}
    <button onClick={ counterIncrement }>Incrementar contador +1</button>

    </>
}