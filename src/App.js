// import './App.css';
import Header from './Components/Header/Header'
import Form from "./Components/Form/Form"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <>
            <Routes>
            <Route index element={<Header/>} />
            <Route path='/login' element={<Form  />} />
            <Route path='/register' element={<Form  />} />
          </Routes>
        </>
      </div>
    </Router>
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


// import logo from './logo.svg';
// import './App.css';
// // import Header from '.public/Components/Header/Header'
// import Form from "./Components/Form/Form"
// function App() {
//   return (
//     <div className="App">
//      <Form/>
//     </div>
//   );
// }

// export default App;
