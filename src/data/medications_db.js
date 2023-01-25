import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "PROJECT_ID.firebaseapp.com",
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://DATABASE_NAME.firebaseio.com",
  projectId: "PROJECT_ID",
  storageBucket: "PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID",
  // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
  measurementId: "G-MEASUREMENT_ID",
};


const MedicationList = () => {
  const [medications, setMedications] = useState([]);
  useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db.collection('medications').onSnapshot((snapshot) => {
      const medicationsData = snapshot.docs.map((doc) => doc.data());
      setMedications(medicationsData);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h2>Medication List</h2>
      <ul>
        {medications.map((medication) => (
          <li key={medication.name}>{medication.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default MedicationList;
