import "./register.scss";
import { useRef } from "react";
import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const emailRef = useRef();

  const [setPassword] = useState("");
  const passwordRef = useRef();

  const handleStart  = () => {
    setEmail(emailRef.current.value);
  }

  const handleFinish  = () => {
    setPassword(passwordRef.current.value);
  }
  
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img className="logo" src="https://user-images.githubusercontent.com/72781778/175261795-41541f92-357c-4959-a9f4-a14b10ebc994.png" alt="" />
          <button className="loginButton">Sign In</button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited Animes, Movies, and more.</h1>
        <h2>Watch anywere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your account.
        </p>{
          !email ?(
            <div className="input">
              <input type="email" placeholder="Email" ref={emailRef}/>
              <button className="registerButton" onClick={handleStart}>Get Started</button>
            </div>
          ):(
            <div className="input">
              <input type="password" placeholder="Password" ref={passwordRef}/>
              <button className="registerButton" onClick={handleFinish}>Start</button>
            </div>
          )
        }
      </div>
    </div>
  );
}
