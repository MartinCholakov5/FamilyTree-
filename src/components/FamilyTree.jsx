// src/components/FamilyTree.jsx
import React from 'react';
import Tree from 'react-d3-tree';

const containerStyles = {
  width: '100%',
  height: '100vh',
};

const FamilyTree = ({ family }) => {
  const data = family.map(member => ({
    name: member.name,
    attributes: {
      details: member.details
    }
  }));

  const treeData = {
    name: 'Family Tree',
    children: data,
  };

  return (
    <div style={containerStyles}>
      <Tree data={treeData} orientation="vertical" />
    </div>
  );
};

export default FamilyTree;
