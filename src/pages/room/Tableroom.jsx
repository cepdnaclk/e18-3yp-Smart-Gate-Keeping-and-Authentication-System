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

import "./roomdatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import {  roomTableCol } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  // onSnapshot,
} from "firebase/firestore";
import { auth , db } from "../../Firebase";
const Roomdatatable = () => {
  const [data, setData] = useState([]);
  const [email, setEmail] = useState(" Non "); //e18068@eng.pdn.ac.lk
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
      let list = [];
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
    fetchData();
    getEmail();
    // unsub();
    return () => {
      // unsub();
      fetchData();
      getEmail();
    };
  }, [email]);

  // const handleDelete = async (id) => {
  //   try {
  //     // await deleteDoc(doc(db, "rooms", id));
  //     // setData(data.filter((item) => item.id !== id));
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link  to={{  pathname: "/adduser/".concat(params.row.id) }} style={{ textDecoration: "none" }}> 
            {/* to="/users/test" */}
              <div className="viewButton" 
              // onClick={navigateInstitutepage}
              >Add Users</div>
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
      <div className="datatableTitle">
        Add New Room
        <Link to="/newroom" className="link">
          Add New
        </Link>
      </div>
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

export default Roomdatatable;
