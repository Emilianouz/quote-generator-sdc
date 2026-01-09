const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");

const button = document.getElementById("new-quote");

async function fetchQuote() {
  const response = await fetch("http://localhost:3000");
  const data = await response.json();
  quoteElement.textContent = data.quote;
  authorElement.textContent = data.author
}


button.addEventListener("click", fetchQuote);