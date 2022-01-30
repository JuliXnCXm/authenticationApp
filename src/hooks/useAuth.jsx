import { useState, useContext } from "react";
import AuthContext from '../context/AuthContext'

const useLogin = () =>
{

    const [ form, setForm ] = useState( {
        email: '',
        password: ''
    } )
    const [ isLogin , setIsLogin] = useState(false)

    const { handleLogin , auth, handleRegister} = useContext( AuthContext )

    const handleForm = (e) =>{
        setForm({
            ...form, [ e.target.name ]: e.target.value
        })
    }

    console.log(isLogin)

    const handleSubmit = ( e ) =>
    {
        e.preventDefault()
        isLogin ? handleLogin(form): handleRegister(form)
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


    return {
        form,
        setForm,
        handleForm,
        handleSubmit,
        isLogin,
        setIsLogin,
        toggleState
    }
}

export default useLogin