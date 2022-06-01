import React from 'react'
import {FormMode} from '../../enum/FormMode'
import { isValidValuesType, isTouchedValuesType, geterStateType, seterStateType, errorMessageValuesType } from '../../interface/FormTypes'
import {Person,setPerson} from '../../interface/person'

type FormProps = {
    isValidValues:isValidValuesType
    isTouchedValues:isTouchedValuesType
    geterState:geterStateType
    seterState: seterStateType
    handleClick:() => void
    mode:FormMode
    errorMessageValues:errorMessageValuesType
    formIsValid:boolean
}




const Form = ({
    isValidValues,
    isTouchedValues,
    geterState,
    seterState,
    handleClick,
    mode,
    errorMessageValues,
    formIsValid
}:FormProps) => {


  const {name,title,email,imageUrl,telephone,role} = geterState
  const {setName,setTitle,setEmail,setImageUrl,setTelephone,setRole} = seterState
  const {emailIsTouched,nameIsTouched,titleIsTouched} = isTouchedValues
  const {emailIsValid,nameIsValid,titleIsValid} = isValidValues
  const {emailErrorMessage,nameErrorMessage,titleErrorMessage} = errorMessageValues


  
  return (
    <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
            <p className="mt-1 text-sm text-gray-500">Use a permanent address where you can receive mail.</p>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form>
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3 flex flex-col">
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                      name
                  </label>
                  <input
                    type="text"
                    autoComplete="given-name"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8"
                    onChange={(e)=> setName(e.target.value)}
                    value={name}
                  />
                  {(!nameIsValid && nameIsTouched) && nameErrorMessage}
                </div>

                <div className="col-span-6 sm:col-span-3 flex flex-col">
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                     title
                  </label>
                  <input
                    type="text"
                    autoComplete="family-name"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8"
                    onChange={(e)=> setTitle(e.target.value)}
                    value={title}
                  />
                   {(!titleIsValid && titleIsTouched) && titleErrorMessage}
                </div>

                <div className="col-span-6 sm:col-span-4 flex flex-col">
                  <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <input
                    type="text"
                    autoComplete="email"
                    onChange={(e)=> setEmail(e.target.value)}
                    value={email}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8"
                  />
                  {(!emailIsValid && emailIsTouched) && emailErrorMessage}
                </div>
                
               

                <div className="col-span-6">
                  <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                     imageUrl
                  </label>
                  <input
                    onChange={(e)=> setImageUrl(e.target.value)}
                    value={imageUrl}
                    type="text"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8"
                  />
                </div>

                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                  telephone
                  </label>
                  <input
                    onChange={(e)=> setTelephone(e.target.value)}
                    value={telephone}
                    type="text"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                      role
                  </label>
                  <input
                    onChange={(e)=> setRole(e.target.value)}
                    value={role}
                    type="text"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-8"
                  />
                </div>
              </div>
            </form>
            <button
                disabled={!formIsValid}
                onClick={handleClick}
                type="button"
                className="mt-20 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                {FormMode.EDIT === mode ? 'edit person' : 'create person'}
            </button>
          </div>
        </div>
    </div>
  )
}

export default Form