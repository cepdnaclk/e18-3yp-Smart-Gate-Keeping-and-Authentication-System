// import "./newroom.scss"
// import Sidebar from "../../components/sidebar/Sidebar"
// import Navbar from "../../components/navbar/Navbar"
// import Datatable from "../../components/datatable/Datatable"

// const Newroom = () => {
//   return (
//     <div className="list">
//       <Sidebar/>
//       <div className="listContainer">
//         <Navbar/>
//         <Datatable/>
//       </div>
//     </div>
//   )
// }

// export default Newroom

import "./instanceroomdatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import {  roomTableCol } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  // onSnapshot,
} from "firebase/firestore";
import { auth , db  } from "../../Firebase";
// import { onValue, sref } from "firebase/database";

const Instanceroomdatatable = () => {
  const [data, setData] = useState([]);
  const [email, setEmail] = useState(" Non "); //e18068@eng.pdn.ac.lk
  // const [projects, setProjects] = useState([]);
  let list = [];
  // var email;
  // auth.onAuthStateChanged(function(user) {
  //   if (user) {
  //     // User is signed in.
  //     email = user.email;
  //     console.log(email);  // This will print the user's email to the console.
  //   } else {
  //     // No user is signed in.
  //   }
  // });


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
    const fetchData = async () => {
      
      try {
        const querySnapshot = await getDocs(collection(db,"Institutes",email ,"rooms"));
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
        console.log(list);
      } catch (err) {
        console.log(err);
      }
    };
    // const query = ref(rtdb, "projects");
    // return onValue(query, (snapshot) => {
    //   const data = snapshot.val();

    //   if (snapshot.exists()) {
    //     Object.values(data).map((project) => {
    //       setProjects((projects) => [...projects, project]);
    //     });
    //   }
    // });
    
    // LISTEN (REALTIME)
    // const unsub = onSnapshot(
    //   collection(db,"Institutes",email ,"rooms"),
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
    getEmail();
    fetchData();
    
    // unsub();
    return () => {
      // unsub();
      // fetchData();
      // getEmail();
    };
  },);//[email]

  

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link  to={{  pathname: "/addinstance/".concat(params.row.id) }} style={{ textDecoration: "none" }}> 
            {/* to="/users/test" */}
              <div className="viewButton" 
              // onClick={navigateInstitutepage}
              >View Instances</div>
            </Link>
            {/* <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Add Users
            </div> */}
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      {/* <div className="datatableTitle">
        Add New Room
        <Link to="/newroom" className="link">
          Add New
        </Link>
      </div> */}
      <DataGrid
        className="datagrid"
        rows={data}
        columns={roomTableCol.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        // checkboxSelection
      />
    </div>
  );
};

export default Instanceroomdatatable;
