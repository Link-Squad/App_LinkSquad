import React from 'react'
import { useAuthContext } from '../../contexts/AuthContext'
import Home from '../home/Home'
import Landing from '../landing/Landing'

const HomeRedirect = () => {
    const {user} = useAuthContext()
    return user ?  <Home/> : <Landing/>
}

export default HomeRedirect