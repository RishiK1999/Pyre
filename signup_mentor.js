// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: 
    appId: ""
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();


//variables to hold references to elements
const fname = document.querySelector("#fname")
const lname = document.querySelector("#lname")
const pronouns = document.querySelector("#pronouns")

const cemploy = document.querySelector("#cemploy")
const pemploy = document.querySelector('#pemploy')

const bio = document.querySelector('#bio')
const exp = document.querySelector('#exp')

const linkedin = document.querySelector('#linkedin')
const program = document.querySelector('#program')

const firsti = document.querySelector('#firsti')
const secondi = document.querySelector('#secondi')
const thirdi = document.querySelector('#thirdi')

const submit = document.querySelector('#submit')
const menteepage = document.querySelector('#mentee_page')

//var emailholder = 'gdg@gtrvdf';
var emailholder = localStorage.getItem('currentUser');

document.getElementById('mentee_page').onclick = function (){
        location.href = "signup_mentee.html";
};

submit.addEventListener("click", function(){
    var firstname = fname.value;
    var lastname = lname.value;
    var pronoun = pronouns.value;
    var employ1 = cemploy.value;
    var employ2 = pemploy.value;
    var biography = bio.value;
    var experience = exp.value;
    var linkedIN = linkedin.value;
    var prog = program.value;
    var firstI = firsti.value;
    var secondI = secondi.value;
    var thirdI = thirdi.value;

    console.log("Saving " + firstname + lastname + " to Firestore");

    var usersRef = firestore.collection('users').doc(emailholder).collection('mentor_data').doc('form_data');

    console.log("Saving...");
    usersRef.set({
            firstname: firstname,
            lastname: lastname,
            pronoun: pronoun,
            placeemployment: employ1,
            positionemployment: employ2,
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
            position: "mentor"
        }, { merge: true }).then(function(){
            console.log("Mentor Status saved");
        }).catch(function(error){
            console.log("Got an error with mentor position: ", error);
        });

        setTimeout(() => {  window.location.href="signup_mentee.html"; }, 1500);
        
    })
