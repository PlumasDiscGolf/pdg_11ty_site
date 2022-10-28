const { DateTime } = require('luxon')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/css/freelancer.css')
  eleventyConfig.addPassthroughCopy('./src/css/custom.css')
  eleventyConfig.addPassthroughCopy('./src/assets')
  eleventyConfig.addPassthroughCopy('./src/admin')

  eleventyConfig.addFilter('postDate', (dateObj) => {
    return DateTime.fromJSDate(dateObj)
      .plus({ days: 1})
      .setLocale('en-US')
      .toLocaleString(DateTime.DATE_MED)
  })

  return {
    dir: {
      input: 'src',
      output: 'public',
    },
  }
}