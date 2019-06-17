require('dotenv').config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: 'Artemis Midwifery',
    siteUrl: `https://artemismidwiferylondon.com`,
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-root-import',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.SANITY_ID,
        dataset: 'production',
        token: process.env.SANITY_TOKEN,
        watchMode: true,
        overlayDrafts: true,
        saveImages: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Artemis Midwifery - Antenatal Classes London',
        short_name: 'Artemis Midwifery',
        start_url: '/',
        display: 'browser',
        theme_color: '#000',
        background_color: '#FFFFFF',
        icon: `static/imgs/logo.jpg`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-stripe`,
    },
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        whitelist: ['STRIPE_ARTEMIS'],
      },
    },
  ],
};
