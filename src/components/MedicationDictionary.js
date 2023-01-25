import React, { useState, useEffect } from 'react';
import { medications } from '../data/medications';
import MedicationList from '../data/medications_db';

export default function MedicationDictionary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setSearchResults(
      medications.filter((medication) =>
        medication.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a medication"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {searchResults.map((medication) => (
          <li key={medication.id}>
            <h3>{medication.name}</h3>
            <p>{medication.description}</p>
            <p>Dosage: {medication.dosage}</p>
            <p>Considirations: {medication.considerations}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
