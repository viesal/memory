function randomCards(cards) {
        let arr = [], card = [];
        while (arr.length < 9) {
            let rand = Math.random() * 36;
            rand = Math.floor(rand);
            if (arr.indexOf(rand) == -1){
                arr.push(rand)
                card.push(cards[rand]);
                card.push(cards[rand]);
            }
        }
        let lenght = card.length
        while (lenght != 0) {
            let randItem = Math.floor(Math.random() * (lenght+1))
            lenght -= 1;
            let tempNum = card[lenght]
            card[lenght] = card[randItem]
            card[randItem] = tempNum
        }
        return card;
    }

    function visibleCards(img_item, arr) {

       return img_item
    }

    window.onload = function () {
        let cont1 = document.getElementById('cont1')
        let cont2 = document.getElementById('cont2')
        let cont3 = document.getElementById('cont3')
        cont1.style.visibility = 'visible';
		cont2.style.visibility = 'hidden';
		cont3.style.visibility = 'hidden';
    }

    const length = document.getElementsByClassName('card')
    const temp = {}
    let playground = {}
    temp.select_card = null
    temp.select_index = -1
    temp.layone_cards = 0
    temp.score = 0
    temp.view_score = function () {
        document.getElementById('score').innerHTML = this.score
        document.getElementById('score_end').innerHTML = this.score
    }
	temp.visible_card = 'img/image.png'
	temp.hidden_card = 'img/null.png'

    function startGame() {
        playground = randomCards(card)
		for (let i=0; i<length.length; i++){
//			length[i].innerHTML = '<img src="img/image.png" class="shirt-card"> <img src="img/null.png" class="card-img">'
//			length[i].lastElementChild.style.visibility = 'hidden';
            //console.log(playground[i])
			length[i].lastElementChild.src = playground[i].img;
        }
		invertCard(length, true)
        let cont1=document.getElementById('cont1')
        let cont2=document.getElementById('cont2')
        let cont3=document.getElementById('cont3')
        cont1.style.visibility = 'hidden';
        cont2.style.visibility = 'visible';
        cont3.style.visibility = 'hidden';
        setTimeout(function () {
            invertCard(length, false);
            gamePlay();
        }, 5000)
    }

    function finishGame() {
        let cont1=document.getElementById('cont1')
        let cont2=document.getElementById('cont2')
        let cont3=document.getElementById('cont3')
        cont2.style.visibility = 'hidden';
        cont2.style.visibility = 'hidden';
        cont3.style.visibility = 'visible';
//        cont1.style.z-index = '3';
//        cont2.style.z-index = '2';
//        cont3.style.z-index = '1';
    }

    function gamePlay() {
    for (let i=0; i<length.length; i++) {
        length[i].addEventListener('click', function () {
			invertCard([length[i]], true)
            if (temp.select_card == null) {
                temp.select_card = playground[length[i].dataset.cardid]
                temp.select_index = length[i].dataset.cardid

            }
            else if (temp.select_card.name == playground[length[i].dataset.cardid].name) {
                temp.select_card = null // обнуляем выбранную карту
                temp.score += (18 - temp.layone_cards) * 42 // наращваем количесво очков
                temp.view_score()
                setTimeout(function () {
					length[temp.select_index].innerHTML = '<img src="img/null.png">'
					length[i].innerHTML = '<img src="img/null.png">'
                    /*
						необходимо очистить список событий
					*/
                }, 1000)
                temp.layone_cards += 2 // наращиваем количество убранных карт
                console.log(temp.layone_cards)
                if (temp.layone_cards == 18) {
                    finishGame()
                    console.log('финиш')
                }
            }
            else {
                temp.select_card = null
                temp.score -= temp.layone_cards * 42
                if (temp.score < 0) {
                    temp.score = 0
                }
                temp.view_score()
                setTimeout(function () {
					invertCard([length[temp.select_index]], false)
					invertCard([length[i]], false)
                }, 1000)
            }


        })
    }
    }

	function invertCard(HTMLcollection, bool) {
		for (let i = 0; i < HTMLcollection.length; i++){
			if (bool){
				HTMLcollection[i].lastElementChild.style.transform = 'rotateY( -89deg )';
				HTMLcollection[i].firstElementChild.style.transition = 'transform .25s cubic-bezier(0, 0, 1, 1)';
				HTMLcollection[i].firstElementChild.style.transform = 'rotateY( 89deg )';
			}
			else{
				HTMLcollection[i].firstElementChild.style.transform = 'rotateY( -89deg )';
				HTMLcollection[i].lastElementChild.style.transition = 'transform .25s cubic-bezier(0, 0, 1, 1)';
				HTMLcollection[i].lastElementChild.style.transform = 'rotateY( 89deg )';
			}
			HTMLcollection[i].firstElementChild.addEventListener('transitionend', function () {
				if (bool){
				    console.log('true')
					HTMLcollection[i].lastElementChild.style.visibility = 'visible';
					HTMLcollection[i].firstElementChild.style.visibility = 'hidden';
					HTMLcollection[i].lastElementChild.style.transition = 'transform .25s cubic-bezier(0, 0, 1, 1)';
					HTMLcollection[i].lastElementChild.style.transform = 'rotateY( 0deg )';
					}
				else{
                    console.log('false')
					HTMLcollection[i].firstElementChild.style.visibility = 'visible';
					HTMLcollection[i].lastElementChild.style.visibility = 'hidden';
					HTMLcollection[i].firstElementChild.style.transition = 'transform .25s cubic-bezier(0, 0, 1, 1)';
					HTMLcollection[i].firstElementChild.style.transform = 'rotateY( 0deg )';
				}
			}, {once: true})
			/*
				необходимо очистить список событий
			*/
		}
	return true
	}
