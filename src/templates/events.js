import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Hero from '../components/Hero';
import Column from '../components/Column';

class EventTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title;

    return (
      <div>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <h4>{post.frontmatter.title}</h4>
        <Hero src={post.frontmatter.featureImage.publicURL} />
        <Column>
          <p>{post.frontmatter.date}</p>
          <p>{post.frontmatter.location}</p>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Column>
      </div>
    )
  }
}

export default EventTemplate;

export const pageQuery = graphql`
  query EventBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        location
        date(formatString: "MMMM DD, YYYY @HH.mm")
        featureImage {
          publicURL
        }
      }
    }
  }
`
