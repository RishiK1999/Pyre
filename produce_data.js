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


//Person 1
var usersRef = firestore.collection('users').doc('AdamsBaker@deltahacks.com').collection('mentor_data').doc('form_data');    
usersRef.set({
        firstname: 'Adams',
        lastname: 'Baker',
        pronoun: 'He',
        placeemployment: 'AMD',
        positionemployment: 'Digital Verification',
        biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
        experience: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
        linkedin: 'https://www.linkedin.com/in/AdamsBaker/',
        program: 'Electrical Engineering',
        firstinterest: 'Engineering',
        secondinterest: 'Robotics',
        thirdinterest: 'Machine Learning'            
    }).then(function(){
        console.log("Status saved");
    }).catch(function(error){
        console.log("Got an error: ", error);
    });
usersRef = firestore.collection('users').doc('AdamsBaker@deltahacks.com');
usersRef.set({
    email: 'AdamsBaker@deltahacks.com',
    password: 'giuhdiguheggg8w793g5rtwpei',
    position: 'mentor'
}).then(function(){
    console.log("Status saved");
}).catch(function(error){
    console.log("Got an error: ", error);
});

//Person 2
var usersRef = firestore.collection('users').doc('RizwanWatt@deltahacks.com').collection('mentor_data').doc('form_data');    
usersRef.set({
        firstname: 'Rizwan',
        lastname: 'Watt',
        pronoun: 'He',
        placeemployment: 'NASA',
        positionemployment: 'Astronomer',
        biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
        experience: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
        linkedin: 'https://www.linkedin.com/in/RizwanWatt/',
        program: 'Biology',
        firstinterest: 'Astronomy',
        secondinterest: 'Physics',
        thirdinterest: 'Biology'            
    }).then(function(){
        console.log("Status saved");
    }).catch(function(error){
        console.log("Got an error: ", error);
    });
usersRef = firestore.collection('users').doc('RizwanWatt@deltahacks.com');
usersRef.set({
    email: 'RizwanWatt@deltahacks.com',
    password: 'giuhdiguheggg8w793g5rtwpei',
    position: 'mentor'
}).then(function(){
    console.log("Status saved");
}).catch(function(error){
    console.log("Got an error: ", error);
});

//Person 3
var usersRef = firestore.collection('users').doc('CarlosKnapp@deltahacks.com').collection('mentor_data').doc('form_data');    
usersRef.set({
        firstname: 'Carlos',
        lastname: 'Knapp',
        pronoun: 'He',
        placeemployment: 'Magna',
        positionemployment: 'Software Engineer',
        biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
        experience: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
        linkedin: 'https://www.linkedin.com/in/CarlosKnapp/',
        program: 'Engineering',
        firstinterest: 'Back End Developing',
        secondinterest: 'Robotics',
        thirdinterest: 'Chemistry'            
    }).then(function(){
        console.log("Status saved");
    }).catch(function(error){
        console.log("Got an error: ", error);
    });
usersRef = firestore.collection('users').doc('CarlosKnapp@deltahacks.com');
usersRef.set({
    email: 'CarlosKnapp@deltahacks.com',
    password: 'giuhdiguheggg8w793g5rtwpei',
    position: 'mentor'
}).then(function(){
    console.log("Status saved");
}).catch(function(error){
    console.log("Got an error: ", error);
});


//Person 4
var usersRef = firestore.collection('users').doc('DennyWilder@deltahacks.com').collection('mentor_data').doc('form_data');    
usersRef.set({
        firstname: 'Denny',
        lastname: 'Wilder',
        pronoun: 'He',
        placeemployment: 'Synopsys',
        positionemployment: 'Analog Verification',
        biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
        experience: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
        linkedin: 'https://www.linkedin.com/in/DennyWilder/',
        program: 'Engineering',
        firstinterest: 'Hardware',
        secondinterest: 'Psychology',
        thirdinterest: 'Anthropology'            
    }).then(function(){
        console.log("Status saved");
    }).catch(function(error){
        console.log("Got an error: ", error);
    });
usersRef = firestore.collection('users').doc('DennyWilder@deltahacks.com');
usersRef.set({
    email: 'DennyWilder@deltahacks.com',
    password: 'giuhdiguheggg8w793g5rtwpei',
    position: 'mentor'
}).then(function(){
    console.log("Status saved");
}).catch(function(error){
    console.log("Got an error: ", error);
});


//Person 5
var usersRef = firestore.collection('users').doc('AbdiHolt@deltahacks.com').collection('mentor_data').doc('form_data');    
usersRef.set({
        firstname: 'Abdi',
        lastname: 'Holt',
        pronoun: 'He',
        placeemployment: 'Overbook Entertainment',
        positionemployment: 'Actor',
        biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
        experience: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
        linkedin: 'https://www.linkedin.com/in/AbdiHolt/',
        program: 'Engineering',
        firstinterest: 'Film',
        secondinterest: 'Artificial Intelligence',
        thirdinterest: 'Creative Writing'            
    }).then(function(){
        console.log("Status saved");
    }).catch(function(error){
        console.log("Got an error: ", error);
    });
usersRef = firestore.collection('users').doc('AbdiHolt@deltahacks.com');
usersRef.set({
    email: 'AbdiHolt@deltahacks.com',
    password: 'giuhdiguheggg8w793g5rtwpei',
    position: 'mentor'
}).then(function(){
    console.log("Status saved");
}).catch(function(error){
    console.log("Got an error: ", error);
});


//Person 6
var usersRef = firestore.collection('users').doc('MarleyGallegos@deltahacks.com').collection('mentor_data').doc('form_data');    
usersRef.set({
        firstname: 'Marley',
        lastname: 'Gallegos',
        pronoun: 'He',
        placeemployment: 'Forest Laboratories',
        positionemployment: 'Lab Researcher',
        biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
        experience: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
        linkedin: 'https://www.linkedin.com/in/MarleyGallegos/',
        program: 'Engineering',
        firstinterest: 'Biomedical',
        secondinterest: 'Health Care',
        thirdinterest: 'Athletics'            
    }).then(function(){
        console.log("Status saved");
    }).catch(function(error){
        console.log("Got an error: ", error);
    });
usersRef = firestore.collection('users').doc('MarleyGallegos@deltahacks.com');
usersRef.set({
    email: 'MarleyGallegos@deltahacks.com',
    password: 'giuhdiguheggg8w793g5rtwpei',
    position: 'mentor'
}).then(function(){
    console.log("Status saved");
}).catch(function(error){
    console.log("Got an error: ", error);
});

//Person 7
var usersRef = firestore.collection('users').doc('CindyBaxter@deltahacks.com').collection('mentor_data').doc('form_data');    
usersRef.set({
        firstname: 'Cindy',
        lastname: 'Baxter',
        pronoun: 'He',
        placeemployment: 'Facebook',
        positionemployment: 'R&D Scientist',
        biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
        experience: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
        linkedin: 'https://www.linkedin.com/in/CindyBaxter/',
        program: 'Engineering',
        firstinterest: 'Innovation',
        secondinterest: 'Physics',
        thirdinterest: 'Software'            
    }).then(function(){
        console.log("Status saved");
    }).catch(function(error){
        console.log("Got an error: ", error);
    });
usersRef = firestore.collection('users').doc('CindyBaxter@deltahacks.com');
usersRef.set({
    email: 'CindyBaxter@deltahacks.com',
    password: 'giuhdiguheggg8w793g5rtwpei',
    position: 'mentor'
}).then(function(){
    console.log("Status saved");
}).catch(function(error){
    console.log("Got an error: ", error);
});

//Person 8
var usersRef = firestore.collection('users').doc('AbulPerry@deltahacks.com').collection('mentor_data').doc('form_data');    
usersRef.set({
        firstname: 'Abul',
        lastname: 'Perry',
        pronoun: 'He',
        placeemployment: 'SpaceX',
        positionemployment: 'Astronaut',
        biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
        experience: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
        linkedin: 'https://www.linkedin.com/in/AbulPerry/',
        program: 'Engineering',
        firstinterest: 'Astronomy',
        secondinterest: 'Music',
        thirdinterest: 'Kinesiology'            
    }).then(function(){
        console.log("Status saved");
    }).catch(function(error){
        console.log("Got an error: ", error);
    });
usersRef = firestore.collection('users').doc('AbulPerry@deltahacks.com');
usersRef.set({
    email: 'AbulPerry@deltahacks.com',
    password: 'giuhdiguheggg8w793g5rtwpei',
    position: 'mentor'
}).then(function(){
    console.log("Status saved");
}).catch(function(error){
    console.log("Got an error: ", error);
});


//Person 9
var usersRef = firestore.collection('users').doc('FarihaBerry@deltahacks.com').collection('mentor_data').doc('form_data');    
usersRef.set({
        firstname: 'Fariha',
        lastname: 'Berry',
        pronoun: 'He',
        placeemployment: 'Eurofins',
        positionemployment: 'Chemical Scientist',
        biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
        experience: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
        linkedin: 'https://www.linkedin.com/in/FarihaBerry/',
        program: 'Engineering',
        firstinterest: 'Research',
        secondinterest: 'Film',
        thirdinterest: 'Chemistry'            
    }).then(function(){
        console.log("Status saved");
    }).catch(function(error){
        console.log("Got an error: ", error);
    });
usersRef = firestore.collection('users').doc('FarihaBerry@deltahacks.com');
usersRef.set({
    email: 'FarihaBerry@deltahacks.com',
    password: 'giuhdiguheggg8w793g5rtwpei',
    position: 'mentor'
}).then(function(){
    console.log("Status saved");
}).catch(function(error){
    console.log("Got an error: ", error);
});


//Person 10
var usersRef = firestore.collection('users').doc('NoraMcloughlin@deltahacks.com').collection('mentor_data').doc('form_data');    
usersRef.set({
        firstname: 'Nora',
        lastname: 'Mcloughlin',
        pronoun: 'He',
        placeemployment: 'Region of Peel',
        positionemployment: 'Registered Nurse',
        biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
        experience: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
        linkedin: 'https://www.linkedin.com/in/NoraMcloughlin/',
        program: 'Engineering',
        firstinterest: 'Health Care',
        secondinterest: 'Law and Politics',
        thirdinterest: 'Psychology'            
    }).then(function(){
        console.log("Status saved");
    }).catch(function(error){
        console.log("Got an error: ", error);
    });
usersRef = firestore.collection('users').doc('NoraMcloughlin@deltahacks.com');
usersRef.set({
    email: 'NoraMcloughlin@deltahacks.com',
    password: 'giuhdiguheggg8w793g5rtwpei',
    position: 'mentor'
}).then(function(){
    console.log("Status saved");
}).catch(function(error){
    console.log("Got an error: ", error);
});


