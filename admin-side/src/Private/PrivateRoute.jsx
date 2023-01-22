import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { loadData } from './../utils/AccessLocalStorage';

export function PrivateRoute({children}) {
    let key = 'pass'
    let localData = loadData(key)
    if(localData){
        return children
    }
    else{

        return <Navigate to='/login' />
    }
}