import React from 'react';

import { 
   VALIDATOR_TYPE_REQUIRE ,
   VALIDATOR_TYPE_MINLENGTH,
   VALIDATOR_TYPE_MAXLENGTH,
   VALIDATOR_TYPE_EMAIL,
   VALIDATOR_TYPE_FILE
  } from '../constants/validatorConstants'


const converToStringAndTrim = (value:any) => {
    let strVal = value
    if(typeof strVal == 'number'){
      strVal = value.toString()
    }
    return strVal.trim()
  
}



export const VALIDATOR_REQUIRE = () => ({ type: VALIDATOR_TYPE_REQUIRE });
export const VALIDATOR_FILE = () => ({ type: VALIDATOR_TYPE_FILE });
export const VALIDATOR_MINLENGTH = (val:any) => ({
  type: VALIDATOR_TYPE_MINLENGTH,
  val: val
});
export const VALIDATOR_MAXLENGTH = (val:any) => ({
  type: VALIDATOR_TYPE_MAXLENGTH,
  val: val
});
export const VALIDATOR_EMAIL = () => ({ type: VALIDATOR_TYPE_EMAIL });

export const validate = (value = "", validators:any) => {
  let isValid = true;
  let messageArray = [];
  for (const validator of validators) {
    
     let strValue = converToStringAndTrim(value)

    switch(validator.type){
      case VALIDATOR_TYPE_REQUIRE:
        isValid = isValid && strValue.length > 0
        if(!(strValue.length > 0))
           messageArray.push(<p key={validator.type}>This field are required</p>)
      break;
      case VALIDATOR_TYPE_MINLENGTH:
          isValid = isValid && strValue.length >= validator.val;
          if(!(strValue.length >= validator.val))
            messageArray.push(<p key={validator.type}>This field are required {validator.val} minimum length</p>)
      break;
      case VALIDATOR_TYPE_MAXLENGTH:
          isValid = isValid && strValue.length <= validator.val;
          if(!(strValue.length <= validator.val))
            messageArray.push(<p key={validator.type}>This field are required {validator.val} maximum length</p>)
      break;
      case VALIDATOR_TYPE_EMAIL:
          isValid = isValid && /^\S+@\S+\.\S+$/.test(value);
          if(!(/^\S+@\S+\.\S+$/.test(value)))
            messageArray.push(<p key={validator.type}>This field are required correct email'</p>)
      break;
      default:
        break;
    }

  }
  return {isValid,messageArray};
};