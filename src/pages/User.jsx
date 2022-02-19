import React, { useEffect ,useState} from 'react';
import { useSearchParams } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { serverUser } from '../context/Api';

const User = () => {

    const [ searchParams, setSearchParams ] = useSearchParams();
    const [ user, setUser ] = useState(null);
    // const cookies = new Cookies();
    // cookies.set('access_token', searchParams.get('access_token'), { path:'/'});
    // console.log('cookies', cookies.get('access_token'));
    useEffect(() => {
        fetch(`${serverUser}?access_token=${searchParams.get('access_token')}`, {
            method: 'GET',
        }).then( async (res) => {
            if(res.status === 200){
                let json = await res.json()
                console.log(json)
                setUser(json.user)
            } else {
                console.log('Error')
                setTimeout(() => {
                    window.location.href = '/'
                } , 3000)
            }
        })
    }, [searchParams]);
    return (

    <div>
        <h1>User</h1>
    </div>
    )
};

export default User;
