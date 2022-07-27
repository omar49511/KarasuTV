import "./login.scss";

export default function Login() {

  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img className="logo" src="https://user-images.githubusercontent.com/72781778/175261795-41541f92-357c-4959-a9f4-a14b10ebc994.png" alt="" />
        </div>
      </div>
      <div className="container">
        <form action="">
          <h1>Sign In</h1>
          <input type="email" placeholder="Email or phone number" />
          <input type="password" placeholder="Password"/>
          <button className="loginButton">Sign In</button>
          <span>
            New to Karasu? <b>Sign up now.</b>
          </span>
          <small>
            By signing up, you agree to Karasu's Terms of Service and Privacy Policy. <b>Learn more.</b>
          </small>
        </form>
      </div>
    </div>
  );
}