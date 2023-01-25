import * as React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}

export const medications = [
  { name: 'Aspirin', dosage: '325mg', considerations: 'Do not take with stomach ulcers' },
  { name: 'Ibuprofen', dosage: '200mg', considerations: 'Do not take with blood thinners' },
  { name: 'Paracetamol', dosage: '325mg', considerations: 'Do not take with liver disease' }
];

import { medications } from './path/to/medications'

const MedicationDictionary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState(medications);

  const handleSearch = event => {
    setSearchTerm(event.target.value);
    const filteredResults = medications.filter(med =>
      med.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(filteredResults);
  };

  return (
    <div>
      <input type="text" placeholder="Search for a medication" onChange={handleSearch} />
      {results.map(med => (
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



import MedicationDictionary from './path/to/MedicationDictionary'

function App() {
  return (
    <div className="App">
      <MedicationDictionary />
    </div>
  );
}