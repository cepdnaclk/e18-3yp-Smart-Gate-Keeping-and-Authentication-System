// import { useContext, useState } from "react";
// import "./login.scss";
// import { signInWithEmailAndPassword } from "firebase/auth";
// // import { auth } from "../../firebase";
// import { useNavigate } from "react-router-dom";
// import {AuthContext} from "../../context/AuthContext"
// import { Link } from "react-router-dom";
// import { auth } from "../../firebase";
// // import { auth } from "firebase/auth";

// const Login = () => {
//   const [error, setError] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const navitage = useNavigate();

//   const {dispatch} = useContext(AuthContext);

//   const handleLogin = (e) => {
//     e.preventDefault();

//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         // Signed in
//         const user = userCredential.user;
//         dispatch({type:"LOGIN", payload:user})
//         navitage("/")
       
//       })
//       .catch((error) => {
//         setError(true);
//       });
//   };

//   return (
//     <div className="login">
//       <form onSubmit={handleLogin}>
//         <h1>Login Page</h1>
//         <input
//           type="email"
//           placeholder="email"
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="password"
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Login</button>
//         <br></br>
//         {error && <span>Wrong email or password!</span>}
//         <Link to={{ pathname: "/signup" }} >
//         <div className="viewButton">
//           Goto Signup
//           </div>
//       </Link>
//       </form>
      
      
//     </div>
//   );
// };

// export default Login;
