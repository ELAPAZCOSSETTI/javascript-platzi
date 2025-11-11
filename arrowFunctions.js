const greeting = function (name){
    return `Hi, ${name}`
}

//Arrow function - explicit return

const newGreeting = (name) => {
    return `Hi, ${name}`
}

//Arrow function - implicit return

const newGreetingImplicit = name => `Hi. ${name}`
const newGreetingImplicitTwoParameters = (name, lastname) => `Hi, I'm ${name} ${lastname}`

//Lexical Binding

const fictionalCharacter = {
    name: `Uncle Ben`,
    messageWithTraditionalFunction: function (message){
        console.log(`${this.name} says: ${message}`)
    },
    messageWithArrowFunction: message => {
        console.log(`${name} ${message}`)
    }
}
fictionalCharacter.messageWithTraditionalFunction(`With great power comes grat responsability.`)
fictionalCharacter.messageWithArrowFunction( `Beware of doctor octopus`)