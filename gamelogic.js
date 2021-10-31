let cards = document.querySelectorAll("#game>div");
let cardsContainer = document.querySelector("#game");

let lastCard = -1;
let cardActive = 0;

let a = document.querySelector("div.red");

//Give each card an id
for (let i = 0; i < cards.length; i++) {
  cards[i].setAttribute("id", i);
}

for (const card of cards) {
  card.addEventListener("click", (e) => {
    if (cardActive >= 2) {return};
    let match = checkMatch(e.target); //Checks if lastCard and current card match colors
    if (match) {return}; //Stops function if card is newly/previously matched
  
    timedColor(e.target);
    if(e.target.classList.value) {
      lastCard = parseInt(e.target.id);
    }
    console.log(lastCard)
  });

}

const timedColor = (card) => {
  
  // if (lastCard == parseInt(card.id) && card.style.backgroundColor || card.classList.contains("matched")) {
  //   console.log("successfully cancelled toggledCard color");
  //   return;
  // }
  toggleCardColor(card, 1);
  setTimeout(toggleCardColor, 1000, card, -1);
};

const toggleCardColor = (input, activeStateCount) => {
  cardActive += activeStateCount;
  if (input.classList.contains("matched")) {
    return;
  };
  
  if (!input.style.backgroundColor) {
    input.style.backgroundColor = input.classList.value;
  } else {
    input.style.backgroundColor = "";
  }
  
};

const checkMatch = (e) => {
  if(lastCard == -1) {lastCard=e.id}
  console.log(lastCard);
  let thisCardColor = e.classList.value;
  let thisCardIdx = e.id;
  if(thisCardColor == cards[lastCard].classList.value && thisCardIdx != lastCard){
    // console.log(`We got a match! It's ${thisCardColor}!!`);
    console.log(thisCardIdx + lastCard);
    e.style.backgroundColor=e.classList.value;
    e.classList.toggle("matched");
    cards[lastCard].style.backgroundColor=cards[lastCard].classList.value;
    cards[lastCard].classList.toggle("matched");
  }
  
  if(e.classList.contains("matched")){return 1};

  return;
}