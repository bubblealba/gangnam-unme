const path = require('path');
const siteData = require("./src/static/siteData.json");

exports.createPages = ({ actions }) => {
    const { createPage } = actions
    createPage({
        path: `/${siteData.about.name}`,
        component: path.resolve('./src/components/about.tsx'),
    })
}