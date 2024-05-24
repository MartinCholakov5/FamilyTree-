import React, { useState } from 'react';
import FamilyTree from './components/FamilyTree.jsx';
import GlobalStyles from './components/styles/GlobalStyles.jsx';
import AddEditMemberForm from './components/AddEditMemberForm.jsx';

const initialFamilyData  = [
  { id: 1, name: 'Николай Чолаков', details: 'Баща' },
  { id: 2, name: 'Иваничка Чолакова', details: 'Майка' },
  { id: 3, name:'Мартин Чолаков', details:'Син' },
  // Добавете още членове на семейството
];

function App() {
  const [family, setFamily] = useState(initialFamilyData);
  const [editingMember, setEditingMember] = useState(null);

  const handleSaveMember = (member) => {
    if (editingMember) {
      setFamily(family.map((m) => (m.id === member.id ? member : m)));
      setEditingMember(null);
    } else {
      setFamily([...family, member]);
    }
  };

  const handleEditMember = (member) => {
    setEditingMember(member);
  };

  return (
    <>
      <GlobalStyles />
      <div className="App">
        <AddEditMemberForm member={editingMember} onSave={handleSaveMember} />
        <FamilyTree family={family} onEdit={handleEditMember} />
      </div>
    </>
  );
}

export default App;
