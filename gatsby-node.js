const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === 'MarkdownRemark') {
    let basePath = 'posts/notebook'

    if (node.frontmatter.layout === 'page') {
      basePath = 'pages'
    }

    if (node.frontmatter.layout === 'case') {
      basePath = 'posts/work'
    }

    let slug = createFilePath({ node, getNode, basePath })

    if (node.frontmatter.layout === 'post') {
      let nameArr = slug.replace(/\//g, '').split('-')
      const date = nameArr.splice(0, 2).join('/')
      slug = nameArr.splice(1, 100).join('-')
      slug = `/${date}/${slug}`
    }

    if (node.frontmatter.layout === 'case') {
      slug = `/work${slug}`
    }

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise(resolve => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                layout
                title
                date
                # tags
              }
            }
          }
        }
      }
    `).then(result => {

      if (result.errors) {
        return Promise.reject(result.errors)
      }

      const posts = result.data.allMarkdownRemark.edges;

      //createTagPages(createPage, posts);

      posts.forEach(({ node }) => {
        let templatePath = './src/templates/post.js';
        if (node.frontmatter.layout === 'page') {
          templatePath = './src/templates/page.js';
        } else if (node.frontmatter.layout === 'case') {
          templatePath = './src/templates/case.js';
        }

        createPage({
          path: node.fields.slug,
          component: path.resolve(templatePath),
          context: {
            slug: node.fields.slug,
          },
        })

      })
      resolve();
    })
  })
}
