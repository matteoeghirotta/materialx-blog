const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://www.materialx.co.uk',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env
const isNetlifyProduction = NETLIFY_ENV === 'production'
const siteUrl = isNetlifyProduction
  ? NETLIFY_SITE_URL
  : NETLIFY_DEPLOY_URL

module.exports = {
  siteMetadata: {
    title: `materialx`,
    description: `Company providing molecular modelling and simulations consultancy and software`,
    keywords: [
      `molecular modelling`,
      `software`,
      `organic semiconductors`,
      `polymers`,
      `biomolecules`,
      `simulations`,
      `molecular dynamics`,
      `drug discovery`
    ],
    author: `Matteo Ricci`,
    siteUrl,
    menuLinks: [
      {
        name: `Company`,
        link: `#company`,
        type: `internal`
      },
      {
        name: `Case studies`,
        link: `#case-studies`,
        type: `anchor`
      },
      {
        name: `Publications`,
        link: `#publications`,
        type: `anchor`
      },
      {
        name: `Team`,
        link: `#team`,
        type: `anchor`
      },
      {
        name: `Contact`,
        link: `#contact`,
        type: `anchor`
      }
    ],
    socialLinks: [
      {
        name: `Email`,
        link: `customerservice@materialx.co.uk`,
        location: `footer`
      },
      {
        name: `Github`,
        link: `https://github.com/matteoeghirotta/lammps.git`,
        location: `all`
      },
      {
        name: `Twitter`,
        link: `https://twitter.com/MaterialxU`,
        location: `all`
      }
    ]
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-theme-catalyst-core`,
      options: {
        displaySiteTitle: false,
        displaySiteTitleMobile: false,
        invertSiteLogo: false,
        mobileMenuBreakpoint: '580px',
        useStickyHeader: true,
        assetPath: `content/site-assets`
      }
    },
    `gatsby-theme-catalyst-header-top`,
    {
      resolve: `gatsby-theme-catalyst-blog`,
      options: {
        basePath: '/blog',
        excerptLength: 300,
        assetPath: `content/post-assets`
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: '*' }]
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          }
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `materialx`,
        short_name: `materialx`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `content/site-assets/materialx-site-icon.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "UA-159568966-1" // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        //gtagConfig: {
          //optimize_id: "OPT_CONTAINER_ID",
          //anonymize_ip: true,
          //cookie_expires: 0,
        //},
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: [],
          // Defaults to https://www.googletagmanager.com
          //origin: "YOUR_SELF_HOSTED_ORIGIN",
        }
      }
    }
  ]
}
