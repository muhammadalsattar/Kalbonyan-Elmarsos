let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`)

// Challenge area

let me = {
    name: 'Muhammad',
    age: 27,
    location: 'Alexandria'
}

console.log(`${me.name} is ${me.age} and lives in ${me.location}.`)
me.age = me.age + 1
console.log(`${me.name} is ${me.age} and lives in ${me.location}.`)
