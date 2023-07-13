const main = document.querySelector("main");
const main_title = document.createElement("h2");
main_title.setAttribute("class", "main-title");
main_title.innerText = "НАШИ САМЫЕ БОЛЬШИЕ ПРОЕКТЫ"
main.append(main_title);
const main_main_cards = document.createElement("div")
main_main_cards.setAttribute("class", "main-main-cards")

const cards = [
    ["./images/img.main/arena.svg"],
    ["Арена"],
    ["Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для разивтия на следующие десятилетия. Мы очень рады данному еву."]
];



for(let i = 0; i <= 2; i++){

const main_cards = document.createElement("div");
main_cards.setAttribute("class", "main-cards");

const cards_icon = document.createElement("img");
cards_icon.setAttribute("class", "cards-icon");
cards_icon.src = cards[0];
main_cards.append(cards_icon);

const cards_bar = document.createElement("div");
cards_bar.setAttribute("class", "cards-bar");
main_cards.append(cards_bar);

const cards_title = document.createElement("h3");
cards_title.setAttribute("class", "cards-title");
cards_title.innerText = cards[1];
main_cards.append(cards_title);

const cards_text = document.createElement("p");
cards_text.setAttribute("class", "cards-text")
cards_text.innerText = cards[2];
main_cards.append(cards_text);

main.append(main_main_cards);
main_main_cards.append(main_cards)}
