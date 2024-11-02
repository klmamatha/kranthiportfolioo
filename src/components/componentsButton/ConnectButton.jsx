// src/components/ConnectButton.jsx
import React, { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: #0ef;
  border-radius: 30px;
  padding: 10px;
  float: inline-end;
  margin-top: 60px;
  color: #f7f8f8;
  border: 1px solid #f6fafa;
  font-size: 15px;
  font-weight: 700;
  line-height: 28px;
  position: fixed;
  right: 40px;
  bottom: 40px;
  width: 130px;
  height: 44px;
  cursor: pointer;
  z-index: 999;

  &:hover {
    box-shadow: 0 0 5px cyan, 0 0 25px cyan, 0 0 50px cyan, 0 0 50px cyan, 0 0 500px;
  }
`;

const PopupOverlay = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

const PopupContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: none;
  font-size: 18px;
  cursor: pointer;
`;

const ConnectButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={handleOpen}>Let’s Connect</Button>
      <PopupOverlay isOpen={isOpen} onClick={handleClose}>
        <PopupContent onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={handleClose}>X</CloseButton>
          <iframe
            src="https://topmate.io/embed/profile/kadinti_kranthi?theme=D5534D"
            title="Topmate Profile"
            className="popup-iframe"
            frameBorder="0"
            style={{ width: '400px', height: '400px' }} // Adjust size as needed
          ></iframe>
        </PopupContent>
      </PopupOverlay>
    </>
  );
};

export default ConnectButton;