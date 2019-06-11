import { createElement } from '../utils'

export class Card {
    constructor(container) {
        this.container = container;
        this.el = createElement(this.container, 'div', [['class', 'card']]);
        this.shirt = createElement(this.el, 'div', [['class', 'card__shirt'], ['data-tid', 'card-flipped']]);
        this.face = createElement(this.el, 'div', [['class', 'card__face'], ['data-tid', 'card']]);
    }

    rotate() {
        if (this.rotated) {
            this.el.className = 'card';
        } else {
            this.el.className = 'card card_rotated';
        }
        this.rotated = !this.rotated;
    }

    
};