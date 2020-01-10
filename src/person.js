
import { PropertyDecorator, MethodDecorator, Readonly, Enumerable } from './utils'
import { Serializable, Serialize } from './utils/serializers'
import { Debounce } from './utils/debounce'
import { Throttle } from './utils/throttle'
import { Trim } from './utils/trim'

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
    return this.fullName()
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
  debounce() {
    console.log('Debounce:', this.fullName())
  }

  @Throttle(800)
  throttle() {
    console.log('Throttle:', this.fullName())
  }

  @Trim
  trim() {
    return ` \n\n\n ${this.fullName()} \n\n\n`
  }
}