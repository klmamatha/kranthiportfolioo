import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
  }
`;

const ConnectButton = () => {
    const handleClick = () => {
        // Define what happens when the button is clicked
        alert("Let's Connect!");
    };

    return <Button onClick={handleClick}>Let's Connect</Button>;
};

export default ConnectButton;