// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";

import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCspsRZ2zjlIQApf3R460pA0srURis_UPo",
    authDomain: "bloggingloginpage.firebaseapp.com",
    projectId: "bloggingloginpage",
    storageBucket: "bloggingloginpage.firebasestorage.app",
    messagingSenderId: "979404700608",
    appId: "1:979404700608:web:9cb2d00342539a30fc6625"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// submit button
const submit = document.getElementById('signin');

submit.addEventListener("click", function (event) {
    event.preventDefault()
    // alert("Please Fill Details First");

    //  inputs

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;

            alert("Logging in....");
            window.location.href = "homepage.html";
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
            // ..
        });
})