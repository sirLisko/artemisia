require("dotenv").config({
  path: `.env`
});

module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.SANITY_ID,
        queries: [
          {
            name: "person",
            type: "Person",
            groq: `
              *[_type == 'person']{
                _id,
                name,
                slug,
                quote,
                overview
              }
            `
          }
        ]
      }
    }
  ]
};
