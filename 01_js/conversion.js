let score = "45"
//console.log(typeof (score));

let valueInNumber = Number(score)
//console.log(typeof (valueInNumber));
//console.log(valueInNumber)

// "45" => 45
// "45abc" => NaN
// ture => 1;  false => 0


let isLoggedIn = ""

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Ashish" => true

let someNumber = 33

let stringNumber = String(someNumber)
//console.log(typeof (stringNumber));

// *********************Operation************************

let value = 3
let negValue = -value
//console.log(negValue);

// console.log(2/2);
// console.log(2%2);
// console.log(2*5);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(+true);
// console.log(+"");

let num1, num2, num3
num1 = num2 =  num3 = 2 + 2

let gameCounter = 100
gameCounter++;
//console.log(gameCounter);

//                         
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);