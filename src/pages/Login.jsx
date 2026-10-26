import "./Login.css";
import { useNavigate} from "react-router-dom";

export default function Login() {

 const navigate = useNavigate();

  return (
    <div className="login-container">

      {/* Left Side */}
      <div className="login-left"> </div>

      {/* Right Side */}
      <div className="login-right">
        <h2>Welcome!</h2>
        <p>Log in to your account</p>

        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />

        <button onClick={()=>navigate("/Onboarding")}>Continue</button>

        <hr className ="divider" />
        <button>Google</button>

        <div className="social1">
          <button className="social">LinkedIn</button>
          <button className="social">GitHub</button>
        </div>
      </div>

    </div>
  );
}
