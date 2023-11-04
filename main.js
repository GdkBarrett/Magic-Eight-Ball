// MAGIC EIGHT BALL 

// Step 1
let userName = "";
// console.log(userName);

// Step 2
if (userName !== "") {console.log (`Hello ${userName}!`);}
else if (userName === "") {console.log ('Hello!');}

// Step 3
let userQuestion = 'Will I be a great coder next week?';
// console.log(userQuestion);

// Step 4
if (userName !== "") {console.log (`${userName}, ${userQuestion}`);}
else if (userName === "") {console.log (`${userQuestion}`);}

// Step 5
let randomNumber = Math.floor(Math.random () * 8);
// console.log (randomNumber);

// Step 6
let eightBall = ""

// Step 7
if (randomNumber === 1) {eightBall = "It is certain."};
if (randomNumber === 2) {eightBall = "It is decidedly so."};
if (randomNumber === 3) {eightBall = "Hazy, try again."};
if (randomNumber === 4) {eightBall = "Cannot predict now."};
if (randomNumber === 5) {eightBall = "Do not count on it."};
if (randomNumber === 6) {eightBall = "My sources say no."};
if (randomNumber === 7) {eightBall = "Outlook not so good."};
if (randomNumber === 0) {eightBall = "Signs point to yes."};

// Step 8
console.log(eightBall);
