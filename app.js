// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: 
    authDomain: 
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

//webpage variables
var currentUser;

//this is the path which will alternate betweeen collections and documents the deeper you go. In this case users is the collection and person is the document
const docRef = firestore.doc("users/person");

//variables to hold references to elements
const outputHeader = document.querySelector("#header")
const inputTextField = document.querySelector("#status")
const saveButton = document.querySelector("#savebtn")
const loadButton = document.querySelector("#loadbtn")

const logInButton = document.querySelector('#logInButton')
const logInEmail = document.querySelector('#loginEmail')
const logInPassword = document.querySelector('#loginPassword')

const signUpButton = document.querySelector('#signUpButton')
const signUpEmail = document.querySelector('#signupEmail')
const signUpPassword = document.querySelector('#signupPassword')

var usersRef = firestore.collection('users').doc('id') //used to check if user exists


// Perform login operation
logInButton.addEventListener("click", function(){
    var emailToSave = logInEmail.value;
    var passwordToSave = logInPassword.value;
    console.log("Saving " + emailToSave + " to Firestore");

    usersRef = firestore.collection('users').doc(emailToSave)

    usersRef.get().then((docSnapshot) => {
    if (docSnapshot.exists) {
        usersRef.onSnapshot((doc) => {
        console.log("It's there");
        currentUser = emailToSave;

        usersRef.get().then(function (doc) {
                    if (doc && doc.exists){
                        const myData = doc.data();
                        console.log(myData.password)
                        //var checkPass = myData.password;

                        if(String(myData.password) == String(passwordToSave))
                        {
                            localStorage.setItem("currentUser", currentUser);
                            setTimeout(() => {  window.location.href="mentee_home.html"; }, 2000);
                        }
                        else
                        {
                            alert('Email/Password combination incorrect!')
                        }
                    }
                }).catch(function (error) {
                    console.log("Got an error: ", error);
                });
        });
    } else {
        alert("Email/Password combination incorrect!");
    }
});
})

//Perform signup operation
signUpButton.addEventListener("click", function(){
    var emailToSave = signUpEmail.value;
    var passwordToSave = signUpPassword.value;
    console.log("Saving " + emailToSave + " to Firestore");

    usersRef = firestore.collection('users').doc(emailToSave)

    usersRef.get().then((docSnapshot) => {
    if (docSnapshot.exists) {
        usersRef.onSnapshot((doc) => {
        console.log("It's there");
        //currentUser = emailToSave;
        alert("Email already registered!");
        });
    } else {
        console.log("It's not there");
        firestore.collection('users').doc(emailToSave).set({
            email: emailToSave,
            password: passwordToSave
        }).then(function(){
            console.log("Status saved");
        }).catch(function(error){
            console.log("Got an error: ", error);
        });
        
        //dont need these for form input pages
        currentUser = emailToSave;
        localStorage.setItem("currentUser", currentUser);
        setTimeout(() => {  window.location.href="signup_mentee.html"; }, 1500);
    }
    });
})



//click event listener for save button
// saveButton.addEventListener("click", function(){
//     const textToSave = inputTextField.value;
//     console.log("Saving " + textToSave + " to Firestore");

//     docRef.set({
//         statusField: textToSave
//     }).then(function(){
//         console.log("Status saved");
//     }).catch(function(error){
//         console.log("Got an error: ", error);
//     });
// })

// loadButton.addEventListener("click", function(){
//     docRef.get().then(function (doc) {
//         if (doc && doc.exists){
//             const myData = doc.data();
//             outputHeader.innerText = "New text: " + myData.statusField;
//         }
//     }).catch(function (error) {
//         console.log("Got an error: ", error);
//     });
// })