const site = require('./src/_data/site');

module.exports = function(eleventyConfig) {
  // watch everything in ./src for changes  
  eleventyConfig.addWatchTarget('./src')

  // copy images & fonts to the build 
  eleventyConfig.addPassthroughCopy('src/images')
  eleventyConfig.addPassthroughCopy('src/fonts')

  // add the absolute url to css, js, and images
  eleventyConfig.addFilter("toAbsoluteUrl", (url) => {
    const urlParts = url.split("?");
    const params = new URLSearchParams(urlParts[1] || "");
    params.set("v", new Date().getTime());
    const nonCacheUrl = new URL(url, site.baseUrl).href
    return `${nonCacheUrl}?${params}`;
  })

  eleventyConfig.addNunjucksShortcode("carouselItem", function (item) {
    return `<div class="carousel-item ${item.active ? `active` : ''}">
              <div class="quote" id=${item.id}>
                <p>
                  ${item.title}
                </p>
                <cite>
                  ${item.citeTitle1}
                  <small> ${item.citeTitle2}</small>
                </cite>
              </div>
            </div>`;
  });
  
  return {
    dir: {
      input: 'src', 
      output: '.build',
      data: '_data',
    },
    templateFormats: ['njk', 'md', '11ty.js'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk'
  }
};