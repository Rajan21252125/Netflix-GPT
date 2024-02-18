/* eslint-disable react/no-unescaped-entities */
import { useRef, useState } from "react";
import Header from "./Header";
import validation from "../utils/validation";

const Login = () => {
    const [signIn, setSignIn] = useState(false);
    const [error,setError] = useState(null)
    const email = useRef();
    const password = useRef();
    const name = useRef(null);


    const handleSubmit = () => {
        let nameValue = name ? name.current.value : null;
        let emailValue = email.current.value;
        let passwordValue = password.current.value;
    
        setError(validation(emailValue, passwordValue, nameValue));
    }
    


    const toggleSignin = () => {
        setSignIn(!signIn)
    }
  return (
    <div className="h-screen relative bg-gradient-to-b from-black/65">
      <Header />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="bg-mg"
        className="absolute mx-auto -z-10 top-0 left-0 right-0 w-full h-full object-cover"
      />
      <div className="h-screen flex justify-center items-center">
        <form className="bg-black bg-opacity-90 text-white p-14 space-y-7 w-96 rounded-lg" onSubmit={(e) => { e.preventDefault() }}>
          <h1 className="text-3xl font-semibold">{!signIn ? "Sign In" : "Sign Up"}</h1>
          {signIn && <input
            type="text"
            placeholder="Name"
            className="w-full py-3 px-6 bg-gray-900 rounded-lg outline-none"
            ref={name}
          />}
          <input
            type="text"
            placeholder="Email or phone number"
            className="w-full py-3 px-6 bg-gray-900 rounded-lg outline-none"
            ref={email}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full py-3 px-6 bg-gray-900 rounded-lg outline-none mb-2"
            ref={password}
          />
          <span className="text-red-700">{error}</span>
          <button className="bg-red-700 w-full px-1 py-2 font-semibold rounded-lg" onClick={handleSubmit}>
          {!signIn ? "Sign In" : "Sign Up"}
          </button>
          <div className="flex justify-between text-sm text-gray-500">
            <div className="flex items-center">
              <input type="checkbox" className=""/>
              <span className="text-sm mr-2">Remember me</span>
            </div>
            <div>
              <p className="hover:underline cursor-pointer">Need help ?</p>
            </div>
          </div>
          <p className="text-gray-500">
          {!signIn ? "New to Netflix?" : "Already have account?"} <span className="text-white cursor-pointer hover:underline" onClick={toggleSignin}>{!signIn ? "Sign up now." : "Sign in now."}</span>
          </p>
          <p className="text-[0.8rem] text-gray-500">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <span className="text-blue-600 hover:underline cursor-pointer">Learn more.</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
