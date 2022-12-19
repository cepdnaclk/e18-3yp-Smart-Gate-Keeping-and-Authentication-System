import React from 'react';
import './App.css';
import {useNavigate} from 'react-router-dom';
//import Navbar from './Institutenavigationbar';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages';
// import About from './pages/about';
// import Events from './pages/events';
// import AnnualReport from './pages/annual';
// import Teams from './pages/team';
// import Blogs from './pages/blogs';
// import SignUp from './pages/signup';
// import Createrooms from './Createrooms';
// import Createuser from './Createuser';
// import Viewrooms from './Viewrooms';
// import Viewusers from './Viewusers';
import Navbar from './Navbarinstitute';
//import Createuser from './Createuser';

function Institute() {
  const navigate = useNavigate();
  const navigatetocreateuser = () => {
    navigate('./Createuser');
  };
  return (

    <Navbar/>
    // <Router>
    //   <Navbar />
    //   <Routes>
    //     {/* <Route path='/' exact component={Home} /> */}
    //     <Route path='/Createrooms' component={Createrooms} />
    //     <Route path='/Createuser' component={Createuser} />
    //     <Route path='/Viewrooms' component={Viewrooms} />
    //     <Route path='/Viewusers' component={Viewusers} />
       
    //   </Routes>
    // </Router>
  );
}
  
export default Institute;



