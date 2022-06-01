import { useEffect, useState } from 'react';
import {validate} from '../utiles/validators'

const useInput = (validators:any) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const {isValid:valueIsValid,messageArray:errorMessage} = validate(enteredValue,validators);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event:any) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event:any) => {
    if(enteredValue !== ''){
        setIsTouched(true);
    }
  };

  useEffect(()=>{
    if(enteredValue !== ''){
        setIsTouched(true);
    }  
  },[enteredValue])

  const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    isTouched,
    hasError,
    errorMessage,
    setValue: setEnteredValue,
    valueChangeHandler,
    inputBlurHandler,
    reset
  };
};

export default useInput;