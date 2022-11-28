{/* <script type="module"> */}
        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries

        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
            apiKey: "AIzaSyAg72CAX2SWsYzmN0B9NxYAHnE_oFgijVU",
            authDomain: "co300project.firebaseapp.com",
            databaseURL: "https://co300project-default-rtdb.firebaseio.com",
            projectId: "co300project",
            storageBucket: "co300project.appspot.com",
            messagingSenderId: "687930390947",
            appId: "1:687930390947:web:ccebf1c99141c989ac4216",
            measurementId: "G-H8MSVVV3GN"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
        //THIS IS WHERE YOU PASTE THE CODE TO CONNECT TO YOUR OWN DATABASE
        //Copy and paste the CDN bit of code from your app that you created on Firebase.
        //The script tag above is already there, so careful not to have duplicate script tags.
        //After you've copied and pasted, just delete the unnecessary script tags. 
   

        import {getDatabase, ref, get, set, child}
        from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js"
        //Copy and Paste the URL from near the top of the CDN you pasted in from firebase
        // (the one where you imported "initializeApp" from),
        //but change "firebase-app" to "firebase-database"
        

        const db = getDatabase();

        var userid = document.querySelector("#userid");
        var name = document.querySelector("#name");
        var mobielnumber = document.querySelector("#mobielnumber");
        var password1 = document.querySelector("#password1");
        var birthdate = document.querySelector("#birthdate");
        // var findID = document.querySelector("#findID");
        // var findName = document.querySelector("#findName");
        // var findAge = document.querySelector("#findAge");
      

        var submit = document.querySelector("#insert");
        
        // var updateBtn = document.querySelector("#update");
        // var removeBtn = document.querySelector("#remove");
        // var findBtn = document.querySelector("#find");

        function InsertData() {
            document.write(name.value);
            document.write(userid.value);
            document.write(password1.value);
            document.write(birthdate.value);
            set(ref(db, "People/"+ userid.value),{
                Name: name.value,
                ID: userid.value,
                birthdate: birthdate.value,
                mobielnumber: mobielnumber.value,
                password1: password1.value
            })
            .then(()=>{
                alert("Data added successfully");
            })
            .catch((error)=>{
                alert(error);
            });
        }
        // use this to identify the company
        function FindData() {
            const dbref = ref(db);

            get(child(dbref, "People/" + findID.value))
            .then((snapshot)=>{
                if(snapshot.exists()){
                    findName.innerHTML = "Name: " + snapshot.val().Name;
                    findAge.innerHTML = "Age: " + snapshot.val().Age;
                } else {
                    alert("No data found");
                }
            })
            .catch((error)=>{
                alert(error)
            })
            
        }

        // function UpdateData(){
        //     update(ref(db, "People/"+ enterID.value),{
        //         Name: enterName.value,
        //         Age: enterAge.value
        //     })
        //     .then(()=>{
        //         alert("Data updated successfully");
        //     })
        //     .catch((error)=>{
        //         alert(error);
        //     });
        // }

        // function RemoveData(){
        //     remove(ref(db, "People/"+ enterID.value))
        //     .then(()=>{
        //         alert("Data deleted successfully");
        //     })
        //     .catch((error)=>{
        //         alert(error);
        //     });
        // }

        submit.addEventListener('click', InsertData);
        // updateBtn.addEventListener('click', UpdateData);
        // removeBtn.addEventListener('click', RemoveData);
        // findBtn.addEventListener('click', FindData);

      {/* </script> */}