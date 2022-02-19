import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { server } from '../context/Api';

const User = () => {

    const [ searchParams, setSearchParams ] = useSearchParams();
    const cookies = new Cookies();
    cookies.set('access_token', searchParams.get('access_token'), { path:'/'});
    useEffect(() => {
        fetch(`${server}`)
    }, []);
    return (

    <div>
        <h1>User</h1>
    </div>
    )
};

export default User;
