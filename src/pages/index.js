import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title;
    const posts = this.props.data.allMarkdownRemark.edges;

    return (
      <div>
        <Helmet title={siteTitle} />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3><Link to={node.fields.slug}>{title}</Link></h3>
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
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
  }
`
