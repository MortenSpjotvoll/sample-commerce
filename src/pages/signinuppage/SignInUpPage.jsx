import React from "react";
import SignIn from '../../components/signin/SignIn';
import SignUp from '../../components/signup/SignUp';
import './SignInUpPage.scss';

const SignInUpPage = () => (
    <div className='sign-in-up'>
        <SignIn />
        <SignUp />
    </div>
)

export default SignInUpPage;