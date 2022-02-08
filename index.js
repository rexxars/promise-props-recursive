'use strict'

const isPlainObject = require('lodash.isplainobject')

function isPromiseLike(obj) {
  return typeof obj === 'object' && typeof obj.then === 'function'
}

function promiseProps(obj) {
  const keys = Object.keys(obj)
  const values = keys.map((key) => obj[key])
  return promiseArray(values).then((results) => {
    const result = {}
    for (let i = 0; i < keys.length; i++) {
      result[keys[i]] = results[i]
    }
    return result
  })
}

function promiseArray(arr) {
  return Promise.all(arr.map(promisePropsRecursive))
}

function promisePropsRecursive(obj) {
  if (isPromiseLike(obj)) {
    return obj.then(promisePropsRecursive)
  }

  if (isPlainObject(obj)) {
    return promiseProps(obj)
  }

  if (Array.isArray(obj)) {
    return promiseArray(obj)
  }

  return Promise.resolve(obj)
}

module.exports = promisePropsRecursive
