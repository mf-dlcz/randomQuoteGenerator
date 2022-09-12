/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array with 5 objects: keys and their property values
***/
let quotes = [ 
  {
    quote: 'Either you run the day or the day runs you',
    source: 'Jim Rohn'
  },
  {
    quote: 'Just one small positive thought in the morning can change your whole day',
    source: 'Dalai Lama',
    year: 1850
  },
  {
    quote: 'Opportunities don\'t happen, you create them.',
    source: 'Chris Grosser'
  },
  {
    quote: 'Life is like riding a bicycle. To keep your balance you must keep moving.',
    source: 'Albert Einstein'
  },
  {
    quote: 'You don\'t always need a plan. Sometimes you just need to breathe, trust, let go and see what happens.',
    source: 'Mandy Hale',
    citation: 'Twitter'
  }
];

/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  // 1. Create a variable that generates a random number
  // between zero and the last index in the `quotes` array

  // 2. Use the random number variable and bracket notation 
  // to grab a random object from the `quotes` array, and 
  // store it in a variable

  // 3. Return the variable storing the random quote object
}

/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);