//declaration
let student = {
  name: "karim",
  roll: 3,
  class: 5,
  section: "A",
};
// console.log(student);

const studentName = student["name"]; // get/access a property value
// console.log(studentName)

console.log(student["section"]); // get/access a property value

student["name"] = "abdullah"; // change/set new value in name property

student["address"] = "16/22 MS Road"; // set a new property named 'address' in student object
// console.log(student);
