/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://team-dose-t.netlify.app/', // replace with your Netlify URL
  generateRobotsTxt: true, // generate robots.txt file
  sitemapSize: 5000, // optional, max URLs per sitemap
  changefreq: 'daily', // optional, how often pages are updated
  priority: 0.7, // optional, default priority for pages
}
