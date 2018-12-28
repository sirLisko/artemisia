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
        queries: [
          {
            name: 'person',
            type: 'Person',
            groq: `
              *[_type == 'person']{
                _id,
                name,
                slug,
                quote,
                overview
              }
            `,
          },
        ],
      },
    },
  ],
};
