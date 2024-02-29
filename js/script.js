const inpJs = document.getElementById("input");
const inpDadiJs = document.getElementById("inp-dadi")
const inpResult = document.getElementById("inp-result")
const btnJs = document.getElementById("btn-word");
const btnDadiJs = document.getElementById("btn-dadi");
const resultJs = document.getElementById("result")
const resultCalc = document.getElementById("result-calc")

btnJs.addEventListener("click", function(){
  const wordCheck = inpJs.value.toLowerCase();
  if (wordCheck.length < 3) {

    return resultJs.innerHTML = "Attenzione!!! Inserisci una parola di almeno tre lettere."
    
  }
  
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

  }else if (!checkParDisp(addedNumber)){

    resultCalc.innerHTML = `Tu hai scielto il numero ${numberPlayer}.<br>
    Il computer ha scielto il numero ${numeroPc}.<br>
    La somma e ${addedNumber} e quindi e ${checkParDisp(addedNumber)} .<br>
    HAI VINTO`
    

  }else{
  resultCalc.innerHTML = `Tu hai scielto il numero ${numberPlayer}.<br>
  Il computer ha scielto il numero ${numeroPc}.<br>
  La somma e ${addedNumber} e quindi e ${checkParDisp(addedNumber)} .<br>
  HAI PERSO`}

})

/*FUNZIONI*/

function palindro(word, eIHTML) {

  for (let i = 0; i < word.length/2; i++) {
    if (word[i] !== word[word.length - 1 - i]) { 
      return eIHTML.innerHTML="Non e palindroma"; 
  }
}
return eIHTML.innerHTML="E palindroma"

 
}

function RandomNumber(min, max){

  return Math.floor(Math.random() * (max - min + 1) + min);

}

function checkParDisp(summ){

  if (summ % 2 == 0) {
    return true
    
  }
  return false
}