module.exports = {
  siteMetadata: {
    title: 'Johannes Holmberg',
    description: '',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        name: 'img',
        path: `${__dirname}/src/assets/images`,
        plugins: [
          {
            resolve: `gatsby-remark-embed-youtube`,
            options: {
              width: 800,
              ratio: 1.77,
            }
          },
          {
            resolve: `gatsby-remark-embed-video`,
            options: {
              width: 800,
              ratio: 1.77,
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
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
