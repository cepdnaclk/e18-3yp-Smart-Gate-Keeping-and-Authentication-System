import "./devicedatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { deviceTableCol} from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
} from "firebase/firestore";
import { db,auth } from "../../Firebase";

const Devicedatatable = () => {
  const [data, setData] = useState([]);
  const [email, setEmail] = useState(" Non "); //e18068@eng.pdn.ac.lk
  // var email;
  // const data1 = { name: 'John', age: 30 };

  

  useEffect(() => {

    const getEmail=async()=>{
      auth.onAuthStateChanged(function(user) {
        try{
          if (user) {
            // User is signed in.
            // email = user.email.toString();
            console.log(email);  // This will print the user's email to the console.
            // return email;
            setEmail(user.email.toString());
          }
        }
         catch (err){
          console.log(err);
         }
      });
    };
    // console.log(email);

      
    


    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db,"Institutes",email ,"devices"));
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
        console.log(list);
      } catch (err) {
        console.log(err);
      }
    };
    getEmail();
    fetchData();
    getEmail();

    // LISTEN (REALTIME)
    // console.log(email);
    // const unsub = onSnapshot(
    //   collection(db,"Institutes","e18068@eng.pdn.ac.lk" ,"users"),// "Institutes",email ,
    //   (snapShot) => {
    //     let list = [];
    //     snapShot.docs.forEach((doc) => {
    //       list.push({ id: doc.id, ...doc.data() });
    //     });
    //     setData(list);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );

    return () => {
      // unsub();
      // fetchData();
      // getEmail();
      
    };
  }, [email]);

  

 
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New Device
        <Link to="/newdevice" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={deviceTableCol}
        pageSize={9}
        rowsPerPageOptions={[9]}
        // checkboxSelection
      />
    </div>
  );
};

export default Devicedatatable;
