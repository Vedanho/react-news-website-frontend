import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Regist from '../../components/Regist/Regist';

const Registpage = () => {
    const SignIn = useSelector((state) => state.userSlice.signIn)

    return (
        <div>
         <Regist />   
        </div>
  
    );
};

export default Registpage;