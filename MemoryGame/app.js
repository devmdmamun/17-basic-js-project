const cardArray = [
  {
    name: "king",
    src: "image/king.png",
  },
  {
    name: "king-2",
    src: "image/king-2.png",
  },
  {
    name: "queen",
    src: "image/queen.png",
  },
  {
    name: "king",
    src: "image/king.png",
  },
  {
    name: "king-2",
    src: "image/king-2.png",
  },
  {
    name: "queen",
    src: "image/queen.png",
  },
];
cardArray.sort(() => 0.5 - Math.random());
const board = document.querySelectorAll(".grid")[0];
let cardChosen = [];
let cardChosenId = [];
let cardWon = [];

function gameBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "image/gess.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    board.appendChild(card);
  }
}

function Check() {
  const cards = document.querySelectorAll("img");
  const selectedOneId = cardChosenId[0];
  const selectedTwoId = cardChosenId[1];

  if (selectedOneId == selectedTwoId) {
    cards[selectedOneId].setAttribute("src", "image/gess.png");
    cards[selectedTwoId].setAttribute("src", "image/gess.png");
  } else if (cardChosen[0] == cardChosen[1]) {
    cards[selectedOneId].setAttribute("src", "image/win.png");
    cards[selectedTwoId].setAttribute("src", "image/win.png");
    cards[selectedOneId].removeEventListener("click", flipCard);
    cards[selectedTwoId].removeEventListener("click", flipCard);
    cardWon.push(cardChosen);
  } else {
    cards[selectedOneId].setAttribute("src", "image/gess.png");
    cards[selectedTwoId].setAttribute("src", "image/gess.png");
  }
  cardChosen = [];
  cardChosenId = [];

  if (cardWon.length === cardArray.length / 2) {
    let result = document.createElement("h2");
    let reStart = document.createElement("button");
    reStart.innerText = "Restart";
    reStart.addEventListener("click", () => location.reload());
    result.innerText = "🎉You won the game 🎉";
    for (let i = 0; i < cards.length; i++) {
      cards[i].remove();
    }
    board.appendChild(result);
    board.appendChild(reStart);
  }
}

function flipCard() {
  let cardId = this.getAttribute("data-id");
  cardChosen.push(cardArray[cardId].name);
  cardChosenId.push(cardId);
  this.setAttribute("src", cardArray[cardId].src);
  if (cardChosenId.length === 2) {
    setTimeout(Check, 500);
  }
}

gameBoard();
