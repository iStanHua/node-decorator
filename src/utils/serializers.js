const serialized = new WeakMap();

export function Serializable() {
  return function (target, propertyKey, descriptor) {
    target.prototype.toJSON = function () {
      const map = serialized.get(target.prototype)
      const props = Object.keys(map)
      return props.reduce((previous, key) => {
        previous[map[key]] = this[key]
        return previous
      }, {})
    }
  }
}

export function Serialize(name) {
  return function (target, propertyKey, descriptor) {
    let map = serialized.get(target);
    if (!map) {
      map = {}
      serialized.set(target, map)
    }

    map[propertyKey] = name || propertyKey
  }
}