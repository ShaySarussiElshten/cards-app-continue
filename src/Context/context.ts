import React from 'react';
import {Person} from '../interface/person';

type AppContext =  {
    setPersons:React.Dispatch<React.SetStateAction<Person[]>>
    persons:Person[]
 }

const Context = React.createContext<AppContext | null>(null);


export default Context