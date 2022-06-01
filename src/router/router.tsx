import React, { useState } from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import HomeScreen from '../Screen/HomeScreen/HomeScreen'
import CreateScreen from '../Screen/CreateScreen/CreateScreen'
import {Person} from '../interface/person'
import EditScreen from '../Screen/EditScreen/EditScreen'




const Router = () => {

  
  
  return (
    <Routes>
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/edit/:id" element={<EditScreen />} />
          <Route path="/create" element={<CreateScreen />} />
          <Route path="*"  element={<Navigate to="/home" />} />
    </Routes>
  )
}

export default Router