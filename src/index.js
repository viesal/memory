'use strict'

let play = require('./playground')

console.log('123')
function initGame(){
    let cont1 = document.getElementById('cont1')
    let cont2 = document.getElementById('cont2')
    let cont3 = document.getElementById('cont3')
    cont1.style.visibility = 'visible';
    cont2.style.visibility = 'hidden';
    cont3.style.visibility = 'hidden';
}

function startGame(){
    let cont1 = document.getElementById('cont1')
    let cont2 = document.getElementById('cont2')
    let cont3 = document.getElementById('cont3')
    cont1.style.visibility = 'hidden';
    cont2.style.visibility = 'visible';
    cont3.style.visibility = 'hidden';
    playground = new play.Playground(cards, document.getElementById('cards'))
}

function finishGame(){
    let cont1 = document.getElementById('cont1')
    let cont2 = document.getElementById('cont2')
    let cont3 = document.getElementById('cont3')
    cont1.style.visibility = 'hidden';
    cont2.style.visibility = 'hidden';
    cont3.style.visibility = 'visible';
}

window.onload = () => {
    initGame()
    document.addEventListener('finish', function(){
        finishGame()
    });
    document.addEventListener('change_score', function(e){
        for (let item of document.getElementsByClassName('score')){
            item.innerHTML = e.detail.score;
        }
    });

    for (let item of document.getElementsByClassName('StartGame')){
        item.addEventListener('click', startGame())
    }
}