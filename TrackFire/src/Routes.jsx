import {Route, Routes} from 'react-router-dom';
import React, {Suspense} from 'react';
import Landing from './pages/Landing Page/Landing';
import Home from './pages/Home/Home';
import  Login  from './pages/Login/Login';
import  Signin  from './pages/Signin/Signin';
const FinvoRoutes = () =>{
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
            <Routes>
            <Route exact path='/' element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<Signin />} />
            </Routes>
            </Suspense>
        </div>
    )
}
export default FinvoRoutes;