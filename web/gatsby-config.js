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
        saveImages: true,
        queries: [
          {
            name: 'person',
            type: 'Person',
            groq: `*[_type == 'person']`,
          },
          {
            name: 'info',
            type: 'Info',
            groq: `*[_type == 'info']`,
          },
          {
            name: 'story',
            type: 'Story',
            groq: `*[_type == 'story']`,
          },
          {
            name: 'course',
            type: 'Course',
            groq: `*[_type == 'course']`,
          },
          {
            name: 'sitePopup',
            type: 'SitePopup',
            groq: `*[_type == 'sitePopup']`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
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
    {
      resolve: `gatsby-plugin-stripe`,
      options: {
        async: true,
      },
    },
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        whitelist: ['STRIPE_ARTEMIS'],
      },
    },
  ],
};
