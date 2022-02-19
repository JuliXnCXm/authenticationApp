import React, { useEffect ,useState} from 'react';
import { useSearchParams } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { serverUser } from '../context/Api';

const User = () => {

    const [ searchParams, setSearchParams ] = useSearchParams();
    const [ user, setUser ] = useState(null);
    const cookies = new Cookies();
    cookies.set('access_token', searchParams.get('access_token'), { path:'/'});
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
        {/* {
            user ? {user.map(user => ())}
        } */}
    </div>
    )
};

export default User;
