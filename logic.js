let stopGame;
let xPlayed = false;
let oPlayed = false;
let divClicked;

let counter = 0;
let stopCounter = false;

const valueForX = 'X';
const valueForO = 'O';

let topLeft = '';
let topMiddle = '';
let topRight = '';
let centerLeft = '';
let centerMiddle = '';
let centerRight = '';
let bottomLeft = '';
let bottomMiddle = '';
let bottomRight = '';

let winningSign = '';
let result = '';


document.querySelector('.start').addEventListener("click", function() {

    stopGame = false;
});

document.querySelector('.reset').addEventListener("click", function(){
    clearContent();
    counter = 0;
    result = '';
});

document.querySelector('.ticTacToeButtons').addEventListener("mouseover", function (event) {
    determineWin();
});

document.querySelector('.ticTacToeButtons').addEventListener("click", function(event){
    if (event.target.innerText === valueForX || event.target.innerText === valueForO){
        stopCounter === true;
        return
    };

    if(stopGame == true){
        return;
    };
    
    if(stopCounter === false){
        counter ++;
    }
        
    if (counter < 10){
        startGame();
    };
    
    if(xPlayed === true){
        event.target.innerText = playWithX();
        xPlayed = false;
    };
    
    if(oPlayed === true){
        event.target.innerText = playWithO();
        oPlayed = false;
    };
    
    getInnerText();
});

function startGame(){
    if(counter === 1 || counter === 3 || counter === 5 || counter === 7 || counter === 9){
        playWithX();
    }else if (counter === 2 || counter === 4 || counter === 6 || counter === 8){
        playWithO();
    }else
        return
};

function playWithX (){
    xPlayed = true;
    stopCounter = false;
    return valueForX;
};

function playWithO (){
    stopCounter = false;
    oPlayed = true;
    return valueForO;
};


function determineWin (){

    if(stopGame == true){
        return;
    };

    if(topLeft === centerMiddle && topLeft === bottomRight && centerMiddle === bottomRight){
        result = topLeft;
    }else if(topRight == centerMiddle && topRight == bottomLeft && centerMiddle === bottomLeft){
        result = topRight;
    }else if(topLeft === topMiddle && topLeft === topRight && topRight === topMiddle){
        result = topLeft;
    }else if(centerLeft === centerMiddle && centerLeft === centerRight && centerMiddle === centerRight){
        result = centerLeft;
    }else if(bottomLeft === bottomMiddle && bottomLeft === bottomRight && bottomRight === bottomMiddle){
        result = bottomLeft;
    }else if(topLeft === centerLeft && topLeft === bottomLeft && bottomLeft === centerLeft){
        result = topLeft;
    }else if(topMiddle === centerMiddle && topMiddle === bottomMiddle && bottomMiddle === centerMiddle){
        winningSign = topMiddle;
    }else if(topRight === centerRight && topRight === bottomRight && bottomRight === centerRight){
        winningSign = topRight;
    };
    
    if (result != ''){
        showResult(result);
    };
};

function getInnerText(){
    
    topLeft = document.querySelector('.topLeft').innerText;
    topMiddle = document.querySelector('.topMiddle').innerText;
    topRight = document.querySelector('.topRight').innerText;
    centerLeft = document.querySelector('.centerLeft').innerText;
    centerMiddle = document.querySelector('.centerMiddle').innerText;
    centerRight = document.querySelector('.centerRight').innerText;
    bottomLeft = document.querySelector('.bottomLeft').innerText;
    bottomMiddle = document.querySelector('.bottomMiddle').innerText;
    bottomRight = document.querySelector('.bottomRight').innerText;
};

function showResult(value){

    document.querySelector('.resultBox').innerText = value + " wins!";
    stopGame = true;
};

function clearContent (){

    document.querySelector('.topLeft').innerText = '';
    document.querySelector('.topMiddle').innerText = '';
    document.querySelector('.topRight').innerText = '';
    document.querySelector('.centerLeft').innerText = '';
    document.querySelector('.centerMiddle').innerText = '';
    document.querySelector('.centerRight').innerText = '';
    document.querySelector('.bottomLeft').innerText = '';
    document.querySelector('.bottomMiddle').innerText = '';
    document.querySelector('.bottomRight').innerText = '';
    document.querySelector('.resultBox').innerText = '';

    topLeft = '';
    topMiddle = '';
    topRight = '';
    centerLeft = '';
    centerMiddle = '';
    centerRight = '';
    bottomLeft = '';
    bottomMiddle = '';
    bottomRight = '';
};
