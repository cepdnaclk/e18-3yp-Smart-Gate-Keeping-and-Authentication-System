import "./roominstances.scss";
import { DataGrid } from "@mui/x-data-grid";
import {roominstasnceTableCol } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
} from "firebase/firestore";
import { db,auth } from "../../Firebase";
import { useParams } from "react-router-dom";

const RoomInstanceesDatatable = () => {
    let params = useParams();
  
  const [data, setData] = useState([]);
  const [email, setEmail] = useState(" Non "); //e18068@eng.pdn.ac.lk
  const [roomid, setRoomid] = useState(" ");
  // var email;  

  

  useEffect(() => {
    setRoomid(params.id);
    console.log(roomid);
    const getEmail=async()=>{
      auth.onAuthStateChanged(function(user) {
        try{
          if (user) {
            // return email;
            setEmail(user.email.toString());
          }
        }
         catch (err){
          console.log(err);
         }
      });
    };

      
    


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

    // LISTEN (REALTIME)
    console.log(email);
    const unsub = onSnapshot(
      collection(db,"Institutes",email ,"rooms",params.id,"Instance"),// "Institutes",email ,
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
  }, [email,params.id,roomid]);

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={{ pathname: "/attendance/".concat(roomid).concat("/").concat(params.row.id) }} style={{ textDecoration: "none" }} >
              <div className="viewButton"
              >View Attendence</div>
            </Link>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Instances list for Room
        {/* <Link to="/users/new" className="link">
          Add New
        </Link> */}
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={roominstasnceTableCol.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        // checkboxSelection
      />
    </div>
  );
};

export default RoomInstanceesDatatable;
