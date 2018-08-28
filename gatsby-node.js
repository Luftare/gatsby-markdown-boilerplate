const Promise = require('bluebird')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              sort: { fields: [frontmatter___date], order: DESC }, limit: 1000
            ) {
              edges {
                node {
                  fileAbsolutePath
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    location
                    featureImage {
                      publicURL
                    }
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create blog posts pages.
        const posts = result.data.allMarkdownRemark.edges;

        posts.forEach((post, index) => {
          console.log(post.node.fileAbsolutePath, post.node)
          const typeName = post.node.fileAbsolutePath.match(/src\/pages\/(.*?)\//)[1];
          const component = path.resolve(`./src/templates/${typeName}.js`);

          createPage({
            path: post.node.fields.slug,
            component,
            context: {
              slug: post.node.fields.slug,
            },
          })
        })
      })
    )
  })
}

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
