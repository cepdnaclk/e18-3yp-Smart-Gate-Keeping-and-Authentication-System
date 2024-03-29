// import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import {  useState } from "react";
import {  
  doc,
  setDoc,
} from "firebase/firestore";
import { auth, db } from "../../Firebase";
import { useNavigate } from "react-router-dom";

const New = ({ inputs, title }) => {
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [errormsg, setErrormsg] = useState("");

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
    if (!data.email) {
      // errors.EmailId = 'Please Enter Email ID';
      setErrormsg( 'Please Enter Email ID');
      console.log('Please Enter Email ID');
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
      setErrormsg( 'Invalid email address');
      setError(true);
      console.log('Invalid email address');
    }
    else{
      console.log('good email address');
      e.preventDefault();
      try {
        await setDoc(doc(db,"Institutes",email ,"users",data.userid), {
          ...data,
        });
        console.log(data);
        navigate(-1)
      } catch (err) {
        console.log(err);
      }
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
              {error && <span>{errormsg}</span>}
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
