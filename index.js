// ---- Task 2: Circle Area ----
let radius = 7;
const pi = 3.14;
let area = radius * radius * pi;
console.log("Area of circle:", area);

// ---- Task 3: Primitive Data Types & Strings ----
let name = "bob";
let age = 24;
console.log(typeof(name));
console.log(typeof(age));
console.log(`Hello my name is ${name}, I'm ${age} years old`);
console.log(`I was born in ${2020 - age}`);

// ---- Task 4.1: Type Coercion ----
console.log('1' == 1);
console.log(1 == true);
console.log("false" == false);
console.log("false" == true);
if("false") console.log("Hello false!");

// ---- Task 4.2: Hard Comparison ----
console.log('1' === 1);
console.log(1 === true);
console.log("true" === true);

// ---- Task 4.3: FizzBuzz ----
for(let i = 1; i <= 50; i++) {
  if(i % 3 === 0 && i % 5 === 0) console.log('fizzbuzz');
  else if(i % 3 === 0) console.log('fizz');
  else if(i % 5 === 0) console.log('buzz');
  else console.log(i);
}

// ---- Task 5: Date & Math ----
let nowTimestamp = Date.now();
console.log("Unix timestamp:", nowTimestamp);
let now = new Date(nowTimestamp);
let date = new Date(2019, 11, 17, 3, 24, 0);
console.log(date.toLocaleDateString("en-US"));
console.log(`${now.getDate()} - ${now.getMonth() + 1} - ${now.getFullYear()}`);
let difference = now - date;
let daysBetween = difference * 1.15741e-8;
console.log("Days between:", daysBetween);
console.log(Math.sqrt(9), Math.pow(2,3), Math.floor(12.3453), Math.ceil(12.3453), Math.abs(-34), Math.random());
function randInt(min, max){ return Math.floor(Math.random() * (max - min + 1) + min); }
console.log("Random int 1–10:", randInt(1,10));

// ---- Task 6: Functions & Callbacks ----
function happyPrint(string){ console.log("😀: " + string); }
function sadPrint(string){ console.log("😢: " + string); }
function add(a, b, callback){ let ans = a + b; callback(ans); }
add(5, 10, happyPrint);
add(11, 12, sadPrint);

// ---- Task 7: Set Interval ----
function printDate(){ console.log(new Date().toLocaleTimeString()); }
setInterval(printDate, 1000);

// ---- Task 8: Arrays ----
let arr = [ -5, 16, 33, 42, 103, 344 ];
console.log(arr.includes(-5));
arr.push(11);
console.log(arr);
let lastItem = arr.pop();
console.log(lastItem, arr);
arr.unshift(22);
console.log(arr);
let firstItem = arr.shift();
console.log(firstItem, arr);
let reversed = arr.reverse();
console.log(reversed);
console.log(arr.join('-'));

// ---- Task 8.2: Callback Array Methods ----
let arr2 = [12, 33, 4, 5, -4, 8, 19, 25];
function double(num){ return num * 2; }
let doubledArr = arr2.map(double);
console.log(doubledArr);
function isOdd(num){ return num % 2 !== 0; }
let odds = arr2.filter(isOdd);
console.log(odds);
function has5Factor(ele){ return ele % 5 === 0; }
let hasFiveFactor = arr2.some(has5Factor);
console.log(hasFiveFactor);
function intCompare(a, b){ return a - b; }
let ascending = arr2.sort(intCompare);
console.log(ascending);

// ---- Task 9: Object Literals ----
function createPerson(name, height, weight) {
  return { name: name, height: height, weight: weight };
}
function calcBMI(weight, height) { return weight / (height * height); }
function avgBMI(people) {
  let sum = 0;
  for (let person of people) sum += calcBMI(person.weight, person.height);
  return sum / people.length;
}
let people = [
  createPerson("Sally", 60, 2.5),
  createPerson("Ben", 81, 3),
  createPerson("Shelly", 50, 1.7)
];
console.log("Average BMI:", avgBMI(people));

// ---- Task 10: Exercise ----
let bob = {
  fname: "bob", lname: "smith", age: 18, height: 6,
  transcript:[ { course: 'INFO 1603', grades: [89, 34, 67] }, { course: 'INFO 1601', grades: [89, 34, 67] } ]
};
let sally = {
  fname: "sally", lname: "smith", age: 18, height: 6,
  transcript:[ { course: 'INFO 1601', grades: [100, 89, 79] } ]
};
let paul = {
  fname: "paul", lname: "smith", age: 18, height: 6,
  transcript:[ { course: 'INFO 1600', grades: [89, 34, 67] } ]
};
const students = [bob, sally, paul];

function getAverageGrade(student, course){
  let courseObj = student.transcript.find(c => c.course === course);
  if(!courseObj) return -1;
  let sum = courseObj.grades.reduce((a,b)=>a+b,0);
  return sum / courseObj.grades.length;
}

function getAssignmentMark(student, course, num){
  let courseObj = student.transcript.find(c => c.course === course);
  if(!courseObj) return -1;
  return courseObj.grades[num-1] ?? -1;
}

function averageAssessment(students, courseName, assignment){
  let total = 0, count = 0;
  for(let student of students){
    let mark = getAssignmentMark(student, courseName, assignment);
    if(mark !== -1){ total += mark; count++; }
  }
  return count > 0 ? total / count : -1;
}

console.log("Bob INFO1601 avg:", getAverageGrade(bob, "INFO 1601"));
console.log("Sally INFO1601 assignment 2:", getAssignmentMark(sally, "INFO 1601", 2));
console.log("Average INFO1601 assignment 2:", averageAssessment(students, "INFO 1601", 2));