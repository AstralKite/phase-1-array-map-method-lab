const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];



const titleCased = () => {
  let myArray = [];
  let newThing = [];
  let firstLetter, restOfWord = '';
  
  thing = tutorials[0].split(" ");
  
  for(const word of thing){
    console.log(word)
    
    //separate string with first letter and rest of string. 
    restOfWord = word.slice(1);
    firstLetter = word[0].toUpperCase();
    
    
    
    myArray.push(firstLetter + restOfWord);
  }
  
  
  return myArray;
}

console.log(titleCased());