/************************************************
 * STRING MANIPULATION — COMPLETE CONCEPT
 * Covers:
 * - Creation
 * - Immutability
 * - Access
 * - Length & UTF-16 behavior
 * - Case conversion
 * - Trimming
 * - Searching
 * - Extracting
 * - Replacing
 * - Splitting & joining
 * - Template literals
 * - Safe iteration (Unicode)
 ************************************************/

/* 1️⃣ String Creation */
let s1 = "Hello";
let s2 = 'World';
let s3 = `JavaScript`;

console.log(s1, s2, s3);

/* 2️⃣ Strings Are Immutable */
let original = "hello";
let upper = original.toUpperCase();

console.log(original); // "hello"
console.log(upper);    // "HELLO"

/* original is NOT changed */

/* 3️⃣ Accessing Characters */
let word = "JavaScript";

console.log(word[0]);        // 'J'
console.log(word.charAt(4)); // 'S'

/* Assignment does nothing */
word[0] = "j";
console.log(word); // still "JavaScript"

/* 4️⃣ Length & UTF-16 Behavior */
let emoji = "😀";

console.log(emoji.length); // 2 (UTF-16 surrogate pair)

let mixed = "A😀B";
console.log(mixed.length); // 4

/* 5️⃣ Safe Iteration Over Characters */
for (let ch of mixed) {
  console.log(ch); // A, 😀, B
}

/* 6️⃣ Case Conversion */
let text = "JaVaScRiPt";

console.log(text.toLowerCase()); // "javascript"
console.log(text.toUpperCase()); // "JAVASCRIPT"

/* 7️⃣ Trimming Whitespace */
let input = "   user@email.com   ";

console.log(input.trim());
console.log(input.trimStart());
console.log(input.trimEnd());

/* 8️⃣ Searching in Strings */
let sentence = "JavaScript is powerful";

console.log(sentence.includes("power")); // true
console.log(sentence.indexOf("is"));      // position
console.log(sentence.startsWith("Java"));
console.log(sentence.endsWith("ful"));

/* 9️⃣ Extracting Substrings */
let lang = "JavaScript";

console.log(lang.slice(0, 4));    // "Java"
console.log(lang.slice(4));       // "Script"
console.log(lang.slice(-6));      // "Script"

/* substring behaves differently */
console.log(lang.substring(4, 10)); // "Script"

/* 1️⃣0️⃣ Replacing Text */
let message = "Hello World";

let replacedOnce = message.replace("World", "JS");
console.log(replacedOnce); // "Hello JS"

let replaceAllChars = "balloon".replaceAll("l", "L");
console.log(replaceAllChars); // "baLLoon"

/* Original string unchanged */
console.log(message); // "Hello World"

/* 1️⃣1️⃣ Splitting Strings */
let date = "2026-01-21";
let parts = date.split("-");

console.log(parts); // ["2026", "01", "21"]

/* 1️⃣2️⃣ Joining Strings */
let joined = parts.join("/");
console.log(joined); // "2026/01/21"

/* 1️⃣3️⃣ Real-World Transformation */
let title = "Learn JavaScript Deeply";

let slug = title
  .toLowerCase()
  .trim()
  .replaceAll(" ", "-");

console.log(slug); // "learn-javascript-deeply"

/* 1️⃣4️⃣ Template Literals */
let user = {
  name: "Alex",
  score: 95
};

let report = `Hello ${user.name},
Your score is ${user.score}.
Status: ${user.score >= 50 ? "PASS" : "FAIL"}`;

console.log(report);

/* 1️⃣5️⃣ Performance-Safe String Building */
let numbers = [];

for (let i = 1; i <= 5; i++) {
  numbers.push(i);
}

let resultString = numbers.join(", ");
console.log(resultString); // "1, 2, 3, 4, 5"

/************************************************
 * END OF STRING MANIPULATION
 ************************************************/
