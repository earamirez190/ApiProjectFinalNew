
const admin = require('firebase-admin');

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://proyectfinal-b86ae-default-rtdb.firebaseio.com/'
});

const db = admin.firestore();

module.exports = { db };
