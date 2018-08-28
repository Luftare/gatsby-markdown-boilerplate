import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link'

const Title = styled.div`
  color: white;
  font-weight: bold;
`;

const Container = styled.div`
  padding: 30px 24px;
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
