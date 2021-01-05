const admin = require('./node_modules/firebase-admin');
const serviceAccount = require("./serviceAccountKey.json");
const sales = require("./sales.json");


admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });

const firestore = admin.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);

const collection = 'sales';

if (sales && (typeof sales === "object")) {
  Object.keys(sales).forEach(docKey => {
    firestore.collection(collection).doc().set(sales[docKey])
    .then((res) => console.log("Document " + docKey + " successfully written!"))
    .catch((error) => console.error("Error writing document: ", error));
  })
}
