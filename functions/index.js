const functions = require("firebase-functions");

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


/**
 * IMPORTANT
 */
// basic url
// http://127.0.0.1:5001/co300project/us-central1/app



const admin = require("firebase-admin");

var serviceAccount = require("./service.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://co300project-default-rtdb.firebaseio.com"
});

const express = require("express");
const cors = require("cors");
const { response } = require("express");
const app = express();

app.use(cors({ origin: true }));
const db = admin.firestore();
// Routes
app.get("/", (req, res) => {
  return res.status(200).send("Cloud function added");
});
// Institute API 's
//create Institute with NAME IID 
app.post("/api/createInstitute/:iid", (req, res) => {
  (async () => {
    try {
      await db.collection("Institute").doc(`/${req.params.iid}/`).create({
        iid: req.params.iid,
        name: req.body.name,
        // uid : req.params.uid,
        
      });

      return res.status(200).send({ status: "Success", msg: "Data Saved" });
    } catch (error) {
      console.log(error);
      res.status(500).send({ status: "Failed", msg: error });
    }
  })();
});
 //  checking IID have already used
//-------------------------------------------------------------------------------------------------------------------
 
//Create Users for perticular Institiute (inputs : Institute Id , User id)
 app.post("/api/:iid/createuser/:uid", (req, res) => {
  (async () => {
    try {
      await db.collection("Institute").doc(`/${req.params.iid}/`).collection("Users").doc(`/${req.params.uid}/`).create({
        iid: req.params.iid,
        name: req.body.name,
        uid : req.params.uid,
        email: req.body.email,
        birthday : req.body.birthday,
        password: req.body.password
        
      });
      return res.status(200).send({ status: "Success", msg: "Data Saved" });
    } catch (error) {
      console.log(error);
      res.status(500).send({ status: "Failed", msg: error });
    }
  })();
});

// get all users for perticular Institute
app.get("/api/:iid/getallusers", (req, res) => {
  (async () => {
    try {
      let query = db.collection("Institute").doc(`/${req.params.iid}/`).collection("Users");
      let response = [];

      await query.get().then((data) => {
        let docs = data.docs; // query results

        docs.map((doc) => {
          const selectedData = {
            uid:  doc.data().uid,
            name: doc.data().name,
          };
          response.push(selectedData);
        });
        return response;
      });
      if(response==null){
        return res.status(100).send({ status: "Success", data: "no users in the insititute" });
      }
      if(response==[]){
        return res.status(100).send({ status: "Success", data: "no users in the insititute" });
      }
      
      return res.status(200).send({ status: "Success", data: response });
    } catch (error) {
      console.log(error);
      res.status(500).send({ status: "Failed", msg: error });
    }
  })();
});

// get specific user details from spesific Institute
app.get("/api/:iid/checkuser/:uid", (req, res) => {
  (async () => {
    try {
      const reqDoc = db.collection("Institute").doc(`/${req.params.iid}/`).collection("Users").doc(`/${req.params.uid}/`);
      let userDetail = await reqDoc.get();
      let response = userDetail.data();
      console.log(response);
      if(response==null){
        return res.status(100).send({ status: "Success", data: "no such user" });
      }

      return res.status(200).send({ status: "Success", data: response });
    } catch (error) {
      console.log(error);
      res.status(500).send({ status: "Failed", msg: error });
    }
  })();
});

// delete specific user details from spesific Institute
app.delete("/api/:iid/delete/:uid", (req, res) => {
  (async () => {
    try {
      const reqDoc = db.collection("Institute").doc(`/${req.params.iid}/`).collection("Users").doc(`/${req.params.uid}/`);
      await reqDoc.delete();
      return res.status(200).send({ status: "Success", msg: "Data Removed" });
    } catch (error) {
      console.log(error);
      res.status(500).send({ status: "Failed", msg: error });
    }
  })();
});

// update specific user details from spesific Institute
app.put("/api/:iid/updateuser/:uid", (req, res) => {
  (async () => {
    try {
      const reqDoc =  db.collection("Institute").doc(`/${req.params.iid}/`).collection("Users").doc(`/${req.params.uid}/`);
      await reqDoc.update({
        name: req.body.name,
        uid: req.body.uid,
      });
      return res.status(200).send({ status: "Success", msg: "Data Updated" });
    } catch (error) {
      console.log(error);
      res.status(500).send({ status: "Failed", msg: error });
    }
  })();
});

//====================ROOMS===========================================================================
/**
 * # Create rooms
     - inputs: IId , RID
 */
app.post("/api/:iid/createroom/:rid", (req, res) => {
  (async () => {
    try {
      await db.collection("Institute").doc(`/${req.params.iid}/`).collection("Rooms").doc(`/${req.params.rid}/`).create({
        rid: req.params.rid
      });
      return res.status(200).send({ status: "Success", msg: "Data Saved" });
    } catch (error) {
      console.log(error);
      res.status(500).send({ status: "Failed", msg: error });
    }
  })();
});

// delete room in spesific Institute
app.delete("/api/:iid/deleteroom/:rid", (req, res) => {
  (async () => {
    try {
      const reqDoc = db.collection("Institute").doc(`/${req.params.iid}/`).collection("Rooms").doc(`/${req.params.rid}/`);
      await reqDoc.delete();
      return res.status(200).send({ status: "Success", msg: "Data Removed" });
    } catch (error) {
      console.log(error);
      res.status(500).send({ status: "Failed", msg: error });
    }
  })();
});

/**
 * # (Register) Asign students to rooms -> Did not checked
     - inputs IID , RID , UID 
     - need the disc. about the room in the body <---------------------------
     - 
 */  
     app.post("/api/:iid/:rid/roomassign/:uid", (req, res) => {
      (async () => {
        try {
          await db.collection("Institute").doc(`/${req.params.iid}/`).collection("Rooms").doc(`/${req.params.rid}/`).collection("assigned").doc(`/${req.params.uid}/`).create({
            // rid: req.params.rid,
            uid: req.params.uid
          });
          return res.status(200).send({ status: "Success", msg: "Data Saved" });
        } catch (error) {
          console.log(error);
          res.status(500).send({ status: "Failed", msg: error });
        }
      })();
    });

    // delete user from room in spesific Institute
    app.delete("/api/:iid/:rid/deletefromroom/:uid", (req, res) => {
      (async () => {
        try {
          const reqDoc = db.collection("Institute").doc(`/${req.params.iid}/`).collection("Rooms").doc(`/${req.params.rid}/`).collection("assigned").doc(`/${req.params.uid}/`);
          await reqDoc.delete();
          return res.status(200).send({ status: "Success", msg: "Data Removed" });
        } catch (error) {
          console.log(error);
          res.status(500).send({ status: "Failed", msg: error });
        }
      })();
    });

    // read specific room in institiute 
    // get
    app.get("/api/:iid/checkroom/:rid", (req, res) => {
      (async () => {
        try {
          const reqDoc = db.collection("Institute").doc(`/${req.params.iid}/`).collection("Rooms").doc(`/${req.params.rid}/`);
          let userDetail = await reqDoc.get();
          let response = userDetail.data();
          console.log(response);
          if(response==null){
            return res.status(100).send({ status: "Success", data: "no such room" });
          }

          return res.status(200).send({ status: "Success", data: response });
        } catch (error) {
          console.log(error);
          res.status(500).send({ status: "Failed", msg: error });
        }
      })();
    });

//============================================================================================


//=========For Instance===================================================================================
/**
 * For Attendance
    # Create a Instance/Time (like a day or time)
     - inputs: TID , RID , IID 
 */
     app.post("/api/:iid/instance/:rid/:tid", (req, res) => {
      (async () => {
        try {
          await db.collection("Institute").doc(`/${req.params.iid}/`).collection("Rooms").doc(`/${req.params.rid}/`).collection("Instance").doc(`/${req.params.tid}/`).create({
            tid:req.params.rid,
            // today:"day"
            today:req.body.today,
            // time:req.body.time
          });
          
          return res.status(200).send({ status: "Success", msg: "Data Saved" });
        } catch (error) {
          console.log(error);
          res.status(500).send({ status: "Failed", msg: error });
        }
      })();
    });

/**
 * # Users coming to Instance (Attend)
    - inputs: TID , RID ,IID , UIDs ,currenttime , verificatoin mode , verificatoin data
 */
    app.post("/api/:iid/room/:rid/instance/:tid/user/:uid/attend", (req, res) => {
      (async () => {
        try {
          await db.collection("Institute").doc(`/${req.params.iid}/`).collection("Rooms").doc(`/${req.params.rid}/`).collection("Instance").doc(`/${req.params.tid}/`).collection("Attend").doc(`/${req.params.uid}/`).create({
            verificationmode: req.body.verificationmode,
            currenttime: req.body.currenttime,
            verificatoindata: req.body.verificatoindata,
            uid:req.params.uid,
          });
          if(response==null){
            return res.status(100).send({ status: "Success", data: "no such Instance in this room" });
          }
          if(response==[]){
            return res.status(100).send({ status: "Success", data: "no such Instance in this room" });
          }
          return res.status(200).send({ status: "Success", msg: "Data Saved" });
        } catch (error) {
          console.log(error);
          res.status(500).send({ status: "Failed", msg: error });
        }
      })();
    });

// delete specific instane from room in spesific Institute
app.delete("/api/:iid/instance/:rid/delete/:tid", (req, res) => {
  (async () => {
    try {
      const reqDoc = db.collection("Institute").doc(`/${req.params.iid}/`).collection("Rooms").doc(`/${req.params.rid}/`).collection("Instance").doc(`/${req.params.tid}/`);
      await reqDoc.delete();
      return res.status(200).send({ status: "Success", msg: "Data Removed" });
    } catch (error) {
      console.log(error);
      res.status(500).send({ status: "Failed", msg: error });
    }
  })();
});

// get specific user details from spesific Institute
app.get("/api/:iid/room/:rid/checkinstance/:tid", (req, res) => {
  (async () => {
    try {
      const reqDoc = db.collection("Institute").doc(`/${req.params.iid}/`).collection("Rooms").doc(`/${req.params.rid}/`).collection("Instance").doc(`/${req.params.tid}/`);
      let userDetail = await reqDoc.get();
      let response = userDetail.data();
      console.log(response);
      if(response==null){
        return res.status(100).send({ status: "Success", data: "no such Instance in this room" });
      }
      return res.status(200).send({ status: "Success", data: response });
    } catch (error) {
      console.log(error);
      res.status(500).send({ status: "Failed", msg: error });
    }
  })();
});

    // Finger Print registration
    app.put("/api/:iid/fingerprintregistration/:uid", (req, res) => {
      (async () => {
        try {
          const reqDoc =  db.collection("Institute").doc(`/${req.params.iid}/`).collection("Users").doc(`/${req.params.uid}/`);
          await reqDoc.update({
            fingerPrint: req.body.fingerPrint,
          });
          return res.status(200).send({ status: "Success", msg: "Data Updated" });
        } catch (error) {
          console.log(error);
          res.status(500).send({ status: "Failed", msg: error });
        }
      })();
    });
    










     





// // create
// // Post
// app.post("/api/create", (req, res) => {
//   (async () => {
//     try {
//       await db.collection("userdetails").doc(`/${Date.now()}/`).create({
//         id: Date.now(),
//         name: req.body.name,
//         mobile: req.body.mobile,
//         address: req.body.address,
//       });

//       return res.status(200).send({ status: "Success", msg: "Data Saved" });
//     } catch (error) {
//       console.log(error);
//       res.status(500).send({ status: "Failed", msg: error });
//     }
//   })();
// });

// // read specific user detail
// // get
// app.get("/api/userDetail/:id", (req, res) => {
//   (async () => {
//     try {
//       const reqDoc = db.collection("userdetails").doc(req.params.id);
//       let userDetail = await reqDoc.get();
//       let response = userDetail.data();
//       console.log(response);

//       return res.status(200).send({ status: "Success", data: response });
//     } catch (error) {
//       console.log(error);
//       res.status(500).send({ status: "Failed", msg: error });
//     }
//   })();
// });

// // read all user details
// // get
// app.get("/api/userDetails", (req, res) => {
//   (async () => {
//     try {
//       let query = db.collection("userdetails");
//       let response = [];

//       await query.get().then((data) => {
//         let docs = data.docs; // query results

//         docs.map((doc) => {
//           const selectedData = {
//             id:  doc.data().id,
//             name: doc.data().name,
//             mobile: doc.data().mobile,
//             address: doc.data().address,
//           };

//           response.push(selectedData);
//         });
//         return response;
//       });

//       return res.status(200).send({ status: "Success", data: response });
//     } catch (error) {
//       console.log(error);
//       res.status(500).send({ status: "Failed", msg: error });
//     }
//   })();
// });

// // update
// // put
// app.put("/api/update/:id", (req, res) => {
//   (async () => {
//     try {
//       const reqDoc = db.collection("userdetails").doc(req.params.id);
//       await reqDoc.update({
//         name: req.body.name,
//         mobile: req.body.mobile,
//         address: req.body.address,
//       });
//       return res.status(200).send({ status: "Success", msg: "Data Updated" });
//     } catch (error) {
//       console.log(error);
//       res.status(500).send({ status: "Failed", msg: error });
//     }
//   })();
// });

// // delete
// // delete
// app.delete("/api/delete/:id", (req, res) => {
//   (async () => {
//     try {
//       const reqDoc = db.collection("userdetails").doc(req.params.id);
//       await reqDoc.delete();
//       return res.status(200).send({ status: "Success", msg: "Data Removed" });
//     } catch (error) {
//       console.log(error);
//       res.status(500).send({ status: "Failed", msg: error });
//     }
//   })();
// });

// Exports api to the firebase cloud functions
exports.app = functions.https.onRequest(app);
