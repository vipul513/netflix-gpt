import React, {useState} from 'react';
import Header from './Header';
import { useRef } from 'react';
import { validateSignupData } from '../utils/validator';
import { auth } from "../utils/firebase"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function SignUp() {

    const [errorMessage, setErrorMessage] = useState(null);
    const fullName = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const navigate = useNavigate();

    const signupButtonHandler = () => {
        const message = validateSignupData(fullName, email.current.value, password.current.value);
        setErrorMessage(message);
        if(message) return;
        createUserWithEmailAndPassword(
            auth,
            email.current.value,
            password.current.value
          )
            .then((userCredential) => {
              const user = userCredential.user;
              updateProfile(user, {
                displayName: fullName.current.value,
                photoURL: "https://avatars.githubusercontent.com/u/12824231?v=4",
              })
                .then(() => {
                  navigate("/browse");
                })
                .catch((error) => {
                  setErrorMessage(error.message);
                });
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + "-" + errorMessage);
            });
      
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
                { errorMessage != null ? <div className='text-red-600 text-xl pt-5 pb-3 font-bold'>
                    <span> {errorMessage} </span>
                </div>: ""}
                <input
                    ref={fullName}
                    type="text"
                    placeholder='Full Name'
                    className='p-3 my-2 w-full rounded-md text-black bg-gray-300'
                />
                <input
                    ref = {email}
                    type="text"
                    placeholder='Email Address'
                    className='p-3 my-2 w-full rounded-md text-black bg-gray-300'
                />
                <input
                     ref = {password}
                    type="password"
                    placeholder='Password'
                    className='p-3 my-2 w-full rounded-md text-black bg-gray-300'
                />
                <button
                    onClick={signupButtonHandler}
                    className='p-3 mt-10 mb-6 bg-red-600 w-full rounded-md font-bold'
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