import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Message from '../components/Message';
import Home from '../pages/Home';
import User from '../pages/User';
import UserEditInfo from '../pages/UserEditInfo';
import Token from '../pages/Token';

const IndexRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/user" element={<User/>}/>
            <Route path="/userEditInfo/:id" element={<UserEditInfo/>}/>
            <Route path="/oauth/login/user" element={<Token/>}/>
            <Route path="/oauth/register/user" element={<Token/>}/>
            <Route path="/message" element={<Message/>}/>
            <Route path="*" element={<div>Not Found</div>}/>
        </Routes>
    );
};

export default IndexRouter;
