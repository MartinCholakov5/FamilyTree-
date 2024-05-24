// src/components/AddEditMemberForm.jsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const Input = styled.input`
  margin: 10px;
  padding: 10px;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  width: 100%;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const AddEditMemberForm = ({ member, onSave }) => {
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');

  useEffect(() => {
    if (member) {
      setName(member.name);
      setDetails(member.details);
    }
  }, [member]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ id: member ? member.id : Date.now(), name, details });
    setName('');
    setDetails('');
  };

  return (
    <FormContainer>
      <h3>{member ? 'Edit Member' : 'Add Member'}</h3>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
        <Button type="submit">{member ? 'Save Changes' : 'Add Member'}</Button>
      </form>
    </FormContainer>
  );
};

export default AddEditMemberForm;
