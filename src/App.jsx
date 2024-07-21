import React from 'react'
import Dashboard from './vendorDashboard/pages/Dashboard'
import {Routes,Route} from 'react-router-dom'
import { Login,Register,AddProduct } from './vendorDashboard/components/forms'

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        {/* <Route path='/login' element={<Login/>}/>
        <Route path='/login' element={<Login/>}/> */}
      </Routes>
    </div>
  )
}

export default App