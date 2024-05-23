// src/App.js
import React from 'react';
import FamilyTree from './components/FamilyTree.jsx';
import GlobalStyles from './components/styles/GlobalStyles.jsx';

const familyData = [
  { id: 1, name: 'Николай Чолаков', details: 'Баща' },
  { id: 2, name: 'Иваничка Чолакова', details: 'Майка' },
  { id: 3, name:'Мартин Чолаков', details:'Син' },
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
