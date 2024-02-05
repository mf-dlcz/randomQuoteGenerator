const quotes = [ 
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
 * generates a random quote that is stored in randomQuote
***/

function getRandomQuote() {

  const randomNumb = Math.floor(Math.random()* (quotes.length));
  const randomQuote = quotes[randomNumb];

  //console.log(randomQuote);
  //console.log(randomNumb);
  return randomQuote;
}

/***
 * `printQuote` 
 * printQuote calls getRandomQuote(), uses the returned randomQuote object and 
 * uses a string to display a random quote.  
***/

function printQuote() {

  let displayRandomQuote = getRandomQuote();
  let stringQuote = `<p class='quote'> ${displayRandomQuote.quote} </p>
    <p class='source'> ${displayRandomQuote.source} `

  if( displayRandomQuote.citation !== undefined ) {
    stringQuote +=`<span class='citation'>${displayRandomQuote.citation}</span>`
  }

  if( displayRandomQuote.year !== undefined ) {
    stringQuote += `<span class='year'>${displayRandomQuote.year}</span>`
}
  if( displayRandomQuote.tag !== undefined ) {
    stringQuote += `<span class='tag'>${displayRandomQuote.tag}</span>`
  }
    '</p>'
  
  return (document.getElementById('quote-box').innerHTML = stringQuote);
}
  
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);