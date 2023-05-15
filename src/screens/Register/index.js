import React, { useState } from "react";
import RegisterComponent from "../../components/Register";
import { user } from "../../assets/dummy";
import { useNavigation } from '@react-navigation/native'
export default function Register(){
    const [form, setForm] = useState({})
    const [erros, setErros] = useState({})
    const {navigate} = useNavigation()
    const onChange=({name, value}) => {
        setForm({...form,[name]:value })
        if(value){
            setErros((prev)=>{return {...prev, [name]:null}})
        }else{
            setErros((prev)=>{return {...prev, [name]:"This field is required"}})
        }
    }
    const onSubmit = () =>{
        if(!form.userName){
            setErros((prev)=>{return {...prev, userName:"User name is required"}})
        }
        if(!form.firstName){
            setErros((prev)=>{return {...prev, firstName:"First name is required"}})
        }
        if(!form.lastName){
            setErros((prev)=>{return {...prev, lastName:"Last name is required"}})
        }
        if(!form.email){
            setErros((prev)=>{return {...prev, email:"Email is required"}})
        }
        if(!form.password){
            setErros((prev)=>{return {...prev, password:"Password is required"}})
        }
        user.push(form)
        navigate('Login')
        
    }
    return(
       
        <RegisterComponent 
            form={form} 
            errors={erros}
            onSubmit={onSubmit}
            onChange={onChange}
        />
    )
}
