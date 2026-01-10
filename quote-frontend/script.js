const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");

const button = document.getElementById("new-quote");

async function fetchQuote() {
  const response = await fetch("https://emiliano-quote-generator-sdc-backend.hosting.codeyourfuture.io/");
  const data = await response.json();
  quoteElement.textContent = data.quote;
  authorElement.textContent = data.author
}


button.addEventListener("click", fetchQuote);
