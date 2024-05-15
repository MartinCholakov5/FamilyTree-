import { useState } from "react";
import "./index.css";

function App() {
  const [familyTree, setFamilyTree] = useState([]);

  // Function to add a new family member
  function addFamilyMember(name, relation) {
    const newMember = { name, relation };
    setFamilyTree([...familyTree, newMember]);
  }

  // Function to display the family tree
  function displayFamilyTree() {
    return (
      <div className="mt-6">
        <h2 className="text-xl font-bold mb-2">Family Tree:</h2>
        <ul className="list-disc ml-4">
          {familyTree.map((member, index) => (
            <li key={index} className="mt-1">
              <span className="font-semibold">Name:</span> {member.name},{" "}
              <span className="font-semibold">Relation:</span> {member.relation}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // Function to edit family member information
  function editFamilyMember(index, newName, newRelation) {
    if (index >= 0 && index < familyTree.length) {
      const updatedFamilyTree = [...familyTree];
      updatedFamilyTree[index] = { name: newName, relation: newRelation };
      setFamilyTree(updatedFamilyTree);
    } else {
      console.log("Invalid index.");
    }
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">FamilyTree 🌴</h1>
      </header>
      <div className="flex justify-center">
        <div className="card p-6 w-full max-w-lg">
          {displayFamilyTree()}
          <div className="mt-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
              onClick={() => addFamilyMember("John", "Father")}
            >
              Add Family Member
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => editFamilyMember(0, "John Doe", "Father")}
            >
              Edit Family Member
            </button>
          </div>
        </div>
      </div>
      <p className="text-center mt-8 text-gray-600">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
