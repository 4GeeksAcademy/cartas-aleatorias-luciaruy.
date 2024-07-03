window.onload = function() {
  let palos = ["♦", "♥", "♠", "♣"];
  let values = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "K", "Q"];
  generateNewCard(values, palos);
};

function generateNewCard(numArr, paloArr) {
  let num = Math.floor(Math.random() * numArr.length);
  let palo = Math.floor(Math.random() * paloArr.length);

  let paloArriba = document.querySelector("#topPalo");
  let paloAbajo = document.querySelector("#bottomPalo");

  paloArriba.innerHTML = paloArr[palo];

  if (paloArr[palo] === "♥" || paloArr[palo] === "♦") {
    paloArriba.style.color = "red";
    paloAbajo.style.color = "red";
  }

  document.querySelector("#bottomPalo").innerHTML = paloArriba.innerHTML;
  document.querySelector("#Value").innerHTML = numArr[num];
}
