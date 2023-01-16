// import "./new.scss";

import {  useEffect, useState } from "react";
import {
  doc,
  getDoc,
  updateDoc 
} from "firebase/firestore";
import { auth, db } from "../../Firebase";
import { useNavigate } from "react-router-dom";

const New = ({ inputs, title }) => {
  const [data, setData] = useState({});
  const [predata, setPreData] = useState({});
  const navigate = useNavigate();
  var email;
  useEffect(() => {
    fetchData();
    
  });
  auth.onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      email = user.email;
      // console.log(email);  // This will print the user's email to the console.
    } else {
      // No user is signed in.
    }
  });
  
  const fetchData = async () => {
    try {
      console.log(email);
      const docRef = doc(db, "Institutes",email);//
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setPreData(docSnap.data());
        console.log("Document data:", predata);
        // console.log(data.userid);
        // console.log(data.Name);
        // console.log(data.email);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await updateDoc(doc(db,"Institutes",email), {
        ...data,
      });
      console.log(data);
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="new">
      {/* <Sidebar /> */}
      <div className="newContainer">
        {/* <Navbar /> */}
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
                    placeholder={predata.name}
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

export default New;
