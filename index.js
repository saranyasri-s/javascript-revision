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
