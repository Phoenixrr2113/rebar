"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.stringToTokenArray = stringToTokenArray;exports.matchObject = matchObject;exports.matchArray = matchArray;exports.replaceMatchInArray = replaceMatchInArray;exports.matchAndReplace = matchAndReplace;

var _templateTags = require("./templateTags");











function stringToTokenArray(source) {
  const result = [];

  let accumulated = '';
  for (let c of source) {
    if (
    c >= 'a' && c <= 'z' ||
    c >= 'A' && c <= 'Z' ||
    c >= '0' && c <= '9')
    {
      accumulated += c;
    } else {
      if (accumulated.length > 0) {
        result.push({ word: { text: accumulated.toLowerCase() } });
        accumulated = '';
      }
      if (c !== ' ') {
        result.push({ symbol: { text: c } });
      }
    }
  }

  if (accumulated.length > 0) {
    result.push({ word: { text: accumulated.toLowerCase() } });
    accumulated = '';
  }

  return result;
}

function matchObject(token, condition) {
  if (
  typeof condition === 'string' ||
  typeof condition === 'number' ||
  typeof condition === 'boolean')
  {
    return token === condition;
  }

  // Check for in condition
  if (typeof condition === 'object') {
    const inCondition = condition[_templateTags.templTag_in];

    if (inCondition) {
      // In condition - match until one match is found
      for (let inConditionOption of inCondition) {
        if (matchObject(token, inConditionOption)) {
          return true;
        }
      }
    }

    // Compare constant arrays
    if (Array.isArray(token)) {
      // If token is array, condition should also be an array, or array template
      if (!Array.isArray(condition)) {
        const templateInfo = condition[_templateTags.templTag_arr];

        if (templateInfo) {
          return matchArray(token, templateInfo).match;
        } else {
          return false;
        }
      }

      // For arrays, make sure they have the same length
      if (token.length !== condition.length) {
        return false;
      }
    } // if ( Array.isArray( token ) )

    for (let ix in condition) {
      const tokenValue = token[ix];
      const conditionValue = condition[ix];

      if (conditionValue === _templateTags.templTag_notNull) {
        if (tokenValue == null) {
          return false;
        } else {
          continue;
        }
      }
      if (conditionValue === _templateTags.templTag_isNull) {
        if (tokenValue != null) {
          return false;
        } else {
          continue;
        }
      }

      const typeOfValue = typeof tokenValue;
      const typeOfCondition = typeof conditionValue;

      if (typeOfCondition === 'object') {
        // Regular object - match recursively, if the object is of the same type

        if (typeOfValue !== typeOfCondition) {
          return false;
        }
        if (!matchObject(tokenValue, conditionValue)) {
          return false;
        }
      } else {
        if (tokenValue !== conditionValue) {
          return false;
        }
      } // if ( typeOfCondition === 'object' )
    } // for ( let ix in condition )
  } // if ( typeof condition === 'object' )

  return true;
}

function matchArray(
arrTokens,
templateInfo)







{
  const { template, float } = templateInfo;

  const variables = {};

  if (!float) {
    const tryMatchWhole = matchArrayPiece(arrTokens, template, 0, 0, variables);

    if (!tryMatchWhole.match) {
      return { match: false };
    } else if (tryMatchWhole.ixTokens === arrTokens.length) {
      return {
        ixStart: 0,
        ixStop: arrTokens.length - 1,
        match: true,
        variables };

    } else {
      return { match: false };
    }
  } else {
    const lenPayload = arrTokens.length;

    for (let ixStart = 0; ixStart < lenPayload; ixStart++) {
      const tryMatchPart = matchArrayPiece(
      arrTokens,
      template,
      ixStart,
      0,
      variables);


      if (tryMatchPart.match) {
        return {
          ixStart,
          ixStop: tryMatchPart.ixTokens - 1,
          match: true,
          variables };

      }
    }

    // Template not found, so it is false
    return { match: false };
  }
}

function matchArrayPiece(
arrTokens,
arrTemplate,
ixTokens,
ixTemplate,
variables)
{
  const lengthTokens = arrTokens.length;
  const lengthTemplate = arrTemplate.length;

  for (;;) {
    // No more template elements
    if (ixTemplate >= lengthTemplate) {
      return { match: true, ixTokens, ixTemplate };
    }

    // No more token
    if (ixTokens >= lengthTokens) {
      // We are out of tokens, but not out of template. The only way for this to be a match
      // is for the rest of the template to be templTag_arrOr with min = 0. Check if this
      // is the case
      for (; ixTemplate < lengthTemplate; ixTemplate++) {
        const arrRepOptions = arrTemplate[ixTemplate][_templateTags.templTag_arrRep];

        if (arrRepOptions && arrRepOptions.min === 0) continue;else
        break;
      }

      // Going through the loop exhausted the rest of the template?
      if (ixTemplate >= lengthTemplate) {
        return { match: true, ixTokens, ixTemplate };
      }

      return { match: false };
    }

    const elementTemplate = arrTemplate[ixTemplate];
    const arrOrOptions = elementTemplate[_templateTags.templTag_arrOr];
    const arrRepOptions = elementTemplate[_templateTags.templTag_arrRep];
    const arrVarOptions = elementTemplate[_templateTags.templTag_arrVar];

    if (arrOrOptions) {
      let bOptionMatchFound = false;
      for (let orOption of arrOrOptions) {
        const optionMatch = matchArrayPiece(
        arrTokens,
        orOption,
        ixTokens,
        0,
        variables);


        if (optionMatch.match) {
          bOptionMatchFound = true;

          ixTokens = optionMatch.ixTokens;
          ixTemplate++;

          break;
        }
      }

      if (!bOptionMatchFound) {
        return { match: false };
      }
    } else if (arrRepOptions) {
      const { items } = arrRepOptions;

      const min = arrRepOptions.min ? arrRepOptions.min : 0; // Optional by default
      const max = arrRepOptions.max ? arrRepOptions.max : 1000000; // A very, very high max means no max

      let found = 0;

      // First, make sure that there is enough minimum matches
      for (; found < min; found++) {
        const optionMatch = matchArrayPiece(
        arrTokens,
        items,
        ixTokens,
        0,
        variables);


        if (optionMatch.match) {
          ixTokens = optionMatch.ixTokens;
        } else {
          return { match: false };
        }
      }

      // And continue matching until we reach max, or fail a match
      for (; found < max; found++) {
        const optionMatch = matchArrayPiece(
        arrTokens,
        items,
        ixTokens,
        0,
        variables);


        if (optionMatch.match) {
          ixTokens = optionMatch.ixTokens;
        } else {
          // If we do not match, we can simply exit this loop
          break;
        }
      }

      ixTemplate++;
    } else if (arrVarOptions) {
      const { items, name } = arrVarOptions;

      const variableMatch = matchArrayPiece(
      arrTokens,
      items,
      ixTokens,
      0,
      variables);


      if (variableMatch.match) {
        const ixTokensStart = ixTokens;
        ixTokens = variableMatch.ixTokens;

        variables[name] = arrTokens.slice(ixTokensStart, ixTokens);
      } else {
        return { match: false };
      }

      ixTemplate++;
    } else {
      const elementPayload = arrTokens[ixTokens];

      if (!matchObject(elementPayload, elementTemplate)) {
        return { match: false };
      }

      ixTokens++;
      ixTemplate++;
    }
  }

  // This line is placed here to please flow
  // eslint-disable-next-line no-unreachable
  return { match: false };
}

function replaceMatchInArray(
arrTokens,
arrTemplate,
matchInfo)





{
  const { ixStart, ixStop, variables } = matchInfo;
  const arrBefore = arrTokens.slice(0, ixStart);

  const arrAfter = arrTokens.slice(ixStop + 1);
  const arrReplacements = [];

  for (let element of arrTemplate) {
    const optionsReplArr = element[_templateTags.templTag_replArr];

    if (optionsReplArr) {
      const { variable } = optionsReplArr;
      const arrVariableValue = variables[variable];

      for (let variableElement of arrVariableValue) {
        arrReplacements.push(variableElement);
      }
    } else {
      arrReplacements.push(replaceReplObj(element, variables));
    }
  }

  return arrBefore.concat(arrReplacements, arrAfter);
}

function replaceReplObj(source, variables) {
  if (
  typeof source === 'string' ||
  typeof source === 'number' ||
  typeof source === 'boolean')
  {
    return source;
  }

  const optionsReplObj = source[_templateTags.templTag_replObj];
  if (optionsReplObj) {
    const { variable, path } = optionsReplObj;

    const arrVariableValue = [];

    for (let variableValue of variables[variable]) {
      arrVariableValue.push(retrieveObjectAtPath(variableValue, path, 0));
    }

    return arrVariableValue;
  } else {
    const result = {};
    for (let propName in source) {
      result[propName] = replaceReplObj(source[propName], variables);
    }

    return result;
  }
}

function retrieveObjectAtPath(source, path, ix) {
  if (ix === path.length - 1) {
    return source[path[ix]];
  } else {
    return retrieveObjectAtPath(source[path[ix]], path, ix + 1);
  }
}

function matchAndReplace(
arrTokens,
templateInfo,
arrReplacement)
{
  const matchInfo = matchArray(arrTokens, templateInfo);

  if (matchInfo.match) {
    return replaceMatchInArray(arrTokens, arrReplacement, matchInfo);
  } else {
    return null;
  }
}
//# sourceMappingURL=template.js.map