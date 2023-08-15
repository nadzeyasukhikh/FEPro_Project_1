import {cardsData} from "./scripts/utils.js"
import {main} from "./scripts/globalVariables.js"
import {createElement} from "./scripts/logic.js"



const main_title = createElement("h2", "main-title");
main_title.innerText = "НАШИ САМЫЕ БОЛЬШИЕ ПРОЕКТЫ";
main.append(main_title);

const main_main_cards = createElement("div", "main-main-cards");
main.append(main_main_cards);

function createCards(cardsData) {
    cardsData.forEach(card => {
        const main_cards = createElement("div", "main-cards");
        main_main_cards.append(main_cards);
    
        const cards_icon = createElement("img", "cards-icon");
        cards_icon.src = card.icon;
        main_cards.append(cards_icon);
    
        const cards_bar = document.createElement("div");
        cards_bar.setAttribute("class", "cards-bar");
        main_cards.append(cards_bar);
    
        const cards_title = createElement("h3", "cards-title");
        cards_title.innerText = card.title;
        main_cards.append(cards_title);
    
        const cards_text = createElement("p", "cards-text");
        cards_text.innerText = card.text;
        main_cards.append(cards_text);
    });
    }

createCards(cardsData);