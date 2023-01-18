import { useContext, useState } from "react";
import "./signup.scss";
// import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../../context/AuthContext"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const Signup = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();
  const navitage = useNavigate()

  const {dispatch} = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({type:"SIGNUP", payload:user})
        navitage("/details");
      })
      .catch((error) => {
        // setError(true);
      }).catch((error) => {
        setError(true);
      });
  };

  return (
    <div className="signup">
      <form onSubmit={handleLogin}>
        <h1>Sign up Page</h1>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
        {error && <span>Mayhave used email already! </span>}
      </form>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjt6kYNwFy4_gStca5N_ZMrGu0SjfwN9IvGQ&usqp=CAU" alt="Sign up" />
    </div>
  );
};

export default Signup;
