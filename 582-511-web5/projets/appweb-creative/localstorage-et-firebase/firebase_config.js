/**
 * Configuration Firebase pour le projet
 * 
 * IMPORTANT: Les étudiants doivent créer leur propre projet Firebase
 * et remplacer les valeurs ci-dessous.
 * 
 * Étapes pour obtenir votre configuration:
 * 1. Aller sur https://console.firebase.google.com
 * 2. Créer un nouveau projet
 * 3. Ajouter une app web
 * 4. Copier la configuration fournie
 * 5. Activer Firestore Database (mode test pour commencer)
 * 6. Activer Authentication (Email/Password et Google)
 */

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// Configuration Firebase (à remplacer par VOTRE configuration)
const firebaseConfig = {
  apiKey: "VOTRE_API_KEY",
  authDomain: "VOTRE_PROJECT_ID.firebaseapp.com",
  projectId: "VOTRE_PROJECT_ID",
  storageBucket: "VOTRE_PROJECT_ID.appspot.com",
  messagingSenderId: "VOTRE_MESSAGING"
  //... Clau avait arrêté ici il manque peut-être des propriétés ici
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);