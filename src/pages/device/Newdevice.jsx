import "./newdevice.scss"

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import {  useState } from "react";
import {  
  doc,
  setDoc,
} from "firebase/firestore";
import { auth, db } from "../../firebase";
import { useNavigate } from "react-router-dom";

const Newdevice = ({ inputs, title }) => {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  var email;
  auth.onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      email = user.email;
      // console.log(email);  // This will print the user's email to the console.
    } else {
      // No user is signed in.
    }
  });


  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await setDoc(doc(db,"Institutes",email ,"devices",data.deviceid), {
        ...data,
      });
      console.log(data);
      navigate(-1);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          {/* <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div> */}
          <div className="right">
            <form onSubmit={handleAdd}>
              

              {inputs.map((input) => (
                <div className="formInput" key={input.id }>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    onChange={handleInput}
                  />
                </div>
              ))}
              <button type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newdevice;
