let readlineSync = require('readline-sync');

console.log('Host: What is your Name?');
let userName = readlineSync.question('You: ');

console.log('\nHost: Hello',userName, '\b, Welcome to DO YOU KNOW JavaScript? A Quiz Game.');

let score = 0
console.log('Initial Score:', score);

console.log('\n:RULES:\n1. Right Answer will increase 2 Marks and Worng Answer will deducte 1 Mark.\n2. Case Sensitive Input.');

