const quotes = [
  {
    quote: "Once you choose hope, anything is possible.",
    author: "Christopher Reeve",
  },
  {
    quote: "Sometimes it takes a good fall to know where you really stand.",
    author: "Hayley Williams",
  },
  {
    quote: "There is no benefit in worrying whatsoever",
    author: "Dalai Lama",
  },
  {
    quote: "Your time is limited so don't waste it living someone else's life.",
    author: "Steve Jobs",
  },
  {
    quote: "Dream as if you'll live forever, Live as if you'll die today.",
    author: "James Dean",
  },
  {
    quote: "Love all, trust a few, do wrong to none.",
    author: "William Shakespeare",
  },
  {
    quote: "There is no limit to what we, as women, can accomplish.",
    author: "Michelle Obama",
  },
  {
    quote: "Change is inevitable. Growth is optional.",
    author: "John C. Maxwell",
  },
  {
    quote: "If you do not believe in yourself no one will do it for you.",
    author: "Kobe Bryant",
  },
  {
    quote:
      "The results you achieve will be in direct proportion to the effort you apply.",
    author: "Denis Waitley",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
