export function trim(fn) {
  return function () {
    return fn.apply(this, arguments).replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '')
  }
}

export function Trim(target, key, descriptor) {
  return {
    configurable: true,
    enumerable: descriptor.enumerable,
    get: function getter() {
      Object.defineProperty(this, key, {
        configurable: true,
        enumerable: descriptor.enumerable,
        value: trim(descriptor.value)
      })

      return this[key]
    }
  }
}