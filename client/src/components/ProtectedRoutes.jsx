import axiosInstance from "../axiosInstance"
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { setUser } from '../redux/userSlice'

function ProtectedRoutes(props) {
    const { user } = useSelector(state => state.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const getUser = async () => {
        try {
            const response = await axiosInstance.post('/user/getUser', {
                token: localStorage.getItem('token')
            }, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
            

        } catch (error) {
            console.log(error);
            localStorage.clear()
            navigate('/signin')
        }
    }

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