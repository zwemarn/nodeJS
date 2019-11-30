//Tutorial - 1
/* const tutorial = require('./tutorial');
console.log(tutorial);
console.log(tutorial.sum(3,7));
console.log(tutorial.PI);
console.log(new tutorial.SomeMathObject()); */


//Tutorial - 2
const EventEmitter = require('events');
const ee = new EventEmitter();

ee.on('tutorial2', (num1, num2) => {
    console.log('The number is : ' + (num1 + num2));
})

ee.emit('tutorial2', 1, 2);