import { useState, useEffect } from "react";
import "./index.css";

function App() {
  const [familyTree, setFamilyTree] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const headerHeight = 100; // Adjust the height of the header as needed

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
            <li key={index} className="mt-4">
              <div>
                <span className="font-semibold">Name:</span> {member.name}
              </div>
              <div>
                <span className="font-semibold">Relation:</span> {member.relation}
              </div>
              <div className="flex mt-2">
                <input
                  type="text"
                  value={member.name}
                  onChange={(e) => handleNameChange(e, index)}
                  className="border rounded mr-2 px-2 py-1"
                />
                <input
                  type="text"
                  value={member.relation}
                  onChange={(e) => handleRelationChange(e, index)}
                  className="border rounded mr-2 px-2 py-1"
                />
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded transition-transform duration-300 transform hover:scale-105"
                  onClick={() => removeFamilyMember(index)}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // Function to handle name change
  function handleNameChange(e, index) {
    const updatedFamilyTree = [...familyTree];
    updatedFamilyTree[index].name = e.target.value;
    setFamilyTree(updatedFamilyTree);
  }

  // Function to handle relation change
  function handleRelationChange(e, index) {
    const updatedFamilyTree = [...familyTree];
    updatedFamilyTree[index].relation = e.target.value;
    setFamilyTree(updatedFamilyTree);
  }

  // Function to remove family member
  function removeFamilyMember(index) {
    const updatedFamilyTree = [...familyTree];
    updatedFamilyTree.splice(index, 1);
    setFamilyTree(updatedFamilyTree);
  }

  return (
    <div className="container mx-auto py-8 px-4" style={{ paddingTop: `${headerHeight}px` }}>
      <header
        className="header text-center mb-8 fixed top-0 left-0 right-0 bg-white z-10"
        style={{ transform: `translateY(${scrollPosition * 0.5}px)` }}
      >
        <h1 className="text-4xl font-bold">FamilyTree 🌴</h1>
      </header>
      <div className="flex justify-center">
        <div className="card p-6 w-full max-w-lg">
          {displayFamilyTree()}
          <div className="mt-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 transition-transform duration-300 transform hover:scale-105"
              onClick={() => addFamilyMember("John", "Father")}
            >
              Add Family Member
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
