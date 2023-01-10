import "./roomusers.scss";
import { DataGrid } from "@mui/x-data-grid";
import {roomUsersTableCol } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
} from "firebase/firestore";
import { db,auth } from "../../firebase";
import { useParams } from "react-router-dom";

const RoomUserDatatable = () => {
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
      collection(db,"Institutes",email ,"rooms",params.id,"Users"),// "Institutes",email ,
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
        console.log(list);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
        getEmail();
        unsub();
      // fetchData();
    //   getEmail();
      
    };
  }, [email,params.id]);

//   const handleDelete = async (id) => {
//     try {
//       console.log(id)
//       // await deleteDoc(doc(db, "users", id));
//       // setData(data.filter((item) => item.id !== id));
//     } catch (err) {
//       console.log(err);
//     }
//   };

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
        Users Already Added
        {/* <Link to="/users/new" className="link">
          Add New
        </Link> */}
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={roomUsersTableCol.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        // checkboxSelection
      />
    </div>
  );
};

export default RoomUserDatatable;
