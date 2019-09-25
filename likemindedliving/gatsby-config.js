module.exports = {
  siteMetadata: {
    siteUrl: `http://rkkcollective.com`,
    title: `Like-Minded Living`,
    description: `Specialists for rooms for rent and flatshare in London`,
    address: {
      house: `Chester House`,
      street: `81 - 83 Fulham High Street`,
      town: `Fulham`,
      city: `London`,
      postal: `SW6 3JA`,
      tel: `+44 207 859 4781`,
      email: `property@likemindedliving.co.uk`      
    },
    social: {
      fb: `https://www.facebook.com/likemindedliving/`,
      insta: `https://www.instagram.com/likemindedliving/`,
      twitter: `@LikeMindedLvng`
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `WPBlogsGraphQL`,
        fieldName: `blogs`,
        url: `https://likemindedliving.co.uk/blog/graphql`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pdf`,
        path: `${__dirname}/src/pdf`,
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'http://www.rkkcollective.com',
        policy: [{ userAgent: '*', disallow: '/' }]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        //icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
