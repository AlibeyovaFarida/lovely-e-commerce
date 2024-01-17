import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'
import { userData } from '../services/helpers'
const AuthRoutes = () => {
  const {jwt} = userData()
  return !jwt ? <Outlet /> : <Navigate to="/"/>
}

export default AuthRoutes