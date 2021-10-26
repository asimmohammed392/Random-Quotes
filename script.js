const quote = document.getElementById("quote");
const author = document.getElementById("author");

function getQuote(){
    fetch("http://quotes.stormconsultancy.co.uk/random.json")
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        quote.innerText=data.quote;
        author.innerText=`-${data.author}`;
    });
}
getQuote();