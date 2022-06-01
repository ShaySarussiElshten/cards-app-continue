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
} from '../../validators/validatorsFunctions';
import {errorMessageValuesType, geterStateType, isTouchedValuesType, isValidValuesType, seterStateType} from '../../interface/FormTypes'

const CreateScreen = () => {
  

  const {persons,setPersons} = useContext(Context) as AppContext;

  const navigate = useNavigate();
  
  const {
    value: titleValue,
    isValid: titleIsValid,
    setValue: setTitleValue,
    isTouched: titleIsTouched,
    errorMessage: titleErrorMessage,
  } = useInput([VALIDATOR_REQUIRE()]);


  const {
    value: nameValue,
    isValid: nameIsValid,
    setValue: setNameValue,
    isTouched: nameIsTouched,
    errorMessage: nameErrorMessage,
  } = useInput([VALIDATOR_REQUIRE()]);
  
  const {
    value: emailValue,
    isValid: emailIsValid,
    setValue: setEmailValue,
    isTouched: emailIsTouched,
    errorMessage: emailErrorMessage,
  } = useInput([VALIDATOR_REQUIRE(),VALIDATOR_EMAIL()]);
  
  const [imageUrl,setImageUrl] = useState('')
  const [telephone,setTelephone] = useState('')
  const [role,setRole] = useState('')

  let formIsValid = false;

  if (emailIsValid && nameIsValid && titleIsValid) {
     formIsValid = true;
  }


  const addPerson = () =>{
    const copyList = [...persons]
    copyList.push({
        id:uuidv4(),
        name:nameValue,
        title:titleValue,
        email:emailValue,
        imageUrl,
        telephone,
        role
    })
    setPersons(copyList)
    navigate('/home')
  }

  
 


  const seterState ={
    setName:setNameValue,
    setTitle:setTitleValue,
    setEmail:setEmailValue,
    setImageUrl,
    setTelephone,
    setRole
  } as seterStateType

  const geterState={
    name:nameValue,
    title:titleValue,
    email:emailValue,
    imageUrl,
    telephone,
    role
  } as geterStateType

  const isTouchedValues = {
    emailIsTouched,
    nameIsTouched,
    titleIsTouched
  } as isTouchedValuesType


  const isValidValues = {
    emailIsValid,
    nameIsValid,
    titleIsValid
  } as isValidValuesType


  const errorMessageValues ={
    emailErrorMessage,
    nameErrorMessage,
    titleErrorMessage
  } as errorMessageValuesType

  return (
      <Form 
         isValidValues={isValidValues}
         isTouchedValues={isTouchedValues}
         seterState={seterState}
         handleClick={addPerson}
         geterState={geterState}
         mode={FormMode.CREATE}
         errorMessageValues={errorMessageValues}
         formIsValid={formIsValid}
      />
  )
}

export default CreateScreen