import { Card } from './Card'
import { createElement } from '../utils'
import path from 'path'

export class Playground {
    constructor(cards_data, container, finish_game){
        this.container = container
        this.finish_game = finish_game
        while(this.container.firstChild){
            this.container.removeChild(this.container.firstChild)
        }

        this.cards = []
        for (const item of this.getRandomArr()){
            const card = new Card(this.container)
            card.face.style.backgroundImage = `url(${window.location.pathname}static/img/Cards/${cards_data[item].img})`
            card.name = cards_data[item].name
            this.cards.push(card)
        }
        let left = 0;
        let top = 0;
        for (let index in this.cards){
            if (index == 6 || index == 12){
                top += 173;
                left = 0;
            }
            this.cards[index].index = index
            this.cards[index].el.style.top = `${top}px`;
            this.cards[index].el.style.left = `${left}px`;
            this.cards[index].el.addEventListener('click', this.rotateElement(this.cards[index]))
            left += 130;
        }
        this.select_card = null;
        this.select_index = -1;
        this.score = 0;
        this.layone_cards = 0;
        this.block_el = createElement(this.container, 'div', [['class', 'block']]);
        this.rotateAll()
        this.change_score = new CustomEvent('change_score', { detail: { score: this.score } });
        document.dispatchEvent( this.change_score );
        this.finish_event = new Event('finish');
    };

    rotateElement = (element) => () => {
        element.rotate()
        this.block()
        if (this.select_card == null) {
            this.select_card = element
            this.block()
        }
        else if(this.select_card.name == element.name && element.index != this.select_card.index) {
            this.layone_cards += 2;
            this.score += (18 - this.layone_cards) * 42
            setTimeout(()=>{
                this.change_score.detail.score = this.score
                document.dispatchEvent(this.change_score)
                element.el.remove()
                this.cards[this.select_card.index].el.remove()
                this.select_card = null
                this.block()
                if (this.layone_cards == 18){
                    this.finish_game()
                }
            }, 1500);
        }
        else{
            this.score -= this.layone_cards * 42
            if (this.score < 0){
                this.score = 0;
            }
            setTimeout(()=>{
                this.change_score.detail.score = this.score
                document.dispatchEvent( this.change_score )
                element.rotate()
                this.cards[this.select_card.index].rotate()
                this.select_card = null
                this.block()
            }, 1500);
        }
    };

    getRandomArr(){
        let arr = [];
        while (arr.length < 18) {
            const rand = Math.floor(Math.random() * 36);
            if (arr.indexOf(rand) == -1){
                arr.push(rand)
                arr.push(rand)
            }
        }
        let lenght = arr.length
        while (lenght != 0) {
            lenght -= 1;
            const randItem = Math.floor(Math.random()*(lenght+1))
            const tempNum = arr[lenght]
            arr[lenght] = arr[randItem]
            arr[randItem] = tempNum  
        }
        return arr
    };

    block(){
        if (this.blocked){
            this.block_el.style.zIndex = -1;    
        }
        else{
            this.block_el.style.zIndex = 0; 
        }
        this.blocked = !this.blocked
    };

    rotateAll(){
        this.block()
        setTimeout(()=>{
            for( const item of this.cards){
                item.rotate()
            }
        }, 1000)
        setTimeout(()=>{
            for( const item of this.cards){
                item.rotate()
            }
            this.block()
        }, 5000)
    };

};