'use strict'

class Human {
    constructor(name, sername, age){
        this.name = name
        this.age = age
        this.sername = sername
        this.work = true        
    }
    tohome(work){
        if(work) {
            console.log(`${this.age} работает`)
        } else {
            console.log(`${this.name} не работает`);
        }
    }
}

const john = new Human('John', 'Smith', 22)


