import "./adduses.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { auth, db, storage } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { withAlert  } from 'react-alert'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import  { Toaster } from "react-hot-toast";
// toast.configure();
// import Datatable from "../../components/datatable/Datatable"
import RoomUserDatatable from "./Roomusers";

const Adduser = ({ inputs, title }) => {
  let params = useParams();
  console.log(params.id);
  // const alert = useAlert();

  const [data, setData] = useState({});
  

  const [email, setEmail] = useState(" Non "); //e18068@eng.pdn.ac.lk
  const [idValidity, setIdValidity] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {

    // const fetchData = async () => {
    //   try {
    //     console.log(email);
    //     const docRef = doc(db, "Institutes",email ,"users",params.id);//
    //     const docSnap = await getDoc(docRef);
    //     if (docSnap.exists()) {
    //       setData(docSnap.data());
    //       // console.log("Document data:", docSnap.data());
          
    //     } else {
    //       console.log("No such document!");
    //     }
        
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };


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
    // getDoc();
    // fetchData();

    return () => {
      // unsub();
      // fetchData();
      // getEmail();
    //   getEmail();
    // // getDoc();
    // fetchData();
      
    };
  }, [email ]);


  // useEffect(() => {
  //   const uploadFile = () => {
  //     const name = new Date().getTime() + file.name;

  //     console.log(name);
  //     const storageRef = ref(storage, file.name);
  //     const uploadTask = uploadBytesResumable(storageRef, file);
      

  //     uploadTask.on(
  //       "state_changed",
  //       (snapshot) => {
  //         const progress =
  //           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //         console.log("Upload is " + progress + "% done");
  //         setPerc(progress);
  //         switch (snapshot.state) {
  //           case "paused":
  //             console.log("Upload is paused");
  //             break;
  //           case "running":
  //             console.log("Upload is running");
  //             break;
  //           default:
  //             break;
  //         }
  //       },
  //       (error) => {
  //         console.log(error);
  //       },
  //       () => {
  //         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //           setData((prev) => ({ ...prev, img: downloadURL }));
  //         });
  //       }
  //     );
  //   };
  //   file && uploadFile();
  // }, [file]);


  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  };

  const handleAdd = async (e) => {
    // toast("Wow so easy!");
    e.preventDefault();
    try {
      // const res = await createUserWithEmailAndPassword(
      //   auth,
      //   data.email,
      //   data.password
      // );
      console.log(email);
      console.log(data.userid);
      console.log(email);
      const docRef = doc(db, "Institutes",email ,"users",data.userid);//
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setData(docSnap.data());
        console.log(data);
        setIdValidity(true);
        
      } else {
        
        // alert.show('No such document!')
        console.log("No such document!");
        // toast("Wow so easy!");
        setIdValidity(false);
      }
      if(idValidity){
        await setDoc(doc(db,"Institutes",email ,"rooms",params.id,"Users",data.userid), {
          "id":data.userid,
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
            <RoomUserDatatable/>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Adduser;
