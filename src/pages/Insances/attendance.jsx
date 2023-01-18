import "./roominstances.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { DataGrid } from "@mui/x-data-grid";
import { attendanceTableCol } from "../../datatablesource";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
} from "firebase/firestore";
import { db,auth } from "../../Firebase";
import { useParams } from "react-router-dom";



const AttendanceDatatable = () => {
    let params = useParams();
  console.log(params.id);
  const [data, setData] = useState([]);
  const [email, setEmail] = useState(" Non "); //e18068@eng.pdn.ac.lk
  // var email;
  // let recordes=[];
  

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
    // LISTEN (REALTIME)
    console.log(email); // e18068@eng.pdn.ac.lk
    console.log(params.rid);
    console.log(params.tid);
    // const unsub = onSnapshot(
    //   collection(db,"Institutes"),// db,"Institutes",email ,"rooms",params.rid,"Instance",params.tid,"Attend"
    //   (snapShot) => {
    //     let list = [];                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    //     snapShot.docs.forEach((doc) => {
    //       list.push({ id: doc.id, ...doc.data()});
    //     });
    //     setData(list);
    //     console.log("========================");
    //     console.log(list);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
    // LISTEN (REALTIME)
    // const unsub = onSnapshot(
    //   collection(db,"Institutes",email ,"rooms",params.rid,"Instance",params.tid,"Attend"),
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
    const fetchData = async () => {
      
      try {
        let list = [];
        const querySnapshot = await getDocs(collection(db,"Institutes",email ,"rooms",params.rid,"Instance",params.tid,"Attend"));
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
    // unsub();
    fetchData();
    
    return () => {
        // unsub();
      
    };
  }, [email,params.rid , params.tid]);

//   const handleDelete = async (id) => {
//     try {
//       console.log(id)
//       // await deleteDoc(doc(db, "users", id));
//       // setData(data.filter((item) => item.id !== id));
//     } catch (err) {
//       console.log(err);
//     }
//   };

 
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="datatable">
      <div className="datatableTitle">
        Attendence list for room {params.rid} and instance {params.tid}
        {/* <Link to="/users/new" className="link">
          Add New
        </Link> */}
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={attendanceTableCol}
        pageSize={9}
        rowsPerPageOptions={[9]}
        // checkboxSelection
      />
    </div>
    </div>
</div>
    
  );
};

export default AttendanceDatatable;
