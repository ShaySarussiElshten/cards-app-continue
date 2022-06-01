import React from 'react';

import { 
   VALIDATOR_TYPE_REQUIRE ,
   VALIDATOR_TYPE_MINLENGTH,
   VALIDATOR_TYPE_MAXLENGTH,
   VALIDATOR_TYPE_EMAIL,
   VALIDATOR_TYPE_FILE
  } from '../constants/validatorConstants'




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





