// app.js

import Person from './src/person'

const person = new Person('Jeff', 'Morrison')
console.log('FullName:', person.fullName())
console.log('Serialize:', JSON.stringify(person))
console.log('Name:', person.name)
console.log('Language:', person.language)
console.log('Enum:', person.enum)
person.speek()