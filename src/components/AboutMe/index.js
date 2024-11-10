import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  margin-top: 100px;
`

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  margin-top: 100px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};  // White for dark mode, black for light mode
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }

  span {
    color: blue;  // Set "Me" in light blue color
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 1000px;
  margin: 60px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const About = () => {
    return (
        <Container id="aboutme">
            <Wrapper>
                <Title>
                    About <span>Me</span> {/* Apply lightblue color to "Me" */}
                </Title>
                <Desc>
                    I’m a Full Stack Developer with a strong foundation in HTML, CSS, JavaScript, Bootstrap, SQL, MongoDB, Node.js, Express.js, ReactJS, and Figma. I’m passionate about using these skills to develop innovative web applications that are user-friendly. I’m always eager to learn more about web development and marketing. I enjoy the challenge of coding and solving real-world problems. Currently, I’m looking for opportunities to join a team that values innovation and shares my enthusiasm for technology.
                </Desc>
            </Wrapper>
        </Container>
    )
}

export default About;
