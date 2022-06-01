import { useEffect, useState } from 'react';
import { Validator } from '../interface/Validator';
import {validate} from '../validators/general'

const useInput = (validators:Validator[]) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const {isValid:valueIsValid,messageArray:errorMessage} = validate(enteredValue,validators);
  

  
  useEffect(()=>{
    if(enteredValue !== ''){
        setIsTouched(true);
    }  
  },[enteredValue])



  return {
    value: enteredValue,
    isValid: valueIsValid,
    isTouched,
    errorMessage,
    setValue: setEnteredValue,
  };
};

export default useInput;