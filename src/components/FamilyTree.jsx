// src/components/FamilyTree.jsx
import React from 'react';
import styled from 'styled-components';
import FamilyMember from './FamilyMember.jsx';

const TreeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const FamilyTree = ({ family, onEdit }) => {
  return (
    <TreeContainer>
      {family.map(member => (
        <FamilyMember key={member.id} member={member} onEdit={onEdit} />
      ))}
    </TreeContainer>
  );
};

export default FamilyTree;
