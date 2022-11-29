        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
        
        import {getDatabase, ref, set}
        from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js"
       
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

        const db = getDatabase();

        var enterID = document.querySelector("#enterID");
        var enterName = document.querySelector("#enterName");
        
      

        var insertBtn = document.querySelector("#insert");
       

        function InsertData() {
            set(ref(db, "Rooms/"+ enterID.value),{
                Name: enterName.value,
                ID: enterID.value,
            })
            .then(()=>{
                alert("Data added successfully");
            })
            .catch((error)=>{
                alert(error);
            });
        }


        insertBtn.addEventListener('click', InsertData);

