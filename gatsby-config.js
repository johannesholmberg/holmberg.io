module.exports = {
  siteMetadata: {
    title: 'Johannes Holmberg',
    description: '',
    siteUrl: `https://holmberg.io`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
            }
          },
          {
            resolve: `gatsby-remark-embed-youtube`,
            options: {
              width: 1000,
            }
          },
          {
            resolve: `gatsby-remark-embed-video`,
            options: {
              width: 1000,
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
              sizeByPixelDensity: true,
            },
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-responsive-iframe`,
        ],
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'img',
        path: `${__dirname}/src/assets/images/`
      }
    },
  ],
};
