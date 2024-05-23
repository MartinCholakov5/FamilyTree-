// src/App.js
import React from 'react';
import FamilyTree from './components/FamilyTree.jsx';
import GlobalStyles from './components/styles/GlobalStyles.jsx';

const familyData = [
  { id: 1, name: 'John Doe', details: 'Father' },
  { id: 2, name: 'Jane Doe', details: 'Mother' },
  // Добавете още членове на семейството
];

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <FamilyTree family={familyData} />
      </div>
    </>
  );
}

export default App;
