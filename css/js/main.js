var quoteArray = [
  { line: "Be yourself; everyone else is already taken.", author: "--Oscar Wilde" },
  { line: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.", author: "--Marilyn Monroe" },
  { line: "So many books, so little time.", author: "--Frank Zappa" },
  { line: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "--Albert Einstein" },
  { line: "A room without books is like a body without a soul.", author: "--Marcus Tullius Cicero" },
  { line: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.", author: "--Bernard M. Baruch" },
  { line: "You only live once, but if you do it right, once is enough.", author: "--Mae West" },
  { line: "Be the change that you wish to see in the world.", author: "--Mahatma Gandhi" }
];

var quotePool = [];

function shuffleQuotes(array) {
  let shuffled = array.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function quoteGenerator() {
  if (quotePool.length === 0) {
    quotePool = shuffleQuotes(quoteArray);
  }

  var currentQuote = quotePool.shift();
  var randomIndex = Math.floor(Math.random() * quoteArray.length);
    console.log(randomIndex);
  document.getElementById("line").innerHTML = currentQuote.line;
  document.getElementById("author").innerHTML = currentQuote.author;
}