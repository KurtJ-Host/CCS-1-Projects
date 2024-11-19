
function calculate(){
    
    roomArea = document.getElementById('roomLength').value * document.getElementById('roomWidth').value
    document.getElementById('roomArea').innerHTML = roomArea;
    console.log(roomArea);

    rugAmount = roomArea / 2
    document.getElementById('rugAmount').innerHTML = rugAmount;
}

function reset(){
    roomArea = 0
    document.getElementById('roomArea').innerHTML = roomArea;
    roomLength = 0
    document.getElementById('roomLength').value;
    roomWidth = 0
    document.getElementById('roomWidth').value;
    rugAmount = 0
    document.getElementById('rugAmount').innerHTML = rugAmount;
}