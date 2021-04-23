/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
// Quotes array with some of my favorite lines.

const quotes = [
{ 
qoute:' "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it." ',
source: 'Patrick McKenzie ',
year: 2016,
citation: 'Twitter'
},

{
 qoute: '"It is better to be hated for what you are than to be loved for what you are not."',
 source: 'Andre Gide', 
 citation: 'Autumn Leaves'
},
 
{
 qoute:' " You only live once, but if you do it right, once is enough Mae West"',
  source: 'Mahatma Gandh'
},

{
 qoute:' "Be the change that you wish to see in the world."',
 source: 'Mahatma Gandh'
},

{
  qoute:' "I have learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."',
  source: 'Maya Angelou'
}
  
]
  
  
  /***
   * `getRandomQuote` function
  ***/
  // function to choose a random number and then pull the corresponding quote.
  
  function getRandomQuote() {
    let randomNum =  Math.floor( Math.random() * quotes.length )
    return quotes[randomNum];
  }
  //checking random quote function
  // console.log(getRandomQuote() );
  
  
  /***
   * `printQuote` function
  ***/
  // function that uses the random object and prints to html.
  
  function printQuote () {

    let Rquotes = getRandomQuote();

  let quoteinfo= `<P class = "qoute"> ${Rquotes.qoute} </p><p class = "source"> ${Rquotes.source};`
       
  if (Rquotes.citation) {
    quoteinfo += `<span class="citation"> ${Rquotes.citation}  </span>`;
  }
  
  if(Rquotes.year){
    quoteinfo += `<span class='year'> ${Rquotes.year} </span>`;
  }
  
  let lastPrint = quoteinfo + `</p>`;
  
  document.getElementById('quote-box').innerHTML =  lastPrint; 
 

}

  // console.log(printQuote);
  
  /***
   * click event listener for the print quote button
   * DO NOT CHANGE THE CODE BELOW!!
  ***/
  // I did not change this code :)
  document.getElementById('load-quote').addEventListener("click", printQuote, false);