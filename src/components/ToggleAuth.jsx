import React from 'react';
import useAuth from '../hooks/useAuth'


const ToggleAuth = ({setLogin}) => {

    const { isLogin } = useAuth()

    return (
        <>
            {isLogin ?
                <div className='toggle'>
                    <span>Don’t have an account yet ?</span >
                    <span className='toggleLink' onClick={() =>
                    {
                        setLogin()
                    }} >Register</span>
                </div>
                :
                <div className="toggle">
                    <span>Adready a member?</span>
                    <span className='toggleLink' onClick={() =>
                    {
                        setLogin()
                    }}>Login</span>
                </div>
            }
        </>
    )
};

export default ToggleAuth;
