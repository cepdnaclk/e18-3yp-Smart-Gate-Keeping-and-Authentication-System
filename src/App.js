import React from 'react';
import './App.css';
// import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Home/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/sign-up' element={<SignUp/>} />
        </Routes>
      </Router>
    </>
  );
}


// import {
//   Routes,
//   Route
// } from "react-router-dom";

// function App() {
//   return (
//       <div className="App">
//         <>
//           <Routes>
//             <Route path='/login' element={<Form title="Login" />} />
//             <Route path='/register' element={<Form title="Register" />} />
//           </Routes>
//         </>
//       </div>
//   );
// }

export default App;


export default App;