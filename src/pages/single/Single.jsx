import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
// import List from "../../components/table/Table";
// import { useProps } from 'react';
import { useParams } from "react-router-dom"; 
import { useEffect, useState } from "react";
import {
  
  doc,
  getDoc,
} from "firebase/firestore";
import { db,auth } from "../../Firebase";
import 'firebase/firestore';
// import {  getDoc } from "firebase/firestore";

const Single =  () => {
  let params = useParams();
  console.log(params.id);

  const [email, setEmail] = useState(" Non "); //e18068@eng.pdn.ac.lk
  // var email;
  const [data, setData] = useState("");
  const [name, setName] = useState("User Name");



  useEffect(() => {

    const fetchData = async () => {
      try {
        console.log(email);
        const docRef = doc(db, "Institutes",email ,"users",params.id);//
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setData(docSnap.data());
          console.log("Document data:", docSnap.data());
          // console.log(data.userid);
          setName(data.username);
          console.log(data.username);
          console.log(data.birthday);
          console.log(data.email);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
        // const querySnapshot = await getDocs(collection(db,"Institutes",email ,"users"));
        // querySnapshot.forEach((doc) => {
        //   list.push({ id: doc.id, ...doc.data() });
        // });
        // setData(list);
        // console.log(list);
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
  }, [email,name ,data.birthday,data.email,data.username,params.id]);


  // const props = useProps();
  // console.log("single");
  // console.log(props,"props");
  // console.log(location,"location");
  // const data = location.state?.data;
  // console.log(data);

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information about : {data.userid} </h1>
            <div className="item">
             
              <div className="details">
                <h1 className="itemTitle">{data.username}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{data.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Birthday:</span>
                  <span className="itemValue">{data.birthday}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">User id:</span>
                  <span className="itemValue">
                  {data.userid}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            {/* <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" /> */}
          </div>
        </div>
        {/* <div className="bottom">
        <h1 className="title">Last </h1>
          <List/>
        </div> */}
      </div>
    </div>
  );
};

export default Single;
