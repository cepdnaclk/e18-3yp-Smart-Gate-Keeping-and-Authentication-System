// import "./roominstances.scss";
// import { DataGrid } from "@mui/x-data-grid";
// import { userColumns, userRows, roomUsersTableCol , roominstasnceTableCol } from "../../datatablesource";
// import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import {
//   collection,
//   getDocs,
//   deleteDoc,
//   doc,
//   onSnapshot,
// } from "firebase/firestore";
// import { db,auth } from "../../firebase";
// import { useParams } from "react-router-dom";

// const RoomInstanceesDatatable = () => {
//     let params = useParams();
  
//   const [data, setData] = useState([]);
//   const [email, setEmail] = useState(" Non "); //e18068@eng.pdn.ac.lk
//   const [roomid, setRoomid] = useState(" ");
//   // var email;
//   const data1 = { name: 'John', age: 30 };
  

  

//   useEffect(() => {
//     setRoomid(params.id);
//     console.log(roomid);
//     const getEmail=async()=>{
//       auth.onAuthStateChanged(function(user) {
//         try{
//           if (user) {
//             // User is signed in.
//             // email = user.email.toString();
//             console.log(email);  // This will print the user's email to the console.
//             // return email;
//             setEmail(user.email.toString());
//           }
//         }
//          catch (err){
//           console.log(err);
//          }
//       });
//     };
//     // console.log(email);

      
    


//     // const fetchData = async () => {
//     //   let list = [];
//     //   try {
//     //     const querySnapshot = await getDocs(collection(db,"Institutes",email ,"rooms",params.id,"Users"));
//     //     querySnapshot.forEach((doc) => {
//     //       list.push({ id: doc.id, ...doc.data() });
//     //     });
//     //     setData(list);
//     //     console.log(list);
//     //   } catch (err) {
//     //     console.log(err);
//     //   }
//     // };
//     getEmail();
//     // fetchData();
//     // unsub();
//     // getEmail();

//     // LISTEN (REALTIME)
//     console.log(email);
//     const unsub = onSnapshot(
//       collection(db,"Institutes",email ,"rooms",params.id,"Instance"),// "Institutes",email ,
//       (snapShot) => {
//         let list = [];                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
//         snapShot.docs.forEach((doc) => {
//           list.push({ id: doc.id, ...doc.data() });
//         });
//         setData(list);
//         console.log(list);
//       },
//       (error) => {
//         console.log(error);
//       }
//     );

//     return () => {
//         getEmail();
//         unsub();
//       // fetchData();
//     //   getEmail();
      
//     };
//   }, [email]);

// //   const handleDelete = async (id) => {
// //     try {
// //       console.log(id)
// //       // await deleteDoc(doc(db, "users", id));
// //       // setData(data.filter((item) => item.id !== id));
// //     } catch (err) {
// //       console.log(err);
// //     }
// //   };

//   const actionColumn = [
//     {
//       field: "action",
//       headerName: "Action",
//       width: 200,
//       renderCell: (params) => {
//         return (
//           <div className="cellAction">
//             <Link to={{ pathname: "/attendance/".concat(roomid).concat("/").concat(params.row.id) }} style={{ textDecoration: "none" }} >
//               <div className="viewButton"
//               >View Attendence</div>
//             </Link>
//             {/* <div
//               className="deleteButton"
//               onClick={() => handleDelete(params.row.id)}
//             >
//               Add Rooms
//             </div> */}
//           </div>
//         );
//       },
//     },
//   ];
//   return (
//     <div className="datatable">
//       <div className="datatableTitle">
//         Instances list for Room
//         {/* <Link to="/users/new" className="link">
//           Add New
//         </Link> */}
//       </div>
//       <DataGrid
//         className="datagrid"
//         rows={data}
//         columns={roominstasnceTableCol.concat(actionColumn)}
//         pageSize={9}
//         rowsPerPageOptions={[9]}
//         // checkboxSelection
//       />
//     </div>
//   );
// };

// export default RoomInstanceesDatatable;
