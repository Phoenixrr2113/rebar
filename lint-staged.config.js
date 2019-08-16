// modeled after: https://github.com/docta/docta/blob/3569255b94789c7b205f97d225b31de7cd2c7b26/.lintstagedrc.js

const read = require('fs').readFileSync
const relative = require('path').relative
const resolve = require('path').resolve

const ignore = require('ignore')
const micromatch = require('micromatch')

// Ignores function.
const ig = (file) => {
  const filepath = resolve(__dirname, file)
  const filedata = read(filepath).toString()
  return ignore().add(filedata)
}

// Ignores
const eslint = ig('.eslintignore')
const prettier = ig('.prettierignore')

// Filtering
module.exports = {
  '*': (files) => {
    files = files.map((file) => {
      const cmd = []

      file = relative(process.cwd(), file)

      //   if (
      //     micromatch.isMatch(file, 'units/**/*.{js,jsx}', { dot: true }) &&
      //     !eslint.ignores(file)
      //   ) {
      //     cmd.push(`eslint --color --fix ${file}`)
      //   }

      if (
        micromatch.isMatch(file, 'units/**/*.{css,js,jsx,json,md,scss,yml}', {
          dot: true
        }) &&
        !eslint.ignores(file) &&
        !prettier.ignores(file)
      ) {
        cmd.push(`prettier-eslint --prettier-last --write ${file}`)
      }

      if (cmd.length > 0) {
        cmd.push(`git add ${file}`)
      }

      return cmd.length > 0 ? cmd.join(' && ') : null
    })

    return files.filter((cmd) => cmd !== null)
  }
}
