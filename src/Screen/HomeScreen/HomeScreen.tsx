import React, { useContext, useState } from 'react'
import {PencilIcon,TrashIcon,PlusSmIcon}  from '@heroicons/react/solid'
import {Person} from '../../interface/person'
import { Link } from 'react-router-dom';
import Context from '../../Context/context'
import AppContext from '../../interface/AppContext'



const HomeScreen = () => {

   const {persons,setPersons} = useContext(Context) as AppContext;
   

    const removePerson=(id:string)=>{
         const copyList = [...persons] 
         const indexPersonToRemove = persons.findIndex((person:Person)=>(person.id == id))
         copyList.splice(indexPersonToRemove,1)
         setPersons(copyList)
    }

    const renderCards = () =>{
        return persons.map((person:Person) => (
            
            <li key={person.id} className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
              <div className="w-full flex items-center justify-between p-6 space-x-6">
                <div className="flex-1 truncate">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-gray-900 text-sm font-medium truncate">{person.name}</h3>
                    <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                      {person.role}
                    </span>
                  </div>
                  <p className="mt-1 text-gray-500 text-sm truncate">{person.title}</p>
                </div>
                <img className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0" src={person.imageUrl} alt="" />
              </div>
              <div>
                <div className="-mt-px flex divide-x divide-gray-200">
                  <div className="w-0 flex-1 flex">
                    <div
                      className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                      onClick={() => removePerson(person.id)}
                    >
                      <TrashIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                      <span className="ml-3">Remove</span>
                    </div>
                  </div>
                  
                  <div className="-ml-px w-0 flex-1 flex">
                    <Link 
                    to={`/edit/${person.id}`}
                    className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                    >
                      <PencilIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                      <span className="ml-3">Edit</span>
                    </Link>
                  </div>
                 
                </div>
              </div>
            </li>
    
          ))
    }

  
  return (
    <>
      <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        { renderCards() }
      </ul>
      <div className="flex justify-center items-center h-64">
             <Link to={'/create'} >
                <button
                  type="button"
                  className="inline-flex items-center px-6 h-14 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    ADD RECORD
                </button>
              </Link>
      </div>
    </>
  )
}

export default HomeScreen