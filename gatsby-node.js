const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  if(node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({
      node,
      getNode,
      basePath: 'posts',
    });
    createNodeField({
      node,
      name: 'slug',
      value: `/posts${slug}`
    })
  }
}

const createTagPages = (createPage, posts) => {
  const tagPageTemplate = path.resolve('./src/layouts/tag-page.js');
  const allTagsTemplate = path.resolve('./src/layouts/all-tags.js');

  const postsByTags = {}

  posts.forEach( ({ node }) => {
    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach(tag => {
        if (!postsByTags[tag]) {
          postsByTags[tag] = []
        }
        postsByTags[tag].push(node);
      })
    }
  });

  const tags = Object.keys(postsByTags)

  createPage({
    path: `/tags`,
    component: allTagsTemplate,
    context: {
      tags: tags.sort()
    }
  })

  console.log(tags);


  // tags.forEach(tagName => {
  //   const posts = postsByTags[tagName];

  //   createPage({
  //     path: `/tags/${tagName}`,
  //     component: tagPageTemplate,
  //     context: {
  //       posts,
  //       tagName,
  //     }
  //   })
  // })
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                date
                tags
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

      createTagPages(createPage, posts);

      posts.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve('./src/layouts/post.js'),
          context: {
            slug: node.fields.slug,
          },
        })
      })
      resolve();
    })
  })
}