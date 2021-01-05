
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyDxROQ7A6mTvU-ARoHEJVAOFbHSPACZPcQ",
  authDomain: "heyandes2021.firebaseapp.com",
  projectId: "heyandes2021",
});

var db = firebase.firestore();

const sales = require("./sales.json");

sales.forEach((res) => {
  console.log(res);
  db.collection('sales').add({
    nameAgency: res.nameAgency,
    day: res.day,
    name: res.name,
    paymentStatus: res.paymentStatus,
    finalPrice: res.finalPrice,
    datePayment: res.datePayment,
    createdAt: res.createdAt,
    persons: res.persons,
    hour: res.hour,
    timeZone: res.timeZone
  })
  .then((docRef) => console.log("Documento con ID: ", docRef.id))
  .catch((error) => console.error("Error :( ", error));
})
