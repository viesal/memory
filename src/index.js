import './css/style.css'
import { Playground } from './Playground'
import { cards } from './cards'
import { createElement } from './utils'

class InitGame {
    constructor(container) {
        this.container = container
        this.cont1 = createElement(this.container, 'div', [["id", 'cont1'], ['class', 'container1'], ['data-tid', 'App']], 'visibility: visible')
        this.cont2 = createElement(this.container, 'div', [["id", 'cont2'], ['class', 'container2'], ['data-tid', 'Deck']], 'visibility: hidden')
        this.cont3 = createElement(this.container, 'div', [["id", 'cont3'], ['class', 'container3']], 'visibility: hidden')
    
        this.initGame()
        document.addEventListener('finish', function(){
            this.finishGame()
        });
        document.addEventListener('change_score', function(e){
            for (const item of document.getElementsByClassName('score')){
                item.innerHTML = e.detail.score;
            }
        });
        
    }
      
    initGame() {
        this.createCont1()
        this.createCont2()
        this.createCont3()
    }

    createCont1() {
        createElement(this.cont1, 'img', [['src', '../static/img/StartGame.png'], ['alt', 'StartGame']])
        const h1 = createElement(this.cont1, 'h1', [['class', 'mg']])
        h1.innerText = 'MemoryGame'
        const buttonStart = createElement(this.cont1, 'button', [['type', 'button'], ['data-tid', 'NewGame-startGame']])
        buttonStart.innerText = 'Начать игру'
        buttonStart.addEventListener('click', this.startGame)
    }

    createCont2() {
        const head = createElement(this.cont2, 'div', [['class', 'header']])
        const divHref = createElement(head, 'div')
        const a = createElement(divHref, 'a', [['href', '#'], ['class', 'startGame'], ['data-tid', 'Menu-newGame']])
        a.innerText = 'Начать заного'
        a.addEventListener('click', this.startGame)
        const noopDiv = createElement(head, 'div')
        noopDiv.innerText = 'Очки: '
        const span = createElement(noopDiv, 'span', [['class', 'score'], ['id', 'score'], ['data-tid', 'Menu-scores']])
        span.innerText='0'
        createElement(this.cont2, 'div', [['id', 'cards'], ['class', 'cards']])
    }

    createCont3() {
        createElement(this.cont3, 'img', [['src', '../static/img/Group2.png'], ['alt', 'FinishGame']])
        const h1 = createElement(this.cont3, 'h1')
        const grac = createElement(h1, 'div')
        grac.innerText = 'Поздравляем!'
        const score = createElement(h1, 'div')
        score.innerText = 'Ваш итоговый счет: '
        const span = createElement(score, 'span', [['class', 'score'], ['id', 'score_end']])
        span.innerText = '0'
        const button = createElement(this.cont3, 'button', [['type', 'button'], ['data-tid', 'EndGame-retryGame']])
        button.innerText = 'Еще раз'
        button.addEventListener('click', this.startGame)
    }

    startGame = () => {
        this.cont1.style.visibility = 'hidden';
        this.cont2.style.visibility = 'visible';
        this.cont3.style.visibility = 'hidden';
        new Playground(cards, document.getElementById('cards'))
    }

    finishGame(){
        this.cont1.style.visibility = 'hidden';
        this.cont2.style.visibility = 'hidden';
        this.cont3.style.visibility = 'visible';
    }
}

window.onload = () => {
    const init = new InitGame(document.body)  
}