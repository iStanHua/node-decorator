
import { PropertyDecorator, MethodDecorator, Readonly, Enumerable } from './utils'
import { Serializable, Serialize } from './utils/serializers'
import { Debounce } from './utils/debounce'

@Serializable()
export default class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  @PropertyDecorator
  @MethodDecorator
  @Readonly
  fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  @Serialize()
  get name() {
    return this.firstName
  }

  @Serialize('language')
  get lang() {
    return 'JavaScript'
  }

  @Enumerable(true)
  get enum() {
    return true
  }

  @Debounce(500)
  speek() {
    console.log(this.fullName())
  }
}