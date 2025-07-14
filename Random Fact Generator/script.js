let fact = document.querySelector('.fact');
let category = document.querySelector('.category');
let btn = document.querySelector('#button');
const facts = [
    {
    fact: "Bananas are berries, but strawberries are not.",
    category: "Science"
  },
  {
    fact: "A group of flamingos is called a 'flamboyance'.",
    category: "Animals"
  },
  {
    fact: "Octopuses have three hearts.",
    category: "Biology"
  },
  {
    fact: "The Eiffel Tower can be 15 cm taller during hot days.",
    category: "Engineering"
  },
  {
    fact: "Honey never spoils and has been found in ancient Egyptian tombs.",
    category: "History"
  }
];

function displayRandomFacts(){

let random = Math.floor(Math.random() * facts.length);
fact.innerText = facts[random].fact;
category.innerText = facts[random].category;
}
btn.addEventListener('click', displayRandomFacts);
