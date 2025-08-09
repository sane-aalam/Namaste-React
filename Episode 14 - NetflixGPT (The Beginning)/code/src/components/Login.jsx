import React from "react";
import { useState } from "react";
import { useRef } from "react";
import Header from "./Header";
import { FormDataValidation } from "../utils/FormDataValidation";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/Firebase"


const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleAuthClick = () => {
        console.log("clicked button!")
        const userName = name.current?.value;
        const enteredEmail = email.current?.value;
        const enteredPassword = password.current?.value;

        console.log(userName, enteredEmail, enteredPassword)

        const massage = FormDataValidation(enteredEmail, enteredPassword);
        console.log(massage)

        if (massage) {
            return;
        }
        setErrorMessage(massage);

        if (!isSignInForm) {
            console.log("signinform creation entered!")
            createUserWithEmailAndPassword(auth, enteredEmail, enteredPassword).then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                console.log("debug2")
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorMessage);
                console.log("debug3")
            });
        } else {
            // login
            console.log("login state entered!")
            signInWithEmailAndPassword(auth, enteredEmail, enteredPassword)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log('login successfully!')
                    console.log(user)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorMessage);
                });
        }
    };

    // Toggle form
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };
    return (
        <div className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/69bec183-9cc8-49d4-8fc2-08228d3c91b4/web/IN-en-20250414-TRIFECTA-perspective_c8273fb1-8860-4ff5-bd1c-c2c4b44d5f2a_large.jpg')] bg-cover bg-center h-[760px] w-full">
            <Header />
            <div className="absolute w-3/12 p-12 bg-black my-36 mx-auto left-0 right-0 text-white bg-opacity-80">
                <h2 className="text-3xl font-bold mb-3 text-left">
                    {" "}
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h2>
                <p className="text-red-600 pb-6">
                    {" "}
                    {isSignInForm
                        ? "Desclaimer : This is just a dummy project to showcase my skills & for learning purpose. This is not an actual streaming website, do not enter your actual credential here."
                        : ""}
                </p>
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="flex flex-col gap-5"
                >
                    {isSignInForm ? null : (
                        <input
                            type="Full Name"
                            ref={name}
                            placeholder="Enter Full Name"
                            className="p-3 w-full rounded bg-zinc-800 text-white placeholder-gray-400 outline-1 focus:ring-2 focus:ring-white"
                        />
                    )}
                    <input
                        type="email"
                        ref={email}
                        placeholder="Email"
                        className="p-3 w-full rounded bg-zinc-800 text-white placeholder-gray-400 outline-1 focus:ring-2 focus:ring-white"
                    />
                    <input
                        type="password"
                        ref={password}
                        placeholder="Password"
                        className="p-3 w-full rounded bg-zinc-800 text-white placeholder-gray-400 outline-1 focus:ring-2 focus:ring-white"
                    />
                    <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
                    <button
                        onClick={handleAuthClick}
                        className="bg-red-600 hover:bg-red-700 transition-colors p-3 w-full rounded font-semibold"
                    >
                        Sign In
                    </button>

                    <div className="flex justify-between items-center text-sm text-gray-400">
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="accent-red-600" />
                            <span>Remember me</span>
                        </label>
                        <a href="#" className="hover:underline">
                            Need help?
                        </a>
                    </div>
                </form>

                <div className="text-gray-400 text-sm mt-6">
                    <p className="text-white cursor-pointer" onClick={toggleSignInForm}>
                        {isSignInForm
                            ? "New to Netflix? Sign up now"
                            : "already registered? sign up now"}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
