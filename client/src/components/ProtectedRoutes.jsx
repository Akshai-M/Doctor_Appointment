import axiosInstance from "../axiosInstance"
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { setUser } from '../redux/userSlice'

function ProtectedRoutes(props) {
    

    useEffect(() => {
        getUser()
    }, [])

    if (localStorage.getItem('token')) {
        return props.children
    }
    else {
        return <Navigate to="/signin" />
    }
}

export default ProtectedRoutes