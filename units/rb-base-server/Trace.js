// @flow

import util from 'util'

import chalk from 'chalk'

const debugLogColors = [
  //chalk.bgRed.redBright,
  chalk.bgRed.greenBright,
  chalk.bgRed.yellowBright,
  //chalk.bgRed.blueBright,
  chalk.bgRed.magentaBright,
  chalk.bgRed.cyanBright,
  chalk.bgRed.whiteBright,
  //
  //chalk.bgGreen.redBright,
  //chalk.bgGreen.greenBright,
  chalk.bgGreen.yellowBright,
  chalk.bgGreen.blueBright,
  //chalk.bgGreen.magentaBright,
  //chalk.bgGreen.cyanBright,
  chalk.bgGreen.whiteBright,
  //
  //chalk.bgYellow.redBright,
  //chalk.bgYellow.greenBright,
  //chalk.bgYellow.yellowBright,
  chalk.bgYellow.blueBright,
  //chalk.bgYellow.magentaBright,
  //chalk.bgYellow.cyanBright,
  //chalk.bgYellow.whiteBright,
  //
  //chalk.bgBlue.redBright,
  chalk.bgBlue.greenBright,
  chalk.bgBlue.yellowBright,
  //chalk.bgBlue.blueBright,
  chalk.bgBlue.magentaBright,
  chalk.bgBlue.cyanBright,
  chalk.bgBlue.whiteBright,
  //
  //chalk.bgMagenta.redBright,
  chalk.bgMagenta.greenBright,
  chalk.bgMagenta.yellowBright,
  //chalk.bgMagenta.blueBright,
  //chalk.bgMagenta.magentaBright,
  //chalk.bgMagenta.cyanBright,
  chalk.bgMagenta.whiteBright,
  //
  chalk.bgCyan.redBright,
  //chalk.bgCyan.greenBright,
  chalk.bgCyan.yellowBright,
  //chalk.bgCyan.blueBright,
  //chalk.bgCyan.magentaBright,
  //chalk.bgCyan.cyanBright,
  chalk.bgCyan.whiteBright
]

const debugLogColorsLength = debugLogColors.length

const applyDebugColorCache = {}
function applyDebugColor(str: string) {
  // Cached?
  const cachedColor = applyDebugColorCache[str]
  if (cachedColor) {
    return cachedColor(str)
  }

  let hash: number = 0
  if (str.length === 0) throw new Error('assert')
  for (let i = 0; i < str.length; i++) {
    const chr = str.charCodeAt(i)
    hash = (hash << 5) - hash + chr
    hash |= 0 // Convert to 32bit integer
  }

  const debugColor = debugLogColors[Math.abs(hash) % debugLogColorsLength]
  applyDebugColorCache[str] = debugColor

  return debugColor(str)
}

export default class Trace {
  level: number

  constructor() {
    this.level = 0
  }

  next(extraLevels?: number): Trace {
    const next = new Trace()
    next.level = this.level + 1

    if (extraLevels) {
      next.level += extraLevels
    }

    return next
  }

  add(description: string, object: Object, extraLevels?: number) {
    const currentLevel: number = this.level + (extraLevels ? extraLevels : 0)

    let preamble = ''

    for (let level = currentLevel; level > 0; level--) {
      preamble += chalk.gray('╎') + '   '
    }

    const strContent =
      applyDebugColor(description) +
      ' ' +
      util.inspect(object, { depth: 1000, breakLength: 150, colors: true })
    const arrContent = strContent.replace('\r', '').split('\n')

    for (let content of arrContent) {
      console.log(preamble + content)
    }
  }
}
