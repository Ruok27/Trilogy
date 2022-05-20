




let letters = [];
let winCount = 0;
let loseCount = 0;
let guessCount = 10;
let guessLetters = 0;
let cpuChoice = letters[Math.floor(Math.random() * (25 - 0 + 1)) + 0];




document.onkeydown = function(event){
let input = event.key.toLowerCase();

//This literally took 10 minutes for me to figure out cause i wanted a quicker way to set up an alphabet array instead of typing it all in
for (let i = 97; i < 123;i++){
    
    letters.push(String.fromCharCode(i));

}


if (guessCount==0){
    guessLetters = " ";
    loseCount++;
    guessCount +=11;
    document.getElementById("lose-count").innerHTML = loseCount;
    cpuChoice = letters[Math.floor(Math.random() * (25 - 0 + 1)) + 0];

        
    }


if (input === cpuChoice){
    winCount++;
    document.getElementById("win-count").innerHTML = winCount;
    console.log("You won! " + input + " " + cpuChoice);
    guessLetters = " ";
    document.getElementById("guess-letters").innerHTML = guessLetters;
    cpuChoice = letters[Math.floor(Math.random() * (25 - 0 + 1)) + 0];

    
}

else 
guessCount--;
guessLetters += " "+ input; 
console.log(input + " " + cpuChoice);
document.getElementById("guess-left").innerHTML = guessCount;
document.getElementById("guess-letters").innerHTML = guessLetters;


}











