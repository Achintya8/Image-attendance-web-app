// UserTypeSelection.js

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import backgroundImage from './front.jpg'; // Replace with your actual image file

const SelectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url(${backgroundImage}) center/cover no-repeat; /* Use your actual image */
`;

const SelectionButtons = styled.div`
  text-align: center;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 8px;
`;

const Button = styled(Link)`
  margin: 10px;
  padding: 15px 30px;
  font-size: 18px;
  text-decoration: none;
  color: #fff;
  background-color: #3498db;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

const UserTypeSelection = () => {
  return (
    <SelectionContainer>
      <SelectionButtons>
        <Button to="/login/student">Student</Button>
        <Button to="/login/teacher">Teacher</Button>
      </SelectionButtons>
    </SelectionContainer>
  );
};

export default UserTypeSelection;

