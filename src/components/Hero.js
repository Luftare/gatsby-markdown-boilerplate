import React from 'react';
import styled from 'styled-components';

export default styled.div`
  height: 200px;
  background-image: url('${props => props.src}');
  background-position: center;
  background-size: cover;
`;
