// @flow

import {
  midMarker_notNull,
  midMarker_isNull,
  midMarker_in
} from './matchInDepthMarkers'

export default function matchInDepth(payload: any, condition: any) {
  if (
    typeof condition === 'string' ||
    typeof condition === 'number' ||
    typeof condition === 'boolean'
  ) {
    return payload === condition
  }

  // Check for in condition
  if (typeof condition === 'object') {
    const inCondition = condition[midMarker_in]

    if (inCondition) {
      // In condition - match until one match is found
      for (let inConditionOption of inCondition) {
        if (matchInDepth(payload, inConditionOption)) {
          return true
        }
      }
    }

    for (let ix in condition) {
      const payloadValue = payload[ix]
      const conditionValue = condition[ix]

      if (conditionValue === midMarker_notNull) {
        if (payloadValue == null) {
          return false
        } else {
          continue
        }
      }
      if (conditionValue === midMarker_isNull) {
        if (payloadValue != null) {
          return false
        } else {
          continue
        }
      }

      const typeOfValue = typeof payloadValue
      const typeOfCondition = typeof conditionValue

      if (typeOfCondition === 'object') {
        // Regular object - match recursively, if the object is of the same type

        if (typeOfValue !== typeOfCondition) {
          return false
        }
        if (!matchInDepth(payloadValue, conditionValue)) {
          return false
        }
      } else {
        if (payloadValue !== conditionValue) {
          return false
        }
      }
    }
  }

  return true
}
