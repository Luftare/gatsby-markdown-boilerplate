import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title;
    const posts = this.props.data.posts.edges;
    const events = this.props.data.events.edges;

    return (
      <div>
        <Helmet title={siteTitle} />
        {posts.map(({ node }) => {
          return (
            <div key={node.fields.slug}>
              <h3><Link to={node.fields.slug}>{node.frontmatter.title}</Link></h3>
              <div>{node.frontmatter.date}</div>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          )
        })}
        <h3>Events</h3>
        {events.map(({ node }) => {
          return (
            <div key={node.fields.slug}>
              <h3><Link to={node.fields.slug}>{node.frontmatter.title}</Link></h3>
              <div>{node.frontmatter.date}</div>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          )
        })}
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query indexQuery {
    site {
      siteMetadata {
        title
      }
    }
    posts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC },
      filter: {fileAbsolutePath: {regex: "/(posts)/.*\\.md$/"}}
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD-MMMM-YYYY")
            title
          }
        }
      }
    }
    events: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC },
      filter: {fileAbsolutePath: {regex: "/(events)/.*\\.md$/"}}
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD-MMMM-YYYY")
            location
            title
          }
        }
      }
    }
  }
`
