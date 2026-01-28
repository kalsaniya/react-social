import "./register.css";

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <div className="loginLogo">Kalsaniya</div>
          <span className="loginDesc">
            Connect with friends and the world around you on Kalaniya.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Password Again" className="loginInput" />
            <button className="loginButton">Sign Up</button>
            <span className="loginForgot">Already have an account?</span>
            <button className="loginRegisterButton">
              Log into your account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
