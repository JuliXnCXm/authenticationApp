import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { server, serverUser } from '../context/Api';

const User = () => {

    const [ searchParams, setSearchParams ] = useSearchParams();
    const cookies = new Cookies();
    cookies.set('access_token', searchParams.get('access_token'), { path:'/'});
    useEffect(() => {
        fetch(`${serverUser}?access_token=${searchParams.get('access_token')}`, {
            method: 'GET',
        }).then( async (res) => {
            if(res.status === 200){
                let json = await res.json()
                console.log(json)
                // localStorage.setItem('user', JSON.stringify(json.user))
            } else {
                console.log('Error')
            }
        })
    }, []);
    return (

    <div>
        <h1>User</h1>
    </div>
    )
};

export default User;
