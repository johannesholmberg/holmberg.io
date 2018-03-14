const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

const createTagPages = (createPage, posts) => {
  const tagPageTemplate = path.resolve('./src/pages/tags.js');
  const allTagsTemplate = path.resolve('./src/templates/tag.js');

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

  tags.forEach(tagName => {
    const posts = postsByTags[tagName];

    createPage({
      path: `/tags/${tagName}`,
      component: tagPageTemplate,
      context: {
        posts,
        tagName
      }
    })
  })
}

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  if(node.internal.type === 'MarkdownRemark') {

    let basePath = 'posts/notebook';

    if (node.frontmatter.layout === 'page') {
      basePath = 'pages';
    }

    if (node.frontmatter.layout === 'case') {
      basePath = 'posts/work';
    }

    let slug = createFilePath({ node, getNode, basePath });

    if (node.frontmatter.layout === 'post') {
      let nameArr = slug.replace(/\//g, "").split("-");
      date = nameArr.splice(0, 2).join("/");
      slug = nameArr.splice(1, 100).join("-");
      slug = `/${date}/${slug}`;
    }

    if (node.frontmatter.layout === 'case') {
      slug = `/work${slug}`;
    }

    createNodeField({
      node,
      name: 'slug',
      value: slug
    });

  }
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
