import React from 'react';
import './App.css';
// import {useNavigate} from 'react-router-dom';
// import Navbar from './Institutenavigationbar';
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
// import ImageButton1 from '../Button/ImageButton';
//import Createuser from './Createuser';

function Institute() {
  // const navigate = useNavigate();
  // const navigatetocreateuser = () => {
  //   navigate('./Createuser');
  // };
  return (

    // <Navbar />
    <>
    <Navbar />
    {/* <ImageButton1/> */}
    <h1>Welcome Sasip Institute</h1>
    <br></br>
    <p> through the above navigatoin bar you can</p>
    <br></br><br></br>
    <h2>register A User</h2>
    <p>You just wanna to do fill the for with the user details and then when registring the user's finger print type basic user detail(userid and password) there</p>
    <br></br><br></br>

    <h2>View user details</h2>
    <p>Through this admin will be able to  view their users activities such as the rooms they rgistered , their attendece for each rooms ... </p>
    <p>As well as through this admin will be able to add </p>

    <br></br><br></br>
    <h2>Create room</h2>
    <p>Though this admin will be able to create rooms </p>

    <br></br><br></br>
    <h2>View room details</h2>
    <p>Through this admin will be able to view the all room that their created and the users that have registered to each and every room</p>
    <p> As wel as their can create a Instace(time slot) to this and their uer will attend to those time slots</p>
    <p>And they will be able to see the attendance History through this</p>
    </>

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


// import React from 'react';
// import Createrooms from './Createrooms';
// import Createuser from './Createuser';
// import Viewrooms from './Viewrooms';
// import Viewusers from './Viewusers';

// function ImageButton(props) {
  
//   return (
//     <button style={{border: '10px solid black', width: '500px', height: '500px', fontsize: '150px', padding:'20px'}} >
//       <img src={props.src} alt={props.alt} />
//       {props.text}
//     </button>
//   );
// }

// function Institute() {
//   const navigate = useNavigate();
//   const navigatenewuser = () => {
//     navigate('./Createrooms');
//   };
//   const navigatenewroom = () => {
//     navigate('./');
//   };
//   const navigateviewuser = () => {
//     navigate('./');
//   };
//   const navigateviewroom = () => {
//     navigate('./Viewusers');
//   };
//   return (
//     <div>
//       <h1>INSTITUTE PAGE</h1>
//       <ImageButton src="./addUser.jpg" alt="Image 1" text="ADD USERS" onClick={navigatenewuser} />
//       <ImageButton src="src/ComponentItems/Button/button_images/addUser.jpg" alt="Image 2" text="VIEW USERS" onClick={navigateviewuser}/>
//       <ImageButton src="src/ComponentItems/Button/button_images/addUser.jpg" alt="Image 3" text="ADD ROOM" onClick={navigatenewroom}/>
//       <ImageButton src="src/ComponentItems/Button/button_images/addUser.jpg" alt="Image 4" text="VIEW ROOMS" onClick={navigateviewroom} />
//     </div>
//   );
// }

// export default Institute;



