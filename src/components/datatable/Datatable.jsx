import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userTableCol } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  
} from "firebase/firestore";
import { db,auth } from "../../firebase";

const Datatable = () => {
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
        const querySnapshot = await getDocs(collection(db,"Institutes",email ,"users"));
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



  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={{ pathname: "/singleview/".concat(params.row.id) }} style={{ textDecoration: "none" }} >
              <div className="viewButton"
              >View</div>
            </Link>
            {/* <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Add Rooms
            </div> */}
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userTableCol.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        // checkboxSelection
      />
    </div>
  );
};

export default Datatable;
