import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
// import InsertChartIcon from "@mui/icons-material/InsertChart";
// import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { useEffect, useState } from "react";
import {

  doc,
  getDoc,
} from "firebase/firestore";
import { db,auth } from "../../firebase";
import 'firebase/firestore';
const Sidebar = () => {
  const [email, setEmail] = useState(" Non "); //e18068@eng.pdn.ac.lk
  const [name , setName] = useState("name");
  // var email;
  const [data, setData] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(email);
        const docRef = doc(db, "Institutes",email );//
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setData(docSnap.data());
          console.log("Document data:", docSnap.data());
          // console.log(data.userid);
          setData(docSnap.data());
          setName(data.Name.toUpperCase());
          console.log(data.Name);
          // console.log(data.email);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }

      } catch (err) {
        console.log(err);
      }
    };


    const getEmail=async()=>{
      auth.onAuthStateChanged(function(user) {
        try{
          if (user) {
            // User is signed in.
            // email = user.email.toString();
            // console.log(email);  // This will print the user's email to the console.
            // return email;
            setEmail(user.email.toString());
          }
        }
         catch (err){
          console.log(err);
         }
      });
    };


    getEmail();
    // getDoc();
    fetchData();

    return () => {
      // unsub();
      // fetchData();
      // getEmail();
    //   getEmail();
    // // getDoc();
    // fetchData();
      
    };
  }, [email,name,data.Name]);
  const signout = () => {
    
  };

  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">{name}</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/devicelist" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Devices</span>
            </li>
          </Link>
          <Link to="/roomlist" style={{ textDecoration: "none" }}>
          <li>
            <CreditCardIcon className="icon" />
            <span>Rooms</span>
          </li>
          </Link>
          <Link to="/instance" style={{ textDecoration: "none" }}>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Instances</span>
          </li>
          </Link>
          {/* <p className="title">USEFUL</p> */}
          {/* <li>
            <InsertChartIcon className="icon" />
            <span>Stats</span>
          </li> */}
          {/* <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li> */}
          <p className="title">SERVICES</p>
          <Link to="/users/new" style={{ textDecoration: "none" }}>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>New Users</span>
          </li>
          </Link>
          <Link to="/newroom" style={{ textDecoration: "none" }}>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>New Rooms</span>
          </li>

          </Link>
          
          {/* <li>
            <SettingsApplicationsIcon className="icon" />
            <span>New Instances</span>
          </li> */}
          <p className="title">USER</p>
          <Link to="/details" style={{ textDecoration: "none" }}>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          </Link>
          
          <li>
            <ExitToAppIcon className="icon" />
            <span onClick={signout}>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
