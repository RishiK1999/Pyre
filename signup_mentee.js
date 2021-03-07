// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: 
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: ",
    messagingSenderId: "",
    appId: ""
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

//variables to hold references to elements
const fname = document.querySelector("#fname")
const lname = document.querySelector("#lname")
const pronouns = document.querySelector("#pronouns")

const bio = document.querySelector("#bio")
const exp = document.querySelector('#exp')
const linkedin = document.querySelector('#linkedin')

const uni = document.querySelector('#uni')
const program = document.querySelector('#program')

const firsti = document.querySelector('#firsti')
const secondi = document.querySelector('#secondi')
const thirdi = document.querySelector('#thirdi')
const submit = document.querySelector('#submit')
const mentorpage = document.querySelector('#mentor_page')

//var emailholder = 'mentee';
var emailholder = localStorage.getItem('currentUser');

document.getElementById('mentor_page').onclick = function (){
    location.href = "signup_mentor.html";
};

submit.addEventListener("click", function(){
    var firstname = fname.value;
    var lastname = lname.value;
    var pronoun = pronouns.value;
    var biography = bio.value;
    var experience = exp.value;
    var linkedIN = linkedin.value;
    var prog = program.value;
    var firstI = firsti.value;
    var secondI = secondi.value;
    var thirdI = thirdi.value;

    console.log("Saving " + firstname + lastname + " to Firestore");

    var usersRef = firestore.collection('users').doc(emailholder).collection('mentee_data').doc('form_data')

    console.log("Saving...");
    usersRef.set({
            firstname: firstname,
            lastname: lastname,
            pronoun: pronoun,
            biography: biography,
            experience: experience,
            linkedin: linkedIN,
            program: prog,
            firstinterest: firstI,
            secondinterest: secondI,
            thirdinterest: thirdI
        }).then(function(){
            console.log("Status saved");
        }).catch(function(error){
            console.log("Got an error: ", error);
        });

        usersRef = firestore.collection('users').doc(emailholder);

        usersRef.set({
            position: "mentee"
        }, { merge: true }).then(function(){
            console.log("Mentor Status saved");
        }).catch(function(error){
            console.log("Got an error with mentor position: ", error);
        });

        setTimeout(() => {  window.location.href="mentee_home.html"; }, 1500);
    });