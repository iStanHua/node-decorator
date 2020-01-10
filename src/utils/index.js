
export function ClassDecorator(target) {
  console.log('ClassDecorator: ', target)
  target.annotated = true
}

export function PropertyDecorator(target, propertyKey) {
  console.log('PropertyDecorator: ', target, propertyKey)
}

export function MethodDecorator(target, propertyKey, descriptor) {
  console.log('MethodDecorator: ', target, propertyKey, descriptor)
}

export function ParameterDecorator(target, propertyKey, parameterIndex) {
  console.log('ParameterDecorator: ', target, propertyKey, parameterIndex)
}

export function Readonly() {
  return function (target, propertyKey, descriptor) {
    descriptor.writable = false
    return descriptor
  }
}

export function Enumerable(isEnumerable) {
  return (target, propertyKey, descriptor) => {
    descriptor.enumerable = isEnumerable
    return descriptor
  }
}