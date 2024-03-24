// utils/firebaseAdmin.js
const admin = require("firebase-admin");
const serviceAccount = require("../service-account-key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: process.env.STORAGE_BUCKET,
});

const bucket = admin.storage().bucket();

module.exports = bucket;
