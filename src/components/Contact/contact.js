import React, { useRef, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';
import { darkTheme, lightTheme } from '../../utils/Themes'; // Import themes

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding-top: 20px;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
margin-top: 12px;
      font-size: 32px;
  }
`;


export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  height: 60%;
  max-height: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 10px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.inputText};
  caret-color: ${({ theme }) => theme.inputCursor};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.inputText};
  caret-color: ${({ theme }) => theme.inputCursor};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.button`
  width: 100%;
  text-align: center;
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;

const Contact = () => {
  const [open, setOpen] = useState(false);
  const [buttonText, setButtonText] = useState("Send");
  const [theme, setTheme] = useState(darkTheme); // Toggle between themes
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sent successfully");
    emailjs.sendForm('service_7zj9o2d', 'template_n65p2kb', form.current, 'MS6kC4AriwmIg8V0-')
      .then((result) => {
        setOpen(true);
        form.current.reset();
        setTimeout(() => setButtonText("Send"), 3000);
      }, (error) => {
        console.log(error.text);
        setButtonText("Send");
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container id="contact">
        <Wrapper>
          <Title>Contact</Title>
          <ContactForm ref={form} onSubmit={handleSubmit}>
            <ContactTitle>Email Me 🚀</ContactTitle>
            <ContactInput placeholder="Your Email" name="from_email" autoFocus />
            <ContactInput placeholder="Your Name" name="from_name" autoFocus />
            <ContactInput placeholder="Subject" name="subject" autoFocus />
            <ContactInputMessage placeholder="Message" rows="4" name="message" autoFocus />
            <ContactButton type="submit">{buttonText}</ContactButton>
          </ContactForm>
          <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={() => setOpen(false)}
            message="Email sent successfully!"
            severity="success"
          />
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
}

export default Contact;