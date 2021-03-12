const fs = require('fs')
const JSON5 = require('json5')
const mustache = require('mustache')

const theme = JSON5.parse(
  fs.readFileSync(`${__dirname}/color-theme.json`, (err, data) => data)
)

const template = mustache.render(JSON5.stringify(theme, null, 2))

console.log(template)