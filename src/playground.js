class Card {
    constructor(container) {
        this.el = document.createElement('div');
        this.el.className = 'Card';

        this.shirt = document.createElement('div');
        this.shirt.className = 'Card__shirt';

        this.face = document.createElement('div');
        this.face.className = 'Card__face';

        this.container = container;

        this.container.appendChild(this.el);
        this.el.appendChild(this.shirt);
        this.el.appendChild(this.face);

    }

    rotate() {
        if (this.rotated) {
            this.el.className = 'Card';
        } else {
            this.el.className = 'Card Card_rotated';
        }
        this.rotated = !this.rotated;
    }

    
};

class Playground {
    constructor(cards_data, container){
        this.container = container
        while(this.container.firstChild){
            this.container.removeChild(this.container.firstChild)
        }

        this.cards = []
        // let arr = this.randomArr()
        for (let item of this.randomArr()){
            let obj = new Card ( this.container )
            obj.face.style.backgroundImage = 'url('+ cards_data[item].img +')'
            obj.name = cards_data[item].name
            this.cards.push(obj)
        }
        let left = 0;
        let top = 0;
        for (let index in this.cards){
            if (index == 6 || index == 12){
                top += 173;
                left = 0;
            }
            this.cards[index].index = index
            this.cards[index].el.style.top = top+'px';
            this.cards[index].el.style.left = left+'px';
            this.cards[index].el.addEventListener('click', () =>{
                this.rotateElement(this.cards[index])
            })
            left += 130;
        }
        this.select_card = null;
        this.select_index = -1;
        this.score = 0;
        this.layone_cards = 0;

        this.block_el = document.createElement('div');
        this.block_el.className = 'Block';

        this.container.appendChild(this.block_el)

        this.rotateAll()

        this.change_score = new CustomEvent('change_score', {detail: {score: this.score}});

        this.finish_event = new Event('finish');

    };

    randomArr(){
        let arr = [];
        while (arr.length < 18) {
            let rand = Math.random() * 36;
            rand = Math.floor(rand);
            if (arr.indexOf(rand) == -1){
                arr.push(rand)
                arr.push(rand)
            }
        }
        let lenght = arr.length
        while (lenght != 0) {
            lenght -= 1;
            let randItem = Math.floor(Math.random()*(lenght+1))
            let tempNum = arr[lenght]
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

    rotateElement(element){
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
                document.dispatchEvent( this.change_score )
                element.el.remove()
                this.cards[this.select_card.index].el.remove()
                this.select_card = null
                this.block()
                if (this.layone_cards == 18){
                    document.dispatchEvent( this.finish_event );
                }
            }, 1500);
        }
        else{
            this.score -= this.layone_cards * 42
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

    rotateAll(){
        this.block()
        setTimeout(()=>{
            for( let item of this.cards){
                item.rotate()
            }
        }, 1000)
        setTimeout(()=>{
            for( let item of this.cards){
                item.rotate()
            }
            this.block()
        }, 5000)
    };

};