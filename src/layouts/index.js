import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import './index.css';

import Header from '../components/Header';

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div>
        <Header>Hello.</Header>
        {children()}
      </div>
    )
  }
}

export default Template
