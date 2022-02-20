import React, { useEffect ,useState} from 'react';
import { useSearchParams } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { serverUser } from '../context/Api';
import {Table} from 'react-bootstrap';

const User = () => {

    const [ searchParams, setSearchParams ] = useSearchParams();
    const [ user, setUser ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const cookie = new Cookies();
    cookie.set('access_token', searchParams.get('access_token') , {path: '/'});

    useEffect(() => {
        fetch( `${ serverUser }?access_token=${ searchParams.get( 'access_token' )}`, {
            method: 'GET',
        }).then( async (res) => {
            if(res.status === 200){
                let json = await res.json()
                setUser(json.user)
                setIsLoading(false)
            } else {
                console.log('Error')
                setTimeout(() => {
                    window.location.href = '/'
                } , 3000)
            }
        })
    }, [searchParams,user]);

    return (isLoading ? <div>Loading...</div> : (
        <div>
            <img src="" alt="" />
            <div>
                <h1>Personal info</h1>
                <h3>Basic info, like your name and photo</h3>
            </div>
            <div>
                <Table>
                    <tbody>
                        <tr>
                            <td>
                                <h2>Profile</h2>
                                <span>Some info may be visible to other people</span>
                            </td>
                            <td>
                                <button>Edit</button>
                            </td>
                        </tr>
                        <tr>
                            <td>PHOTO</td>
                            <td>
                                <img src={user.picture} alt="" />
                            </td>
                        </tr>
                        <tr>
                            <td>NAME</td>
                            <td>{user.name}</td>
                        </tr>
                        <tr>
                            <td>BIO</td>
                            <td>lorem</td>
                        </tr>
                        <tr>
                            <td>PHONE</td>
                            <td>345344534</td>
                        </tr>
                        <tr>
                            <td>EMAIL</td>
                            <td>{user.email}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
    )
};

export default User;
