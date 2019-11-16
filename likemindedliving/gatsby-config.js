require('dotenv').config()

module.exports = {
  siteMetadata: {
    siteUrl: `https://likemindedliving.co.uk`,
    title: `Like-Minded Living`,
    description: `We use technology to search across all major listing sites, to find your dream rental home, so you don’t have to. Search now, Discover a new way to find properties`,
    address: {
      house: `Chester House`,
      street: `81 - 83 Fulham High Street`,
      town: `Fulham`,
      city: `London`,
      postal: `SW6 3JA`,
      tel: `+44 207 859 4781`,
      email: `property@likemindedliving.co.uk`,
    },
    social: {
      fb: `https://www.facebook.com/likemindedliving/`,
      insta: `https://www.instagram.com/likemindedliving/`,
      twitter: `https://twitter.com/likemindedlvng/`,
    },
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
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en',
      },
    },
    {
      resolve: `gatsby-plugin-htaccess`,
      options: {
        https: true,
        host: `likemindedliving.co.uk`,
        custom: `ErrorDocument 404 /404.html`,
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
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://likemindedliving.co.uk',
        sitemap: 'https://likemindedliving.co.uk/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://likemindedliving.co.uk`,
        stripQueryString: true,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Likeminded Living`,
        short_name: `LML`,
        start_url: `/`,
        background_color: `#FFF`,
        theme_color: `#FFF`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
        icons: [
          {
            src: '/favicons/icons/icon-72x72.png',
            sizes: '72x72',
            type: 'image/png',
          },
          {
            src: '/favicons/icons/icon-96x96.png',
            sizes: '96x96',
            type: 'image/png',
          },
          {
            src: '/favicons/icons/icon-128x128.png',
            sizes: '128x128',
            type: 'image/png',
          },
          {
            src: '/favicons/icons/icon-144x144.png',
            sizes: '144x144',
            type: 'image/png',
          },
          {
            src: '/favicons/icons/icon-152x152.png',
            sizes: '152x152',
            type: 'image/png',
          },
          {
            src: '/favicons/icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/favicons/icons/icon-384x384.png',
            sizes: '384x384',
            type: 'image/png',
          },
          {
            src: '/favicons/icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
  ],
}
