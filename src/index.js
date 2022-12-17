import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import Header from './Components/Header/Header'
// import Form from "./Components/Form/Form"
// import { BrowserRouter as Router } from 'react-router-dom'
// function App(){
//   return(
//     <Router>
//       <div>
//       {/* <Header/>
//       <Form/> */}
//       <App/>
//     </div>
//     </Router>
    
//   )
// }
// ReactDOM.render(<App/>,document.getElementById('root'));

// import React, { useEffect } from 'react'
// import ReactDOM from 'react-dom';
// import './index.css';
// import { app } from './Firebase';
// import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'

// import App from './App';
// import './App.css';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Form from "./Components/Form/Form"
// import Header from './Components/Header/Header';
// import {
//   BrowserRouter  as Router,
//   Routes,
//   Route,
//   useNavigate
// } from "react-router-dom";
// import { useState } from 'react';


// export default function App() {
  
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
  // const navigate = useNavigate();
  // const handleAction = (id) => {
  //   const authentication = getAuth();
  //   if (id === 2) {
  //     createUserWithEmailAndPassword(authentication, email, password)
  //       .then((response) => {
  //         // navigate('/header')
  //         sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
  //       })
  //   }
  // }
  // let navigate = useNavigate();
  // const handleAction = (id) => {
  //   const authentication = getAuth();
  //   if (id === 1) {
  //     signInWithEmailAndPassword(authentication, email, password)
  //       .then((response) => {
  //         // navigate('/header')
  //         sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
  //       })
  //       .catch((error) => {
  //         console.log(error.code)
  //         if (error.code === 'auth/wrong-password') {
  //           toast.error('Please check the Password');
  //         }
  //         if (error.code === 'auth/user-not-found') {
  //           toast.error('Please check the Email');
  //         }
  //       })
  //   }
  //   if (id === 2) {
  //     createUserWithEmailAndPassword(authentication, email, password)
  //       .then((response) => {
  //         // navigate('/header')
  //         sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
  //       })
  //       .catch((error) => {
  //         if (error.code === 'auth/email-already-in-use') {
  //           toast.error('Email Already in Use');
  //         }
  //       })
  //   }
  // }

//   useEffect(() => {
//     let authToken = sessionStorage.getItem('Auth Token')

//     if (authToken) {
//       // navigate('/header')
//     }
//   }, [])
//   return (
//       <Router>
//       <div className="App">
//         <>
//         <Routes>
//             <Route index element={<Header/>} />
//             <Route
//               path='/login'
//               element={
//                 <Form
//                   title="Login"
//                   setEmail={setEmail}
//                   setPassword={setPassword}
//                   handleAction={() => handleAction(1)}
//                 />}
//             />
//             <Route
//               path='/register'
//               element={
//                 <Form
//                   title="Register"
//                   setEmail={setEmail}
//                   setPassword={setPassword}
//                   handleAction={() => handleAction(2)}
//                 />}
//             />
//             <Route
//             path='/header'
//             element={
//               <Header />}
//           />
//           </Routes>
//         </>
//       </div>
//     </Router>
//   );
// }


// ReactDOM.render(
//   <React.StrictMode>
//     {/* <Header/>
//     <App/>
//     <Form title="Register"/> */}
//     <Router>
//       <Header/>
//       <App/>
//     </Router>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import Form from "./Components/Form/Form";
// import reportWebVitals from './reportWebVitals';
// import {
//   Routes,
//   Route,
//   BrowserRouter 
// } from "react-router-dom";
// ReactDOM.render(
//   <React.StrictMode>Z
//   {/* <Form title="Register" /> */}
    
//     <BrowserRouter>
//       {/* <App /> */}
//       <Routes>
//         <Route path="/" element={ <App /> }>
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals




// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);