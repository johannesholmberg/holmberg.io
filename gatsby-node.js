const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

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


  tags.forEach(tagName => {
    const posts = postsByTags[tagName];

    // createPage({
    //   path: `/tags/${tagName}`,
    //   component: tagPageTemplate,
    //   context: {
    //     posts,
    //     tagName
    //   }
    // })
  })
}

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  if(node.internal.type === 'MarkdownRemark') {
    let basePath = 'posts';

    if (node.frontmatter.layout === 'page') {
      basePath = 'pages';
    }

    if (node.frontmatter.layout === 'case') {
      basePath = 'posts/work';
    }

    let title = node.frontmatter.title;
    let date = node.frontmatter.date;


      let nameArr = slug.replace(/\//g, "").split("-");
      date = nameArr.splice(0, 3).join("-");
      title = nameArr.join(" ").replace(".md", "");
    }

    //slug = `/hej`;


    let slug = createFilePath({ node, getNode, basePath });

    console.log(date, slug);


    createNodeField({
      node,
      name: 'slug',
      value: slug
    });

    createNodeField({
      node,
      name: "title",
      value: title
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
        if (node.frontmatter.layout === 'case') {
          createPage({
            path: node.fields.slug,
            component: path.resolve('./src/templates/case.js'),
            context: {
              slug: node.fields.slug,
            },
          })
        } else if (node.frontmatter.layout === 'page') {
          createPage({
            path: node.fields.slug,
            component: path.resolve('./src/templates/page.js'),
            context: {
              slug: node.fields.slug,
            },
          })
        } else {
          createPage({
            path: node.fields.slug,
            component: path.resolve('./src/templates/post.js'),
            context: {
              slug: node.fields.slug,
            },
          })
        }


      })
      resolve();
    })
  })
}
