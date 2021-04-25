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
  quote: 'It is better to be hated for what you are than to be loved for what you are not.',
  source: 'Andre Gide', 
  citation: 'Autumn Leaves',
  year: 'unknown'
  },
   
  {

  quote: ' You only live once, but if you do it right, once is enough Mae West',
  source: 'Mahatma Gandh'
  
  },
  
  {

  quote: 'Be the change that you wish to see in the world.',
  source: 'Mahatma Gandh'
  
  },
  
  {
  quote: 'I have learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.',
  source: 'Maya Angelou'
  },
  
  {
  quote: 'Any application that can be written in JavaScript, will eventually be written in JavaScript',
  source: 'Jeff Atwood',
  citation: 'codinghorror',
  year: 2007 
  }
  
  ]
  
  
  /***
   * `getRandomQuote` function
  ***/
  // function to choose a random number and then pull the corresponding quote.
  
  function getRandomQuote() {

    let randNumber = Math.floor(Math.random() * quotes.length);

    return quotes[randNumber];
  }
  //checking random quote function
  // console.log(getRandomQuote() );
  
  
  /***
   * `printQuote` function
  ***/
  // function that uses the random object and prints to html.
  
  function printQuote() {
    
    let RQuote = getRandomQuote();
    
    let qouteEle = `<p class= "quote" >${RQuote.quote}</p><p class= "source" >${RQuote.source} `;
      
      if  (RQuote.citation) {
        qouteEle += `<span class = "citation">${RQuote.citation}</span>`;
      }
      
      if (RQuote.year) {
        qouteEle += `<span class="year">${RQuote.year}</span>`;
      }
    let htmlFinal = qouteEle + `</p>`;
    
  document.getElementById('quote-box').innerHTML = htmlFinal;
  }
  // console.log(printQuote);
  
  /***
   * click event listener for the print quote button
   * DO NOT CHANGE THE CODE BELOW!!
  ***/
  // I did not change this code :)
  document.getElementById('load-quote').addEventListener("click", printQuote, false);