require("dotenv").config()

module.exports = {
  siteMetadata: {
    siteUrl: `https://rkkcollective.com`,
    title: `Like-Minded Living`,
    description: `We use technology to search across all major listing sites, to find your dream rental home, so you don’t have to. Search now, Discover a new way to find properties`,
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
      twitter: `https://twitter.com/likemindedlvng/`
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
      resolve: `gatsby-plugin-portal`,
      options: {
        key: 'portal',
        id: 'portal',
      },
    },
    {
      resolve: `gatsby-plugin-htaccess`,
      options: {
        https: true,
        host: `rkkcollective.com`,
        custom: `ErrorDocument 404 /404.html`
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
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://rkkcollective.com',
        sitemap: "http://rkkcollective.com/sitemap.xml",
        policy: [{ userAgent: '*', disallow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://rkkcollective.com'`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `LikeMinded Living`,
        short_name: `LML`,
        start_url: `/`,
        background_color: `#FFF`,
        theme_color: `#FFF`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
