import { useState, useContext } from "react";
import AuthContext from '../context/AuthContext'
import {server } from '../context/Api'



const useLogin = () =>
{

    const [ form, setForm ] = useState( {
        email: '',
        password: ''
    } )
    const [ isLogin , setIsLogin] = useState(false)

    const { handleLogin, auth, handleRegister } = useContext( AuthContext )

    const handleForm = (e) =>{
        setForm({
            ...form, [ e.target.name ]: e.target.value
        })
    }

    const handleSubmit = ( e , state) =>
    {
        e.preventDefault()
        state ? handleLogin(form) : handleRegister(form)
        if (auth === true) {
            setForm({
                email: '',
                password: ''
            })
        } else {
        }
    }

    const toggleState = () => {
        setIsLogin(!isLogin)
    }

    const handleOauth = (e) => {
        e.preventDefault()
        window.location.href = `${server}login/${e.target.dataset.provider}`
    }


    return {
        form,
        setForm,
        handleForm,
        handleSubmit,
        isLogin,
        setIsLogin,
        toggleState,
        handleOauth
    }
}

export default useLogin