import React, { useState } from "react";
import LoginComponent from "../../components/Login";
import { user } from "../../assets/dummy";

import { useNavigation } from '@react-navigation/native'
export default function Login(){
    const {navigate} = useNavigation();
    const [error,setError] = useState();
    const onSubmit = ({userName, password}) =>{
        var loggedUser = user.filter((e)=>{
            return e.userName == userName && e.password == password
        })
        if(loggedUser.length>0){
            navigate("Register")
            setError(null)
        }else{
            setError("User or Password incorrect")
            
        }

    }
    return(
        <LoginComponent onSubmit={onSubmit} error={error}/>
    )
}
