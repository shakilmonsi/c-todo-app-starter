// basic structure of a function
function functionName() {
  // this is function body
}

// function which can console a value doing addition of 10+23
function sum() {
  const a = 10;
  const b = 23;
  console.log(a + b);
}
sum(); // function call

// function which can return a value doing addition of 10+23
function sum1() {
  const a = 10;
  const b = 23;
  return a + b;
}
const result = sum1(); // function call and stored return value
console.log("get from return", result);

// if we return a result/value from a function then we can use that value when we need to use. but if we donot return the result/value from a function then we just can see the value but we won't be able to use it when we need to use it.

// function with parameter with console
function sum2(a, b) {
  console.log(a + b);
}
sum2(5, 10); // function call

// function with parameter with return
function sum3(a, b) {
  return a + b;
}
const result1 = sum3(10, 20); // function call and stored return value
console.log("get from return", result1);

// function with default parameter to prevent unwanted return value
function sum4(a = 0, b = 0) {
  return a + b;
}
const result2 = sum4(6, 2); // function call and stored return value
console.log("get from return", result2);
const result3 = sum4(6); // though we are not given the second parameter value this function will run
console.log("get from return", result3);

// if we donot use default parameter
function sum5(a, b) {
  return a + b;
}
const result4 = sum5(6, 2); // function call and stored return value
console.log("get from return", result4);
const result5 = sum5(6); // this function call will not run or will return unwanted value (NaN)
console.log("get from return", result5);
