import { 
  VALIDATOR_TYPE_REQUIRE ,
  VALIDATOR_TYPE_MINLENGTH,
  VALIDATOR_TYPE_MAXLENGTH,
  VALIDATOR_TYPE_EMAIL,
  VALIDATOR_TYPE_FILE
 } from '../constants/validatorConstants'
import { Validator } from '../interface/Validator';


export const validate = (value = "", validators:Validator[]) => {
    let isValid = true;
    let messageArray:JSX.Element[] = [];
    for (const validator of validators) {
      
  
      switch(validator.type){
        case VALIDATOR_TYPE_REQUIRE:
          isValid = isValid && value.length > 0
          if(!(value.length > 0))
             messageArray.push(<p key={validator.type}>This field are required</p>)
        break;
        case VALIDATOR_TYPE_MINLENGTH:
            isValid = isValid && value.length >= validator.val;
            if(!(value.length >= validator.val))
              messageArray.push(<p key={validator.type}>This field are required {validator.val} minimum length</p>)
        break;
        case VALIDATOR_TYPE_MAXLENGTH:
            isValid = isValid && value.length <= validator.val;
            if(!(value.length <= validator.val))
              messageArray.push(<p key={validator.type}>This field are required {validator.val} maximum length</p>)
        break;
        case VALIDATOR_TYPE_EMAIL:
            isValid = isValid && /^\S+@\S+\.\S+$/.test(value);
            if(!(/^\S+@\S+\.\S+$/.test(value))){
              messageArray.push(<p key={validator.type}>This field are required correct email</p>)
            }
        break;
        default:
          break;
      }
  
    }
    return {isValid,messageArray};
  };