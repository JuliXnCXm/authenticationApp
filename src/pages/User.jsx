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
            } else {
                console.log('Error')
                setTimeout(() => {
                    window.location.href = '/'
                } , 3000)
            }
        })
    }, [searchParams,user]);

    setTimeout(() => {
        setIsLoading(false)
    }, 10000);

    return (isLoading ? <div>Loading...</div> : (
        <div>
            <img src="" alt="" />
            <div>
                <h1>Personal info</h1>
                <h3>Basic info, like your name and photo</h3>
            </div>
            <div>
                <div>
                    <div>
                        <h2>Profile</h2>
                        <span>Some info may be visible to other people</span>
                    </div>
                    <button>Edit</button>
                </div>
                <Table>
                    <tbody>
                    {user ?  user.map((item) => {
                        return (
                                <tr>
                                    <td>{item.name}</td>
                                    {/* <td>{item.value}</td> */}
                                </tr>
                            )
                        }): null}
                    </tbody>
                </Table>
            </div>
        </div>
    )
    )
};

export default User;
