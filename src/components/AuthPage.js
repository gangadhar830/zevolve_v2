import { useState } from "react";
import {
  FaArrowRight,
  FaShieldAlt,
  FaBolt,
  FaCheckCircle,
} from "react-icons/fa";

function AuthPage({ setUser, handleHome }) {
  const [signup, setSignup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/api/users/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password }),
        }
      );

      if (!response.ok) throw new Error("Registration failed");

      alert("Registered Successfully");
      setName("");
      setEmail("");
      setPassword("");
      setSignup(false);
    } catch (error) {
      console.log(error);
    }
  };

  const loginUser = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/api/users/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.text();

      if (!response.ok) {
        alert(data);
        return;
      }

      const userObj = { email };
      localStorage.setItem("user", JSON.stringify(userObj));
      setUser(userObj);

      alert("Login Successful");
      handleHome();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="auth-container">
      <div className={`auth-box ${signup ? "active" : ""}`}>

        {/* LEFT INFO PANEL */}
        <div className="auth-info-panel">
          <span className="auth-badge">ZEVOLVE</span>

          <h1>
            Design your
            <span> healthier workspace</span>
          </h1>

          <p>
            Premium ergonomic furniture crafted for posture,
            comfort and productivity.
          </p>

          <div className="auth-features">
            <div>
              <FaShieldAlt />
              <span>Secure account</span>
            </div>

            <div>
              <FaBolt />
              <span>Quick onboarding</span>
            </div>

            <div>
              <FaCheckCircle />
              <span>Premium support</span>
            </div>
          </div>
        </div>

        {/* FORM SIDE */}
        <div className="auth-forms">

          {!signup ? (
            <div className="form-box">
              <h2>Welcome back</h2>
              <p>Login to continue your experience</p>

              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button onClick={loginUser}>
                Login <FaArrowRight />
              </button>

              <span className="switch-text">
                New here?{" "}
                <strong onClick={() => setSignup(true)}>
                  Create account
                </strong>
              </span>
            </div>
          ) : (
            <div className="form-box">
              <h2>Create account</h2>
              <p>Start your ergonomic journey</p>

              <input
                type="text"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button onClick={registerUser}>
                Sign Up <FaArrowRight />
              </button>

              <span className="switch-text">
                Already registered?{" "}
                <strong onClick={() => setSignup(false)}>
                  Login
                </strong>
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthPage;