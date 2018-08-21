import React from 'react'
import Link from 'gatsby-link'

class Template extends React.Component {
  render() {
    const { location, children } = this.props

    return (
      <div>
        <h1>Hello.</h1>
        {children()}
      </div>
    )
  }
}

export default Template
