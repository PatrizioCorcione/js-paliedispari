const inpJs = document.getElementById("input");
const inpDadiJs = document.getElementById("inp-dadi")
const inpResult = document.getElementById("inp-result")
const btnJs = document.getElementById("btn-word");
const btnDadiJs = document.getElementById("btn-dadi");
const resultJs = document.getElementById("result")
const resultCalc = document.getElementById("result-calc")



btnJs.addEventListener("click", function(){
  
  const wordCheck = inpJs.value;
  palindro(wordCheck,resultJs);

})



btnDadiJs.addEventListener('click',function(){

  
  const numberPlayer = parseInt(inpDadiJs.value);
  const numeroPc = RandomNumber(1,5);
  const addedNumber = numberPlayer + numeroPc;

  if((inpResult.value.toLowerCase() !== "pari") && (inpResult.value.toLowerCase() !== "dispari") ){

    resultCalc.innerHTML = "ATTENZIONE!!! Inserisci pari o dispari"

  }else if((numberPlayer < 1) || (numberPlayer > 5)){

    resultCalc.innerHTML = "ATTENZIONE!!! Inserisci un numero da 1 a 5"

  }else if (inpResult.value == checkParDisp(addedNumber)) {

    resultCalc.innerHTML = "HAI VINTO"

  }else{resultCalc.innerHTML = "HAI PERSO"}

})

/*FUNZIONI*/

function palindro(word, eIHTML) {

  if (word.length < 3) {

    return eIHTML.innerHTML = "Inserisci una parola di almeno tre lettere."
    
  }
  const wardRevers = word.split("").reverse().join("");
  return eIHTML.innerHTML = word === wardRevers ? "palindromo" : "non palindromo";
 
}

function RandomNumber(min, max){

  return Math.floor(Math.random() * (max - min + 1) + min);

}

function checkParDisp(summ){

  if (summ % 2 ==0) {
    return "pari"
    
  }else{

    return "dispari"
  } 
  
}
