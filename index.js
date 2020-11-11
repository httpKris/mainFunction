'use strict'

// function showThis(a, b){
//     console.log(this)
//     function sum() {
//         console.log(this)
//         return a + b
//     }
//     console.log(sum())
// }

// const mysum = showThis(1, 5)
// const mysum2 = showThis(8, 2)

// const object = {
//     first: 1,
//     second: 2,
//     third: 3,
//     thisfunc: function () {
//         console.log(this);
//     }
// }

// object.thisfunc()


// const obj = {
//     first: 1,
//     second: 2,
//     third: 3,
//     thisfunc: function () {
//         console.log(this.third + this.second);
//     }
// }

// obj.thisfunc()

function User(name, id) {
    this.name = name
    this.id = id
    this.human = true
    this.sayhello = () => {
        console.log(`hello, I am ${this.name}`);
    }
}

const vova = new User('Владимир', '1')


function sayName(superName){
    // console.log(this);
    console.log(`${this.name} ${superName}`);
}

const user = {
    name: 'John'
}

// нужно передать контекст, который будет использовать функция

sayName.call(user, 'smith')
sayName.apply(user, ['kozlov'])

// bind создаёт новую функцию, которая связана с контекстом
sayName.bind(user, 'Heppy')();

function devisor(n) {
    return this + n
}

const fooDivis = devisor.bind(10)

console.log(fooDivis(11))

console.log(fooDivis(12))
console.log(fooDivis(13))
