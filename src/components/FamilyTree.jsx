// src/components/FamilyTree.js
import React from 'react';
import styled from 'styled-components';
import FamilyMember from './FamilyMember';

const TreeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const FamilyTree = ({ family }) => {
  return (
    <TreeContainer>
      {family.map(member => (
        <FamilyMember key={member.id} member={member} />
      ))}
    </TreeContainer>
  );
};

export default FamilyTree;
