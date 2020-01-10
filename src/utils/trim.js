export function trim(fn) {
  return function () {
    return fn.apply(this).replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '')
  }
}

export function Trim() {
  return function (target, key, descriptor) {
    return {
      configurable: true,
      enumerable: descriptor.enumerable,
      get: function getter() {
        // Attach this function to the instance (not the class)
        Object.defineProperty(this, key, {
          configurable: true,
          enumerable: descriptor.enumerable,
          value: trim(descriptor.value)
        })

        return this[key]
      }
    }
  }
}