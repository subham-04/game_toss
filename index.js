var audio = new Audio("success-fanfare-trumpets-6185.mp3");
audio.loop = false; 
audio.volume = 0.5;

function toss() {
    var player1 = document.getElementById("player1").value;
    var player2 = document.getElementById("player2").value;
    
    var players = [player1, player2];
    var winnerIndex = Math.floor(Math.random() * players.length);
    var winner = players[winnerIndex];
    document.getElementById("winner").innerHTML = winner + " wins the toss!";
    var speech = new SpeechSynthesisUtterance(winner+" wins the toss");
    window.speechSynthesis.speak(speech);
    audio.play();

}

