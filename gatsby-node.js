const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === 'MarkdownRemark') {
    let basePath = ''
    const { layout } = node.frontmatter

    if (layout === 'post') {
      basePath = 'posts/notebook'
    }

    if (layout === 'case') {
      basePath = 'posts/work'
    }

    if (
      layout === 'page' ||
      layout === 'notebook' ||
      layout === 'work'
    ) {
      basePath = 'pages'
    }

    let slug = createFilePath({ node, getNode, basePath })

    if (layout === 'post') {
      let nameArr = slug.replace(/\//g, '').split('-')
      const date = nameArr.splice(0, 2).join('/')
      slug = nameArr.splice(1, 100).join('-')
      slug = `/${date}/${slug}`
    }

    if (layout === 'case') {
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

      const posts = result.data.allMarkdownRemark.edges

      posts.forEach(({ node }) => {
        const { layout } = node.frontmatter
        const baseTemplatePath = './src/templates'
        let templatePath = ''

        if (layout === 'post') {
          templatePath = `${baseTemplatePath}/post.js`
        } else if (layout === 'index') {
          templatePath = `./src/pages/index.js`
        } else if (layout === 'page') {
          templatePath = `${baseTemplatePath}/page.js`
        } else if (layout === 'notebook') {
          templatePath = `${baseTemplatePath}/notebook.js`
        } else if (layout === 'work') {
          templatePath = `${baseTemplatePath}/work.js`
        } else if (layout === 'case') {
          templatePath = `${baseTemplatePath}/case.js`
        }

        createPage({
          path: node.fields.slug,
          component: path.resolve(templatePath),
          context: {
            slug: node.fields.slug,
          },
        })
      })
      resolve()
    })
  })
}
