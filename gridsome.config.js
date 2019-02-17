// This is where project configuration and installed plugin options are located.
// Learn more: https://gridsome.org/docs/config

module.exports = {
  siteName: "Johannes Holmberg",
  siteUrl: "https://holmberg.io",
  siteDescription: "Johannes Holmberg is a UI developer and designer living in Basel, Switzerland.",

  transformers: {
    remark: {}
  },

  plugins: [
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-20488297-3',
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "src/posts/work/**/*.md",
        typeName: "Post",
        route: '/work/:slug'
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "src/pages/**/*.md",
        typeName: "MarkdownPage",
        route: '/:slug'
      }
    },
  ]
}