//------- learning if/else condition type-1
// condition true, if block will execute
if (true) {
  console.log("raji hoye gese"); //this console will print
} else {
  console.log("raji hoy nai");
}

// condition false, else block will execute
if (false) {
  console.log("raji hoye gese");
} else {
  console.log("raji hoy nai"); // this console will print
}

//------- learning if/else condition type-2
let number = 4;
// condition true, if block will execute
if (number == 4) {
  console.log("this number is equal to 4"); //this console will execute
} else {
  console.log("not equal");
}

let number1 = 4;
// condition true, if block will execute
if (number1 === 4) {
  console.log("this number is equal to 4"); //this console will execute
} else {
  console.log("not equal");
}

let number2 = "4";
// condition false, else block will execute.
// Here we using triple equal sign which will check value and also data type. Here number2 is string type.
if (number2 === 4) {
  console.log("this number is equal to 4");
} else {
  console.log("not equal to 4"); //this console will execute
}

//------- learning if/elseIf/else condition
const num1 = 5;
const num2 = 8;
// condition false, elseIf block will execute.
if (num1 == 9) {
  console.log("it is equal to five");
}
// condition false, else block will execute.
else if (num2 == 10) {
  console.log("it is equal to eight");
} else {
  console.log("first two condition false, that's why I am executed."); //this console will execute
}
