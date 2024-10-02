// let isTrue = true;
// console.log(isTrue);
// isTrue = false;
// console.log(isTrue);
// console.log(typeof isTrue);

// const name = "john";
// console.log(name);
// name = "doe";
// console.log(name);
// console.log(typeof name);
const obj = {
  name: "john",
  age: 30,
};

const arr = [1, 2, 3, 4, 5];

console.log(obj, typeof obj);
console.log(arr, typeof arr);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
console.log("for loop done");
arr.forEach((num) => {
  num = num + 1;
  console.log(num);
});
console.log("forEach loop done");
arr.map((num) => {
  num = num + 1;
  console.log(num);
});
console.log("map loop done");
