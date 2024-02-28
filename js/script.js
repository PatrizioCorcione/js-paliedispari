const inpJs = document.getElementById("input");
const btnJs = document.querySelector("button");
const resultJs = document.getElementById("result")


btnJs.addEventListener("click", function(){
  
  const wordCheck = inpJs.value;
  palindro(wordCheck,resultJs);

})

function palindro(wordCheck, eIHTML) {

  
  if (wordCheck.length < 3) {

    return eIHTML.innerHTML = "Inserisci una parola di almeno tre lettere."
    
  }

  
  const wardRevers = wordCheck.split("").reverse().join("");
  return eIHTML.innerHTML = wordCheck === wardRevers ? "palindromo" : "non palindromo";
 
}
