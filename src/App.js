// import './App.css';
// import Header from './ComponentItems/Header/Header'
import Form from "./ComponentItems/Form/Form"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Signin from './ComponentItems/Sign/Auth';
import Signup from './ComponentItems/Sign/Signup';
import Createuser from './ComponentItems/Pages/Createuser';
import Institute from './ComponentItems/Pages/Institute';
import Createrooms from './ComponentItems/Pages/Createrooms';
import Viewerooms from './ComponentItems/Pages/Viewrooms';
import Viewusers from './ComponentItems/Pages/Viewusers';
import Home from './ComponentItems/Pages/Home';
import Service from './ComponentItems/Pages/Service';
import Product from './ComponentItems/Pages/Product';
import CreateSlot from './ComponentItems/Pages/CreateSlot';
import Addusertorooms from "./ComponentItems/Pages/Addusertoroom";
import Logout from "./ComponentItems/Pages/Logout";
// import Form from './ComponentItems/Form/Form';

function App() {
  return (
    <Router>
      {/* <div>
        <Link to = "/" className="link"> Home
        </Link>
      </div> */}
      <div className="App">
        <>
            <Routes>
            <Route index element={<Home/>} />
            <Route path='/form' element={<Form/>} />
            <Route path='/institute' element={<Institute/>} />
            <Route path='/sign-up' element={<Signin/>} />
            <Route path='/signup' element={<Signup/>} />

            <Route path='/createuser' element={<Createuser/>} />
            <Route path='/add-users' element={<Addusertorooms/>} />

            <Route path='/createrooms' element={<Createrooms/>} />
            <Route path='/viewerooms' element={<Viewerooms/>} />
            <Route path='/viewusers' element={<Viewusers/>} />

            <Route path='/home' element={<Home/>} />
            <Route path='/service' element={<Service/>} />
            <Route path='/product' element={<Product/>} />

            <Route path='/form' element={<Form/>} />

            <Route path='/CreateSlot' element={<CreateSlot/>} />
            <Route path='/logout' element={<Logout/>} />

            {/* <Route path='/register' element={<Form/>} /> */}
          </Routes>
        </>
      </div>
    </Router>
  );
}
export default App;


