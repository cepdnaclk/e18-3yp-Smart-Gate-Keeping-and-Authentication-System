// import './App.css';
//import Header from './components/Header/Header'
import Form from "./components/Form/Form"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Signin from './components/Sign/Auth';
import Signup from './components/Sign/Signup';
import Createuser from './components/pages/Createuser';
import Institute from './components/pages/Institute';
import Createrooms from './components/pages/Createrooms';
import Viewerooms from './components/pages/Viewrooms';
import Viewusers from './components/pages/Viewusers';
import Home from './components/pages/Home';
import Service from './components/pages/Service';
import Product from './components/pages/Product';

function App() {
  return (
    <Router>
      <div className="App">
        <>
            <Routes>
            <Route index element={<Home/>} />
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


