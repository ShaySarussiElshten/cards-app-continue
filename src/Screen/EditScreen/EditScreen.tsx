import React, { useContext, useEffect, useState } from 'react'
import { useParams } from "react-router";
import Form from '../../Components/Form/Form';
import {Person,setPerson} from '../../interface/person';
import {FormMode} from '../../enum/FormMode'
import { useNavigate } from 'react-router-dom';
import Context from '../../Context/context'
import AppContext from '../../interface/AppContext'


const EditScreen = () => {

   const {persons,setPersons} = useContext(Context) as AppContext;
  const navigate = useNavigate();
  const [person,setPerson] = useState<Person>()
  const [name,setName] = useState('')
  const [title,setTitle] = useState('')
  const [email,setEmail] = useState('')
  const [imageUrl,setImageUrl] = useState('')
  const [telephone,setTelephone] = useState('')
  const [role,setRole] = useState('')
  const params = useParams();

  const findPersons=()=>{
     const person = persons.find((person:Person)=>(person.id.toString() == params.id))
     setPerson(person)
  }


  useEffect(()=>{
     findPersons()
  },[])

  useEffect(()=>{
      if(person){
         setName(person.name) 
         setTitle(person.title)
         setEmail(person.email)
         setImageUrl(person.imageUrl)
         setTelephone(person.telephone)
         setRole(person.role)
      }
  },[person])

  
  const editPerson =()=>{
      
     const indexPersonToEdit = persons.findIndex((person:Person)=>(person.id.toString() == params.id))
     const copyList = [...persons]
     copyList.splice(indexPersonToEdit,1)
     copyList.splice(indexPersonToEdit,0,
      {
          id:persons[indexPersonToEdit].id,
          name,
          title,
          email,
          imageUrl,
          telephone,
          role} as Person
      )
     setPersons(copyList)
     navigate('/home')
  }

  
  return (
   //  <Form 
   //       setPersonDetails={{setName,setTitle,setEmail,setImageUrl,setTelephone,setRole} as setPerson}
   //       handleClick={editPerson}
   //       personDetails={{name,title,email,imageUrl,telephone,role} as Person}
   //       mode={FormMode.EDIT}
   //  />
   <div></div>
  )
}

export default EditScreen