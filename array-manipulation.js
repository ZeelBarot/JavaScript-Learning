/************************************************
 * ARRAY MANIPULATION — COMPLETE CONCEPT
 * Covers:
 * - Creation
 * - Access
 * - Mutation vs Immutability
 * - map, filter, reduce
 * - slice vs splice
 * - sort
 * - spread operator
 * - Reference behavior
 ************************************************/

/* 1️⃣ Array Creation */
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "hello", true, { x: 10 }, [1, 2]];

/* 2️⃣ Accessing Elements */
console.log(numbers[0]); // 1
console.log(numbers.length); // 5

/* 3️⃣ Reference Behavior (IMPORTANT) */
let refArray = numbers;
refArray.push(6);

console.log(numbers); // [1,2,3,4,5,6]
console.log(refArray); // SAME array (shared reference)

/* 4️⃣ Mutating Methods */
let mutating = [10, 20, 30];

mutating.push(40);     // add at end
mutating.pop();        // remove from end
mutating.unshift(5);   // add at start
mutating.shift();      // remove from start

// splice → mutates original
mutating.splice(1, 1); // removes one element at index 1

console.log(mutating);

/* 5️⃣ Non-Mutating Methods */
let original = [1, 2, 3, 4];

// slice → does NOT mutate
let sliced = original.slice(1, 3);

console.log(original); // unchanged
console.log(sliced);   // [2,3]

/* 6️⃣ map — transform */
let doubled = original.map(num => num * 2);
console.log(doubled); // [2,4,6,8]

/* 7️⃣ filter — select */
let evens = original.filter(num => num % 2 === 0);
console.log(evens); // [2,4]

/* 8️⃣ reduce — combine */
let sum = original.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(sum); // 10

/* 9️⃣ reduce — advanced (grouping) */
let users = [
  { name: "A", age: 20 },
  { name: "B", age: 30 },
  { name: "C", age: 20 }
];

let groupedByAge = users.reduce((acc, user) => {
  if (!acc[user.age]) {
    acc[user.age] = [];
  }
  acc[user.age].push(user.name);
  return acc;
}, {});

console.log(groupedByAge);
// { 20: ["A","C"], 30: ["B"] }

/* 🔟 sort — MUTATES */
let scores = [40, 10, 100, 30];

// Wrong (lexicographic)
scores.sort();

// Correct (numeric)
scores.sort((a, b) => a - b);

console.log(scores);

/* 1️⃣1️⃣ Safe sorting (immutability) */
let safeSorted = [...scores].sort((a, b) => b - a);
console.log(safeSorted);
console.log(scores); // unchanged

/* 1️⃣2️⃣ Spread Operator (copy & merge) */
let a = [1, 2];
let b = [3, 4];

let merged = [...a, ...b];
console.log(merged); // [1,2,3,4]

/* 1️⃣3️⃣ Updating array immutably (Angular style) */
let state = [1, 2, 3];

// ❌ state.push(4);
state = [...state, 4];

console.log(state); // [1,2,3,4]

/* 1️⃣4️⃣ Removing item immutably */
let withoutTwo = state.filter(x => x !== 2);
console.log(withoutTwo); // [1,3,4]

/* 1️⃣5️⃣ Finding elements */
let found = users.find(user => user.age === 30);
console.log(found); // { name: "B", age: 30 }

/************************************************
 * END OF ARRAY MANIPULATION
 ************************************************/
