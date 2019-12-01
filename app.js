//Tutorial - 1
/* const tutorial = require('./tutorial');
console.log(tutorial);
console.log(tutorial.sum(3,7));
console.log(tutorial.PI);
console.log(new tutorial.SomeMathObject()); */


//Tutorial - 2
/* const EventEmitter = require('events');
const ee = new EventEmitter();

ee.on('tutorial2', (num1, num2) => {
    console.log('The number is : ' + (num1 + num2));
})

ee.emit('tutorial2', 1, 2);

// class extending the EventEmitter
class Person extends EventEmitter {
    constructor(name) {
        super();
        this._name = name;
    }

    get name() {
        return this._name;
    }
}


const pedro = new Person('Pedro');
const chrisitna = new Person('Christina');

chrisitna.on('name', () => {
    console.log('my name is ' + chrisitna.name);
})

pedro.on('name', () => {
    console.log('my name is ' + pedro.name);
})

pedro.emit('name');
chrisitna.emit('name'); */



//Tutorial - 3
/* var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var num1 = Math.floor((Math.random() * 10) + 1);
var num2 = Math.floor((Math.random() * 10) + 1);
var answer = num1 + num2;

rl.question(
    'What is ' + num1 + ' + ' + num2 + '? \n',
    (userInput) => {
        if (userInput.trim() == answer) {
            rl.close();
        }
        else {
            rl.setPrompt('Incorrect response. Please try again\n');
            rl.prompt();
            rl.on('line', (userInput) => {
                if (userInput.trim() == answer) {
                    rl.close();
                }
                else {
                    rl.setPrompt(`Your answer of ${userInput} is incorrect. Please try again.\n`);
                    rl.prompt();
                }
            })
        }
    }
)


rl.on('close', () => {
    console.log('Correct!');
})
rl.on('close', function () {
    console.log('Correct!');
}) */