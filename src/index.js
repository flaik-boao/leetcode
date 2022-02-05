class Person {
  constructor() {
    console.log("Person")
  }
}

class Student extends Person {
  constructor() {
    super()
    console.log("Student")
  }
}

const s = new Student()

console.log(s.__proto__)
console.log(s)
