import React, { useState, useEffect } from 'react';
import { medications } from './src/data/medications.js';

const MedicationDictionary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState(medications);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const filteredResults = medications.filter((med) =>
      med.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(filteredResults);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a medication"
        onChange={handleSearch}
      />
      {results.map((med) => (
        <div key={med.name}>
          <h2>{med.name}</h2>
          <p>Dosage: {med.dosage}</p>
          <p>Considerations: {med.considerations}</p>
        </div>
      ))}
    </div>
  );
};

export default MedicationDictionary;
