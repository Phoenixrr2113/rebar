// @flow

import {
  templTag_arr,
  templTag_arrOr,
  templTag_arrRep,
  templTag_arrVar,
  templTag_isNull,
  templTag_in,
  templTag_notNull,
  templTag_replArr,
  templTag_replObj,
} from './templateTags'

export function stringToTokenArray(source: string) {
  const result = []

  let accumulated = ''
  for (let c of source) {
    if (
      (c >= 'a' && c <= 'z') ||
      (c >= 'A' && c <= 'Z') ||
      (c >= '0' && c <= '9')
    ) {
      accumulated += c
    } else {
      if (accumulated.length > 0) {
        result.push({ word: { text: accumulated.toLowerCase() } })
        accumulated = ''
      }
      if (c !== ' ') {
        result.push({ symbol: { text: c } })
      }
    }
  }

  if (accumulated.length > 0) {
    result.push({ word: { text: accumulated.toLowerCase() } })
    accumulated = ''
  }

  return result
}

export function matchObject(token: any, condition: any): boolean {
  if (
    typeof condition === 'string' ||
    typeof condition === 'number' ||
    typeof condition === 'boolean'
  ) {
    return token === condition
  }

  // Check for in condition
  if (typeof condition === 'object') {
    const inCondition = condition[templTag_in]

    if (inCondition) {
      // In condition - match until one match is found
      for (let inConditionOption of inCondition) {
        if (matchObject(token, inConditionOption)) {
          return true
        }
      }
    }

    // Compare constant arrays
    if (Array.isArray(token)) {
      // If token is array, condition should also be an array, or array template
      if (!Array.isArray(condition)) {
        const templateInfo = condition[templTag_arr]

        if (templateInfo) {
          return matchArray(token, templateInfo).match
        } else {
          return false
        }
      }

      // For arrays, make sure they have the same length
      if (token.length !== condition.length) {
        return false
      }
    } // if ( Array.isArray( token ) )

    for (let ix in condition) {
      const tokenValue = token[ix]
      const conditionValue = condition[ix]

      if (conditionValue === templTag_notNull) {
        if (tokenValue == null) {
          return false
        } else {
          continue
        }
      }
      if (conditionValue === templTag_isNull) {
        if (tokenValue != null) {
          return false
        } else {
          continue
        }
      }

      const typeOfValue = typeof tokenValue
      const typeOfCondition = typeof conditionValue

      if (typeOfCondition === 'object') {
        // Regular object - match recursively, if the object is of the same type

        if (typeOfValue !== typeOfCondition) {
          return false
        }
        if (!matchObject(tokenValue, conditionValue)) {
          return false
        }
      } else {
        if (tokenValue !== conditionValue) {
          return false
        }
      } // if ( typeOfCondition === 'object' )
    } // for ( let ix in condition )
  } // if ( typeof condition === 'object' )

  return true
}

export function matchArray(
  arrTokens: Array<any>,
  templateInfo: { float?: boolean, template: Array<any> },
):
  | { match: false }
  | {
      ixStart: number,
      ixStop: number,
      match: true,
      variables: { [string]: any },
    } {
  const { template, float } = templateInfo

  const variables: { [string]: any } = {}

  if (!float) {
    const tryMatchWhole = matchArrayPiece(arrTokens, template, 0, 0, variables)

    if (!tryMatchWhole.match) {
      return { match: false }
    } else if (tryMatchWhole.ixTokens === arrTokens.length) {
      return {
        ixStart: 0,
        ixStop: arrTokens.length - 1,
        match: true,
        variables,
      }
    } else {
      return { match: false }
    }
  } else {
    const lenPayload = arrTokens.length

    for (let ixStart = 0; ixStart < lenPayload; ixStart++) {
      const tryMatchPart = matchArrayPiece(
        arrTokens,
        template,
        ixStart,
        0,
        variables,
      )

      if (tryMatchPart.match) {
        return {
          ixStart,
          ixStop: tryMatchPart.ixTokens - 1,
          match: true,
          variables,
        }
      }
    }

    // Template not found, so it is false
    return { match: false }
  }
}

function matchArrayPiece(
  arrTokens: Array<any>,
  arrTemplate: Array<any>,
  ixTokens: number,
  ixTemplate: number,
  variables: { [string]: any },
): { match: false } | { match: true, ixTokens: number, ixTemplate: number } {
  const lengthTokens = arrTokens.length
  const lengthTemplate = arrTemplate.length

  for (;;) {
    // No more template elements
    if (ixTemplate >= lengthTemplate) {
      return { match: true, ixTokens, ixTemplate }
    }

    // No more token
    if (ixTokens >= lengthTokens) {
      // We are out of tokens, but not out of template. The only way for this to be a match
      // is for the rest of the template to be templTag_arrOr with min = 0. Check if this
      // is the case
      for (; ixTemplate < lengthTemplate; ixTemplate++) {
        const arrRepOptions = arrTemplate[ixTemplate][templTag_arrRep]

        if (arrRepOptions && arrRepOptions.min === 0) continue
        else break
      }

      // Going through the loop exhausted the rest of the template?
      if (ixTemplate >= lengthTemplate) {
        return { match: true, ixTokens, ixTemplate }
      }

      return { match: false }
    }

    const elementTemplate = arrTemplate[ixTemplate]
    const arrOrOptions = elementTemplate[templTag_arrOr]
    const arrRepOptions = elementTemplate[templTag_arrRep]
    const arrVarOptions = elementTemplate[templTag_arrVar]

    if (arrOrOptions) {
      let bOptionMatchFound = false
      for (let orOption of arrOrOptions) {
        const optionMatch = matchArrayPiece(
          arrTokens,
          orOption,
          ixTokens,
          0,
          variables,
        )

        if (optionMatch.match) {
          bOptionMatchFound = true

          ixTokens = optionMatch.ixTokens
          ixTemplate++

          break
        }
      }

      if (!bOptionMatchFound) {
        return { match: false }
      }
    } else if (arrRepOptions) {
      const { items } = arrRepOptions

      const min = arrRepOptions.min ? arrRepOptions.min : 0 // Optional by default
      const max = arrRepOptions.max ? arrRepOptions.max : 1000000 // A very, very high max means no max

      let found = 0

      // First, make sure that there is enough minimum matches
      for (; found < min; found++) {
        const optionMatch = matchArrayPiece(
          arrTokens,
          items,
          ixTokens,
          0,
          variables,
        )

        if (optionMatch.match) {
          ixTokens = optionMatch.ixTokens
        } else {
          return { match: false }
        }
      }

      // And continue matching until we reach max, or fail a match
      for (; found < max; found++) {
        const optionMatch = matchArrayPiece(
          arrTokens,
          items,
          ixTokens,
          0,
          variables,
        )

        if (optionMatch.match) {
          ixTokens = optionMatch.ixTokens
        } else {
          // If we do not match, we can simply exit this loop
          break
        }
      }

      ixTemplate++
    } else if (arrVarOptions) {
      const { items, name } = arrVarOptions

      const variableMatch = matchArrayPiece(
        arrTokens,
        items,
        ixTokens,
        0,
        variables,
      )

      if (variableMatch.match) {
        const ixTokensStart = ixTokens
        ixTokens = variableMatch.ixTokens

        variables[name] = arrTokens.slice(ixTokensStart, ixTokens)
      } else {
        return { match: false }
      }

      ixTemplate++
    } else {
      const elementPayload = arrTokens[ixTokens]

      if (!matchObject(elementPayload, elementTemplate)) {
        return { match: false }
      }

      ixTokens++
      ixTemplate++
    }
  }

  // This line is placed here to please flow
  // eslint-disable-next-line no-unreachable
  return { match: false }
}

export function replaceMatchInArray(
  arrTokens: Array<any>,
  arrTemplate: Array<any>,
  matchInfo: {
    ixStart: number,
    ixStop: number,
    match: true,
    variables: { [string]: any },
  },
): Array<any> {
  const { ixStart, ixStop, variables } = matchInfo
  const arrBefore = arrTokens.slice(0, ixStart)

  const arrAfter = arrTokens.slice(ixStop + 1)
  const arrReplacements = []

  for (let element of arrTemplate) {
    const optionsReplArr = element[templTag_replArr]

    if (optionsReplArr) {
      const { variable } = optionsReplArr
      const arrVariableValue = variables[variable]

      for (let variableElement of arrVariableValue) {
        arrReplacements.push(variableElement)
      }
    } else {
      arrReplacements.push(replaceReplObj(element, variables))
    }
  }

  return arrBefore.concat(arrReplacements, arrAfter)
}

function replaceReplObj(source: any, variables: { [string]: any }) {
  if (
    typeof source === 'string' ||
    typeof source === 'number' ||
    typeof source === 'boolean'
  ) {
    return source
  }

  const optionsReplObj = source[templTag_replObj]
  if (optionsReplObj) {
    const { variable, path } = optionsReplObj

    const arrVariableValue = []

    for (let variableValue of variables[variable]) {
      arrVariableValue.push(retrieveObjectAtPath(variableValue, path, 0))
    }

    return arrVariableValue
  } else {
    const result: Object = {}
    for (let propName in source) {
      result[propName] = replaceReplObj(source[propName], variables)
    }

    return result
  }
}

function retrieveObjectAtPath(source: any, path: Array<string>, ix: number) {
  if (ix === path.length - 1) {
    return source[path[ix]]
  } else {
    return retrieveObjectAtPath(source[path[ix]], path, ix + 1)
  }
}

export function matchAndReplace(
  arrTokens: Array<any>,
  templateInfo: { float?: boolean, template: Array<any> },
  arrReplacement: Array<any>,
): null | Array<any> {
  const matchInfo = matchArray(arrTokens, templateInfo)

  if (matchInfo.match) {
    return replaceMatchInArray(arrTokens, arrReplacement, matchInfo)
  } else {
    return null
  }
}
