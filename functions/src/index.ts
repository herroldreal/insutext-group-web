import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import 'firebase/auth'

admin.initializeApp();

export const helloWorld = functions.https.onRequest((req, res) => {
    res.send("Hello from Firebase with TypeScript!");
});

/*
export const onUserCreated = functions.auth.user().onCreate((user) => {
    console.log(`New user created: ${user.uid}`);
    // Lógica adicional al crear un usuario
});*/
