import React from 'react';
import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';

const MemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  padding: 20px;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  background-color: purple transparent;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const MemberName = styled.h3`
  margin: 10px 0;
  font-size: 1.2em;
`;

const MemberDetails = styled.p`
  margin: 5px 0;
`;

const FamilyMember = ({ member }) => {
  return (
    <MemberContainer>
      <FaUserCircle size={50} color="#6c757d" />
      <MemberName>{member.name}</MemberName>
      <MemberDetails>{member.details}</MemberDetails>
    </MemberContainer>
  );
};

export default FamilyMember;
