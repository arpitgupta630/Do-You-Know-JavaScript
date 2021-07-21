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

let questionList = [
    {
        question: 'Which Keyword create Block Scoped Variable between var and let?',
        answer: 'let'
    },
    {
        question: 'What extension use to create/save JavaScript file?',
        answer: '.js'
    },
    {
        question: 'Which Data Structure has Key Value Pairs?',
        answer: 'object'
    },
    {
        question: 'Which Data Structure you will use to make a list?',
        answer: 'array'
    },
    {
        question: 'How do you find length of a array named \'movieList\'?',
        answer: 'movieList.length'
    }
]

