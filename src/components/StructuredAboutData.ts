import siteData from "../static/siteData.json"

export default {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: siteData.siteUrl,
  image: siteData.siteUrl+"/ogImage.png",
  headline: siteData.about.title,
  description: siteData.about.description,
  keywords: siteData.about.keywords,
  author: {
    "@type": "Organization",
    name: siteData.shopName,
  },
  publisher: {
    "@type": "Organization",
    name: siteData.about.shopName,
  },
};