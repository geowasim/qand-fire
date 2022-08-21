import { useState } from "react";
import { signOut, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import "./login.css";

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setIsLogin(true);

        // ...
        console.log(user);
      })
      .catch((error) => {
        setError(true);
      });
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setEmail("");
        setPassword("");
        setIsLogin(false);
        console.log("Sign-out successful");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {error && <span>Wrong email or password!</span>}
      </form>
      {isLogin && <button onClick={handleLogout}>Logout</button>}
    </div>
  );
};

export default Login;
