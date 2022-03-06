import React from 'react';
import {Routes, Route} from 'react-router-dom'
import ErrorMessage from '../components/ErrorMessage';
import Home from '../pages/Home';
import User from '../pages/User';
import UserEditInfo from '../pages/UserEditInfo';

const IndexRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/user" element={<User/>}/>
            <Route path="/userEditInfo/:id" element={<UserEditInfo/>}/>
            <Route path="/message" element={<ErrorMessage/>}/>
            <Route path="*" element={<div>Not Found</div>}/>
        </Routes>
    );
};

export default IndexRouter;
