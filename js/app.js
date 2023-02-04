// 1. printGreeting

// Write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting.

// console.log(printGreeting("Slimer"));

//     => Hello there, Slimer!

function printGreeting(name) {
    return `Hello there, ${name}!`;
}

// console.log(printGreeting("Slimer"));
// all good, OK

// 2. reverseWordOrder

// Write a function reverseWordOrder that accepts a single argument, a string. The function should return a string with the order of the words reversed. Don’t worry about punctuation.

function reverseWordOrder(sentence) {
    let reverseSentence = ' ';
    let sentArr = sentence.split(' ');
    for (let i = sentArr.length - 1; i >= 0; i--) {
        const element = sentArr[i];
        if (i===0) {reverseSentence += element;}
        else {reverseSentence += element + ' ';}
    }
    return reverseSentence;
}

// console.log(reverseWordOrder("Ishmael me Call"));

//     => "Call me Ishmael"

// console.log(reverseWordOrder("I use Lâncome on my comb"));

//     => "comb my on Lâncome use I"