import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  color: white;
  text-transform: uppercase;
  font-size: 40px;
  text-shadow: 1px 1px 1px black;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  background-image: url('${props => props.src}');
  background-position: center;
  background-size: cover;
`;

const Hero = ({ children, ...props }) => (
  <Container {...props}>
    <Title>{children}</Title>
  </Container>
)

export default Hero;
