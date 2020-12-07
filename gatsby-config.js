const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = "https://www.materialx.co.uk",
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env
const isNetlifyProduction = NETLIFY_ENV === "production"
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL

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
      `drug discovery`,
    ],
    author: `Matteo Ricci`,
    siteUrl,
    menuLinks: [
      {
        name: `Company`,
        link: `#company`,
        type: `internal`,
      },
      {
        name: `Case studies`,
        link: `#case-studies`,
        type: `anchor`,
      },
      {
        name: `Team`,
        link: `#team`,
        type: `anchor`,
      },
      {
        name: `Contact`,
        link: `#contact`,
        type: `anchor`,
      },
    ],
    socialLinks: [
      {
        name: `Email`,
        link: `customerservice@materialx.co.uk`,
        location: `footer`,
      },
      {
        name: `Github`,
        link: `https://github.com/matteoeghirotta/lammps.git`,
        location: `all`,
      },
      {
        name: `Twitter`,
        link: `https://twitter.com/MaterialxU`,
        location: `all`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-theme-catalyst-core`,
      options: {
        displaySiteTitle: false,
        displaySiteTitleMobile: false,
        invertSiteLogo: false,
        mobileMenuBreakpoint: "580px",
        useStickyHeader: true,
        assetPath: `content/site-assets`,
      },
    },
    `gatsby-theme-catalyst-header-top`,
    {
      resolve: `gatsby-theme-catalyst-blog`,
      options: {
        basePath: "/blog",
        excerptLength: 300,
        assetPath: `content/post-assets`,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: "*" }],
          },
          "branch-deploy": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
          "deploy-preview": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
        },
      },
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
        icon: `content/site-assets/materialx-site-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              width: 800,
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              // height: 800, // Optional: Overrides optional.ratio
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
              urlOverrides: [
                {
                  id: "youtube",
                  embedURL: videoId =>
                    `https://www.youtube-nocookie.com/embed/${videoId}`,
                },
              ], //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
              containerClass: "embedVideo-container", //Optional: Custom CSS class for iframe container, for multiple classes separate them by space
            },
          },
        ],
      },
    },
  ],
}
