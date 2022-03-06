import { useState, useContext } from "react";
import AuthContext from '../context/AuthContext'
import {apiDelete, server } from '../context/Api'



const useAuth = () =>
{
    const [formUpdate, setFormUpdate] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        description: '',
    })

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

    const handleFormUpdate = (e) => {
        setFormUpdate( {
            ...formUpdate, [ e.target.name ]: e.target.value
        })
    }
    const handleSubmitUpdate = ( e ,file) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append( 'file', file );
        formData.append('user',formUpdate)
        console.log(formData)
    }

    const toggleState = () => {
        setIsLogin(!isLogin)
    }

    const handleOauth = (e) => {
        e.preventDefault()
        window.location.href = `${server}login/${e.target.dataset.provider}`
    }

    const handleDelete = (e) => {
        e.preventDefault()
        fetch.delete(`${apiDelete}/${ e.target.baseURI.split("/").at(-1)}`)
        .then(res => {
            if (res.status === 200) {
                window.location.href = '/'
            }
        }).finally()
    }

    const handleUpdate = (e) => {}

    return {
        form,
        formUpdate,
        setForm,
        handleFormUpdate,
        handleSubmitUpdate,
        handleForm,
        handleSubmit,
        isLogin,
        setIsLogin,
        handleDelete,
        handleUpdate,
        toggleState,
        handleOauth,
    }
}

export default useAuth