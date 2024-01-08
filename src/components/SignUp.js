import React, {useState} from 'react';
import Header from './Header';
import { useRef } from 'react';
import { validateSignupData } from '../utils/validator';

function SignUp() {

    const [validateMessage, setValidateMessage] = useState(null);
    const fullName = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const signupButtonHandler = () => {
        const message = validateSignupData(email.current.value, password.current.value);
        setValidateMessage(message);
    };

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
                <h1 className='font-bold text-3xl py-4 '> Sign Up</h1>
                <div className='text-red-600 text-xl pt-5 pb-3'>
                    <span> {validateMessage} </span>
                </div>
                <input
                    ref={fullName}
                    type="text"
                    placeholder='Full Name'
                    className='p-4 my-2 w-full rounded-md'
                />
                <input
                    ref = {email}
                    type="text"
                    placeholder='Email Address'
                    className='p-4 my-2 w-full rounded-md'
                />
                <input
                     ref = {password}
                    type="password"
                    placeholder='Password'
                    className='p-4 my-2 w-full rounded-md'
                />
                <button
                    onClick={signupButtonHandler}
                    className='p-4 my-6 bg-red-600 w-full rounded-md'
                >
                    Sign Up
                </button>

                <div className='mt-16'>
                    <span className='text-gray-600'>Already a registered user? <a href="/" className='text-white cursor-pointer hover:underline px-1'>Sign In here</a> </span>
                </div>
            </form>
        </div>
    )
}

export default SignUp