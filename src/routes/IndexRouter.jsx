import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home';
import User from '../pages/User';

const IndexRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/user" element={<User/>}/>
            <Route path="*" element={<div>Not Found</div>}/>
        </Routes>
    );
};

export default IndexRouter;
