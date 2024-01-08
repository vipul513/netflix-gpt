import React, { useState } from 'react';
import Header from './Header';
import { useRef } from 'react';
import { validateLoginData } from '../utils/validator';

const Login = () => {
    const [validateMessage, setValidateMessage] = useState(null);
    const email = useRef(null);
    const password = useRef(null);

    const loginButtonHandler = () => {
        const message = validateLoginData(email.current.value, password.current.value);
        setValidateMessage(message);
    }

    return (
        <div>
            <Header />
            <div className='absolute'>
                <img
                    src='https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg'
                    alt='logo'
                />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className='absolute w-3/12 p-12 my-36 mx-auto right-0 left-0 bg-black text-white rounded-lg bg-opacity-85'>
                <h1 className='font-bold text-3xl py-4 '> Sign In</h1>
                <div className='text-red-600 text-xl pt-5 pb-3'>
                    <span> {validateMessage} </span>
                </div>

                <input 
                    ref = {email}
                    type="text"
                    placeholder='Email Address' 
                    className='p-4 my-2 w-full rounded-md text-black'
                />
                <input 
                    ref = {password}
                    type="password" 
                    placeholder='Password' 
                    className='p-4 my-2 w-full rounded-md text-black'
                />
                <button 
                    className='p-4 my-8 bg-red-600 w-full rounded-md'
                    onClick={loginButtonHandler}
                > 
                Sign IN 
                </button>
                
                <div className='mt-16'>
                    <span className='text-gray-600'>New to Netflix? <a href="/signup" className='text-white cursor-pointer hover:underline px-1'>Sign up now</a> </span>
                    <p className='text-gray-600 text-sm my-2'>
                        Sign in is protected by Google reCAPTCHA to ensure you’re not a bot
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Login