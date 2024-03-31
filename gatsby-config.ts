import type { GatsbyConfig } from "gatsby";
import siteData from "./src/static/siteData.json"

const config: GatsbyConfig = {
  siteMetadata: {
    title: siteData.title,
    description: siteData.description,
    image: `./src/static/images/icon.png`,
    siteUrl: siteData.siteUrl,
  },
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-image", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name : siteData.shopName,
      short_name: siteData.shopName,
      description : siteData.description,
      start_url : "/",
      display : "standalone",
      theme_color : "#000000",
      background_color : "#000000",
      lang : "ko",
      orientation : "portrait-primary",
      icon: "./src/static/images/icon.png",
      icon_options: {
        purpose: `any maskable`,
      },
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/static/images/"
    },
    __key: "images"
  }]
};

export default config;
