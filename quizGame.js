let readlineSync = require('readline-sync');

console.log('Host: What is your Name?');
let userName = readlineSync.question('You: ');

console.log('\nHost: Hello',userName, '\b, Welcome to DO YOU KNOW JavaScript? A Quiz Game.');

let score = 0
console.log('Initial Score:', score);

console.log('\n:RULES:\n1. Right Answer will increase 2 Marks and Worng Answer will deducte 1 Mark.\n2. Case Sensitive Input.');

function quiz(question, answer) {
    console.log('\nHost:', question);
    let userAnswer = readlineSync.question(userName + ': ');
    if (userAnswer === answer){
        score = score + 2;
        console.log('Bravo!!!', userName,'\b, Right Answer \nNew Score:', score);
    } else{
        score--;
        console.log('Oops!!! Worng Answer\nNew Score:', score);
    }
}

