import "./addinstance.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import {

  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { auth, db } from "../../Firebase";
import { useParams } from "react-router-dom";

import RoomInstanceesDatatable from "./Roominstances";
// import { onValue, ref , set  } from "firebase/database";

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import  { Toaster } from "react-hot-toast";
// toast.configure();
// import Datatable from "../../components/datatable/Datatable"
// import RoomUserDatatable from "./Roomusers";

const Addinstance = ({ inputs, title }) => {
  let params = useParams();
  console.log(params.id);
  // const alert = useAlert();

  const [data, setData] = useState({});
  

  const [email, setEmail] = useState(" Non "); //e18068@eng.pdn.ac.lk
  const [idValidity, setIdValidity] = useState(false);

  useEffect(() => {

    const getEmail=async()=>{
      auth.onAuthStateChanged(function(user) {
        try{
          if (user) {
            setEmail(user.email.toString());
          }
        }
         catch (err){
          console.log(err);
         }
      });
    };

    


    getEmail();
    handleAdd();
  
    return () => {
      // unsub();
      // fetchData();
      // getEmail();
    //   getEmail();
    // // getDoc();
    // fetchData();
      
    };
  }, [email,data ]);


  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  };

  const handleAdd = async (e) => {
    // toast("Wow so easy!");
    e.preventDefault();
    try {
     
      console.log(email);
      console.log(data.instanceid);
      const docRef = doc(db, "Institutes",email ,"rooms",params.id);//
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setData(docSnap.data());
        console.log("=========");
        console.log(data);
        
        // setIdValidity(true);// "Institutes/"+email +"/rooms/"+params.id+"/Instance/"+data.instanceid
        // set(ref(rtdb,'Institutes/users/instances/'+data.instanceid+"/"), {// rtdb, 'users/' + data.instanceid
        //   ...data,
        // });
        
      } else {
        
        // alert.show('No such document!')
        console.log("No such document!");
        // toast("Wow so easy!");
        setIdValidity(false);
      }
      if(idValidity){
        console.log(data);
        await setDoc(doc(db,"Institutes",email ,"rooms",params.id,"Instance",data.instanceid), {
          ...data,
          // "id":data.instanceid,
          // "name": data.instancename,
          // timeStamp: serverTimestamp(),
        });
        
      }
      
    } catch (err) {
      console.log(err);
    }
    console.log(idValidity);
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
          <div className="left">
          </div>
          <div className="right">
            <form onSubmit={handleAdd}>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    onChange={handleInput}
                  />
                </div>
              ))}
              <p></p>
              <button type="submit">
                Submit
              </button>
            </form>
            <div>
            <RoomInstanceesDatatable/>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Addinstance;
