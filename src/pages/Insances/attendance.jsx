import "./roominstances.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { DataGrid } from "@mui/x-data-grid";
import { attendanceTableCol } from "../../datatablesource";
import { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
} from "firebase/firestore";
import { db,auth,rtdb } from "../../Firebase";
import { useParams } from "react-router-dom";
import {  ref,   child, get} from "firebase/database";



const AttendanceDatatable = () => {
    let params = useParams();
  console.log(params.id);
  const [data, setData] = useState([]);
  const [email, setEmail] = useState(" Non "); //e18068@eng.pdn.ac.lk
  // var email;
  

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

      
    


    // const fetchData = async () => {
    //   let list = [];
    //   try {
    //     const querySnapshot = await getDocs(collection(db,"Institutes",email ,"rooms",params.id,"Users"));
    //     querySnapshot.forEach((doc) => {
    //       list.push({ id: doc.id, ...doc.data() });
    //     });
    //     setData(list);
    //     console.log(list);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    getEmail();
    // fetchData();
    // unsub();
    // getEmail();

    // LISTEN (REALTIME)
    console.log(email);
    const unsub = onSnapshot(
      collection(db,"Institutes",email ,"rooms",params.rid,"Instance",params.tid,"Attend"),// "Institutes",email ,
      (snapShot) => {
        let list = [];                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
        console.log(list);
        // ------------
        let reft = ref(rtdb,"/Institutes/e18068@eng/users/10");
        reft.on("value", snapshot => {
        const datat = snapshot.val()
        console.log(datat);
        });
        // ------------
        get(child(rtdb,"/Institutes/e18068@eng/users/10")).then((snapshot) => {
          if (snapshot.exists()) {
            console.log(snapshot.val());
          } else {
            console.log("No data available");
          }
        }).catch((error) => {
          console.error(error);
        });
      },
      (error) => {
        console.log(error);
      }
    );
    // var sleep = ref(rtdb,'/Institutes/e18068@eng/users/');
    // sleep.on('value', function(snapshot) {
    //   snapshot.forEach((childSnapshot) => {
    //   console.log(childSnapshot.val().sleep);
    //   });
    // });
    getEmail();
    unsub();
    

    return () => {
        getEmail();
        unsub();
      // fetchData();
    //   getEmail();
      
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
