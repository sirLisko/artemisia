require('dotenv').config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: 'Artemis Midwifery',
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
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA,
      },
    },
  ],
};
