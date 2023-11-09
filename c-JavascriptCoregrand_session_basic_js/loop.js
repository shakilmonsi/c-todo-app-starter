// Basic syntex of for loop
// for (initialization; condition; afterthought){
// statementt
// }

// (let i = 1) = initialization, (i <= 4) = condition, (i++/i--) = increment/decrement
for (let i = 1; i <= 4; i++) {
  console.log(i); // it will console 1 to four
}

let roll = ["a", "b", "c", "d"]; // an array which we use to learn loop

// here we use normal for loop to console all the array elements
// In condition part we can also write (i < roll.length)
for (let i = 0; i <= roll.length - 1; i++) {
  console.log(roll[i]); // It will console all the array elements
}

// Here we use special loop named for_of to console all array elements
// Here I am used variable 'abc'. You can use any name whatever you want. and 'roll' is the name of array where I want to use loop.
for (let abc of roll) {
  console.log(abc); // It will console all the array elements
}
