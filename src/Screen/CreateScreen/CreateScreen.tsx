import React, { useState,useContext} from 'react'
import {Person,setPerson} from '../../interface/person'
import { useNavigate } from 'react-router-dom';
import Form from '../../Components/Form/Form'
import { FormMode } from '../../enum/FormMode';
import Context from '../../Context/context'
import AppContext from '../../interface/AppContext';
import useInput from '../../hooks/useInput';
const { v4: uuidv4 } = require('uuid');
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_EMAIL,
} from '../../utiles/validators';


const CreateScreen = () => {
  

  const {persons,setPersons} = useContext(Context) as AppContext;

  const navigate = useNavigate();
  const [name,setName] = useState('')
  const [title,setTitle] = useState('')
  
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    setValue: setEmailValue,
    isTouched: emailIsTouched,
    errorMessage: emailErrorMessage,
    inputBlurHandler:emailOnBlur
  } = useInput([VALIDATOR_REQUIRE(),VALIDATOR_EMAIL()]);
  
  const [imageUrl,setImageUrl] = useState('')
  const [telephone,setTelephone] = useState('')
  const [role,setRole] = useState('')

  let formIsValid = false;

  if (emailIsValid) {
     formIsValid = true;
  }


  const addPerson = () =>{
    const copyList = [...persons]
    copyList.push({
        id:uuidv4(),
        name,
        title,
        email:emailValue,
        imageUrl,
        telephone,
        role
    })
    setPersons(copyList)
    navigate('/home')
  }

  console.log(emailIsTouched)



  return (
      <Form 
         emailOnBlur={emailOnBlur}
         emailIsTouched={emailIsTouched}
         emailIsValid={emailIsValid}
         emailErrorMessage={emailErrorMessage}
         setPersonDetails={{
           setName,
           setTitle,
           setEmail:setEmailValue,
           setImageUrl,
           setTelephone,
           setRole} as setPerson}
         handleClick={addPerson}
         personDetails={{
           name,
           title,
           email:emailValue,
           imageUrl,
           telephone,
           role} as Person}
         mode={FormMode.CREATE}
      />
  )
}

export default CreateScreen