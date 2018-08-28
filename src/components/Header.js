import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link'

const Title = styled.div`
  color: white;
`;

const Container = styled.div`
  padding: 30px 0;
  text-align: center;
  background-color: grey;
`;

const Header = ({ children }) => (
  <Container>
    <Link to="/" style={{ textDecoration: 'none' }}>
      <Title>{children}</Title>
    </Link>
  </Container>
)

export default Header;
