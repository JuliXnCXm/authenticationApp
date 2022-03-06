import React,{useContext} from 'react';
import Authentication from '../components/Authentication';
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router';

const Home = () => {

    const navigate = useNavigate();

    const {auth} = useContext(AuthContext)
    return (
    <div>
        {auth ?
        navigate('/user')
        : <Authentication/>}
    </div>
    )
};

export default Home;
