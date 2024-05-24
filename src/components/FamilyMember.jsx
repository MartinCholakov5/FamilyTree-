// src/components/FamilyMember.jsx
import React from 'react';
import styled from 'styled-components';
import { FaUserCircle, FaEdit } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MemberContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  padding: 20px;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const EditButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  &:hover {
    color: #007bff;
  }
`;

const MemberName = styled.h3`
  margin: 10px 0;
  font-size: 1.2em;
`;

const MemberDetails = styled.p`
  margin: 5px 0;
`;

const FamilyMember = ({ member, onEdit }) => {
  return (
    <MemberContainer
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
    >
      <FaUserCircle size={50} color="#6c757d" />
      <EditButton onClick={() => onEdit(member)}>
        <FaEdit />
      </EditButton>
      <MemberName>{member.name}</MemberName>
      <MemberDetails>{member.details}</MemberDetails>
    </MemberContainer>
  );
};

export default FamilyMember;
