/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array has 5 objects: Their keys and their property values (quotes, source, year, tag, and citation)
***/
let quotes = [ 
  {
    quote: 'Either you run the day or the day runs you',
    source: 'Jim Rohn',
  },
  {
    quote: 'Just one small positive thought in the morning can change your whole day',
    source: 'Dalai Lama',
    year: 'unknown'
  },
  {
    quote: 'Opportunities don\'t happen, you create them.',
    source: 'Chris Grosser'
  },
  {
    quote: 'Life is like riding a bicycle. To keep your balance you must keep moving.',
    source: 'Albert Einstein',
    tag: 'Theoretical Physicist'
  },
  {
    quote: 'You don\'t always need a plan. Sometimes you just need to breathe, trust, let go and see what happens.',
    source: 'Mandy Hale',
    citation: '100 Inspirational Quotes'
  },
  {
    quote: 'What you do makes a difference, and you have to decide what kind of difference you want to make.',
    source: 'Jane Goodall',
    citation: 'Southern New Hamphire University',
    year: 'unknown',
    tag: 'English Primatologist'
  },
  {
    quote: 'Don\’t go through life, grow through life.',
    source: 'Eric Butterworth',
    citation: 'Southern New Hamphire University',
    year: 'unknown'
  }
];

/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  // 1. Create a variable that generates a random number
  // between zero and the last index in the `quotes` array

  let randomNumb = Math.floor(Math.random()* (quotes.length));

  // 2. Use the random number variable and bracket notation 
  // to grab a random object from the `quotes` array, and 
  // store it in a variable

  let randomQuote = quotes[randomNumb];

  // 3. Return the variable storing the random quote object
  //console.log(randomQuote);
  //console.log(randomNumb);
  return randomQuote;
}

/***
 * `printQuote` function
***/
/**printQuote calls getRandomQuote(). stringQuote holds the strings inside each property value
 * (quote, source, year, tag, citation).**/
function printQuote() {

   // 1. Create a variable that calls the getRandomQuote() 
  // function

  let displayRandomQuote = getRandomQuote();

  // 2. Create a variable that initiates your HTML string with 
  // the first two <p></p> elements, their classNames, 
  // and the quote and source properties, but leave off 
  // the second closing `</p>` tag for now

  let stringQuote = `<p class='quote'> ${displayRandomQuote.quote} </p>
  <p class='source'> ${displayRandomQuote.source} `

  // 3. Use an if statement to check if the citation property 
  // exists, and if it does, concatenate a <span></span> 
  // element, appropriate className, and citation property 
  // to the HTML string

  if( displayRandomQuote.citation !== undefined ) {
    stringQuote +=`<span class='citation'>${displayRandomQuote.citation}</span>`
  }

  // 4. Use an if statement to check of the year property exists, 
  // and if it does, concatenate a <span></span> element, 
  // appropriate className, and year property to the HTML 
  //string
  if( displayRandomQuote.year !== undefined ) {
    stringQuote += `<span class='year'>${displayRandomQuote.year}</span>`
}
  if( displayRandomQuote.tag !== undefined ) {
    stringQuote += `<span class='tag'>${displayRandomQuote.tag}</span>`
  }
  // 5. After the two if statements, concatenate the closing </p> 
  // tag to the HTML string
  '</p>'
  // 6. set the innerHTML of the quote-box div to equal the 
  // complete HTML string
  return (document.getElementById('quote-box').innerHTML = stringQuote);
}
  
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);