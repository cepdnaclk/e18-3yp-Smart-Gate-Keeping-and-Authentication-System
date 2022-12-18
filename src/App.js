// import './App.css';
import Header from './Components/Header/Header'
import Form from "./Components/Form/Form"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Signin from './Components/Sign/Auth';
import Signup from './Components/Sign/Signup';
import Createuser from './Components/Pages/Createuser';
import Institute from './Components/Pages/Institute';
import Createrooms from './Components/Pages/Createrooms';
import Viewerooms from './Components/Pages/Viewrooms';
import Viewusers from './Components/Pages/Viewusers';
import Home from './Components/Pages/Home';
import Service from './Components/Pages/Service';
import Product from './Components/Pages/Product';

function App() {
  return (
    <Router>
      <div className="App">
        <>
            <Routes>
            <Route index element={<Header/>} />
            <Route path='/form' element={<Form/>} />
            <Route path='/institute' element={<Institute/>} />
            <Route path='/sign-up' element={<Signin/>} />
            <Route path='/signup' element={<Signup/>} />

            <Route path='/createuser' element={<Createuser/>} />
            <Route path='/createrooms' element={<Createrooms/>} />
            <Route path='/viewerooms' element={<Viewerooms/>} />
            <Route path='/viewusers' element={<Viewusers/>} />

            <Route path='/home' element={<Home/>} />
            <Route path='/service' element={<Service/>} />
            <Route path='/product' element={<Product/>} />

            {/* <Route path='/register' element={<Form/>} /> */}
          </Routes>
        </>
      </div>
    </Router>
  );
}


export default App;


