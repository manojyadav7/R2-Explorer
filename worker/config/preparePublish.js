var fs = require('fs')

const files = ['worker/bin/r2-explorer.js', 'worker/package.json']

for (const file of files) {
  fs.readFile(file, 'utf8', function (err, data) {
    if (err) {
      return console.log(err)
    }

    const version = process.env.RELEASE_VERSION.replace('v', '')
    const result = data.replace('VERSION_TO_BE_TAGGED', version)

    fs.writeFile(file, result, 'utf8', function (err) {
      if (err) return console.log(err)
    })
  })
}

fs.readFile('README.md', 'utf8', function (err, data) {
  if (err) {
    return console.log(err)
  }

  fs.writeFile('worker/README.md', data, 'utf8', function (err) {
    if (err) return console.log(err)
  })
})
