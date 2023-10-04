let a = "saranyasri";
console.log(a);
if (1 == "1") {
  console.log("==");
}
if (1 === 1) {
  console.log("===");
} else {
  console.log(false);
}
// checking execution of function in diff cases
function check() {
  console.log("function executed");
  return true;
}
let fuc = check();
console.log(fuc);

// doing the given task in udemy
function combine(a, b, c) {
  const result = (a * b) / c;
  return result;
}
let taskFunction = combine(1, 2, 3);
console.log(taskFunction);

// learning arrays
const arr1 = [1, 2, 3];
console.log(arr1[1]);
arr1.push(8);
console.log(arr1[3]);
// task2

// Exercise: Array Methods
// Your task is to add the missing logic to a transformToObjects() function that should transform a list of numbers into a list of JavaScript objects.

// In the newly returned array, every object must have a val key and the input array's number as a value.

// For example, for the provided input [1, 2, 3] the transformToObjects([1, 2, 3]) function should return [{val: 1}, {val: 2}, {val: 3}].

function transformToObjects(numberArray) {
  // Todo: Add your logic
  // should return an array of objects
  let ans = numberArray.map((number) => ({ val: number }));
  return ans;
}
console.log(transformToObjects([1, 2, 3, 4]));

// spread operator
let hobbies = ["a", "b", "c"];
let newhobbies = ["d", "e", "f"];
// let extendedHobbiees = hobbies.concat(newhobbies);
let extendedHobbiees = [...hobbies, ...newhobbies];
console.log(extendedHobbiees);
