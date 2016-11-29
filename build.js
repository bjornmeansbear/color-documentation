// build.js
// from http://jxnblk.com/writing/posts/color-palette-documentation-for-living-style-guides/
// uses http://jxnblk.com/colorable/
// and https://github.com/postcss/postcss
// and https://www.npmjs.com/package/color

var _ = require('lodash')
var fs = require('fs')
var parseColors = require('./lib/parse-colors')
var parseCombos = require('./lib/parse-combos')

var css = fs.readFileSync('mgs2017.css', 'utf8')
// Read the template string
var template = fs.readFileSync('template.html', 'utf8')
// Create a lodash template function
var tpl = _.template(template)
var colors = parseColors(css)
var combos = parseCombos(colors)

// Render the template function to an HTML string
var html = tpl({
  colors: colors,
  combos: combos
})

// Write an HTML file to disk
fs.writeFileSync('index.html', html)
