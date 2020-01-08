// app.js
@log
class MyClass { }

function log(target) { // 这个 target 在这里就是 MyClass 这个类
  target.prototype.logger = () => `${target.name} 被调用`
}

const test = new MyClass()
test.logger() // MyClass 被调用

@log1('hi')
class MyClass1 { }

function log1(text) {
  return function(target) {
    target.prototype.logger = () => `${text}，${target.name} 被调用`
  }
}

const test1 = new MyClass1()
test1.logger() // hello，MyClass 被调用

class C {
  @readonly(false)
  method() { console.log('cat') }
}

function readonly(value) {
  return function (target, key, descriptor) { // 此处 target 为 C.prototype; key 为 method;
    // 原 descriptor 为：{ value: f, enumarable: false, writable: true, configurable: true }
    descriptor.writable = value
    return descriptor
  }
}

const c = new C()
c.method = () => console.log('dog')

c.method() // cat