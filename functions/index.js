const admin = require('./node_modules/firebase-admin');
const serviceAccount = require("./serviceAccountKey.json");
const items = require("./sales.json");
const slugify = require('slugify');

admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });

const firestore = admin.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);

const collection = 'sales';

if (items && (typeof items === "object")) {

  Object.keys(items).forEach(docKey => {
    items[docKey].slug = slugify(items[docKey].nameAgency.toLowerCase());
    firestore.collection(collection).doc().set(items[docKey])
    .then((res) => console.log("Document " + docKey + " successfully written!"))
    .catch((error) => console.error("Error writing document: ", error));
  })
} else {
  console.log('No es un object');
}
