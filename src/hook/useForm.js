import { useState } from "react";


export const useFormulario = (valorInicial={}) => {
  
    const [formState, setFormState, ] = useState(valorInicial);

      
      const onInputChangue= ({target})=>{
        const {name,value}=target
        setFormState({
          ...formState,
          [name]:value
        });
    }
    const onLimpiar = ()=>{
        setFormState(valorInicial);
    }
        
      
  return{
    ...formState,
    formState,onInputChangue,onLimpiar,
}
}