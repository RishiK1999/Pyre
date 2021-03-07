var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: 
    appId: ""
};

firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

function parseMentorInterest() {
    var mentorProfilesList = [];

    firestore.collection('users').where("position", "==", "mentor").get().then(
        (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const userData = doc.data();
                firestore.collection('users').doc(doc.id).collection('mentor_data').doc('form_data').get().then((doc2) => {
                    if (doc2.exists) {
                        const formData = doc2.data();
                        mentorProfilesList.push([userData.email, [formData.firstinterest, formData.secondinterest, formData.thirdinterest]]);
                    }
                })
            })
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });

    //console.log(mentorProfiles);
    return mentorProfilesList;
}

function parseMenteeInterest(menteeName) {
    var menteeProfileList = [];

    firestore.collection('users').doc(menteeName).get().then(
        (menteeDoc) => {
            if (menteeDoc.exists) {
                const userData = menteeDoc.data();
                firestore.collection('users').doc(menteeName).collection('mentee_data').doc('form_data').get().then((formDoc) => {
                    if (formDoc.exists) {
                        const formData = formDoc.data();
                        menteeProfileList.push([userData.email, [formData.firstinterest, formData.secondinterest, formData.thirdinterest]]);
                    }
                }).catch((error) => {
                    console.log("Error getting document2:", error);
                });
            }
        }
    ).catch((error) => {
        console.log("Error getting document:", error);
    });

    //console.log(menteeProfile);
    return menteeProfileList;
}

//MentorProfiles Format: [[email,[spec1,spec2,spec3]],[email,[spec1,spec2,spec3]],[email,[spec1,spec2,spec3]]]
//MenteeProfile Format: [[email,[spec1,spec2,spec3]]]
function match(menteeProfile, mentorProfiles) {
    var topMentors = Array(mentorProfiles.length).fill(0);
    console.log("before", topMentors.length);
    for (var mentorId = 0; mentorId < mentorProfiles.length; mentorId++) {
        if (menteeProfile[0][1][0] == mentorProfiles[mentorId][1][0]) {
            topMentors[mentorId] += 100;
        }
        if (menteeProfile[0][1][0] == mentorProfiles[mentorId][1][1]) {
            topMentors[mentorId] += 90;
        }
        if (menteeProfile[0][1][1] == mentorProfiles[mentorId][1][0]) {
            topMentors[mentorId] += 80;
        }
        if (menteeProfile[0][1][0] == mentorProfiles[mentorId][1][2]) {
            topMentors[mentorId] += 70;
        }
        if (menteeProfile[0][1][1] == mentorProfiles[mentorId][1][1]) {
            topMentors[mentorId] += 60;
        }
        if (menteeProfile[0][1][2] == mentorProfiles[mentorId][1][0]) {
            topMentors[mentorId] += 50;
        }
        if (menteeProfile[0][1][1] == mentorProfiles[mentorId][1][2]) {
            topMentors[mentorId] += 40;
        }
        if (menteeProfile[0][1][2] == mentorProfiles[mentorId][1][1]) {
            topMentors[mentorId] += 30;
        }
        if (menteeProfile[0][1][2] == mentorProfiles[mentorId][1][2]) {
            topMentors[mentorId] += 20;
        }
        console.log(topMentors[mentorId]);    
    }

    console.log("after", topMentors.length);
    var first = topMentors.indexOf(Math.max(...topMentors));
    var second = 0;
    var third = 0;
    for (var i = 0; i < topMentors.length; i++) {
        if (topMentors[i] > topMentors[second] && i != first) {
            third = second;
            second = i;
        }
        else if (topMentors[i] > topMentors[third] && i != first) {
            third = i;
        }
    }
    //console.log([first,second,third]);
    var top3 = [mentorProfiles[first][0], mentorProfiles[second][0], mentorProfiles[third][0]];
    //console.log(top3);

    return top3;
}

var menteeList = parseMenteeInterest("mentee");
console.log(menteeList);
console.log(menteeList.length);
var mentorList = parseMentorInterest();
console.log(mentorList);
console.log(mentorList.length);

var mentorList = [ 
    ['DennyWilder@deltahacks.com', ["Hardware", "Psychology", "Anthropology"]], 
    ['AbdiHolt@deltahacks.com', ["Film", "Artificial Intelligence", "Creative Writing"]],
    ['MarleyGallegos@deltahacks.com', ["Biomedical", "Health Care", "Athletics"]], 
    ['CindyBaxter@deltahacks.com', ["Innovation", "Physics", "Software"]], 
    ['AbulPerry@deltahacks.com', ["Astronomy", "Music", "Kinesiology"]],
    ['AdamsBaker@deltahacks.com', ["Engineering", "Robotics", "Machine Learning"]],
    ['RizwanWatt@deltahacks.com', ["Astronomy", "Physics", "Biology"]],
    ['CarlosKnapp@deltahacks.com', ["Back End Developing", "Robotics", "Chemistry"]],
    ['FarihaBerry@deltahacks.com', ["Research", "Film", "Chemistry"]], 
    ['NoraMcloughlin@deltahacks.com', ["Health Care", "Law and Politics", "Psychology"]]]
console.log(menteeList);
var menteeList = [['RishiKuhesan@deltahacks.com', ["Robotics", "Physics", "Health Care"]]]
console.log(mentorList);
var top3matches = match(menteeList, mentorList);
console.log(top3matches);
