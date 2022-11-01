const dices = [
	"dice1",
	"dice2",
	"dice3",
	"dice4",
	"dice5",
	"dice6"
]
const dice1 = dices[Math.floor(Math.random()*dices.length)];
const dice2 = dices[Math.floor(Math.random()*dices.length)];
const image1 = document.querySelector(".img1");
const image2 = document.querySelector(".img2");

image1.setAttribute("src", `images/${dice1}.png`);
image2.setAttribute("src", `images/${dice2}.png`);

const result = document.querySelector("h1");
console.log(result.innerText="hello");
if (dice1 > dice2) {
	result.innerText = "player1 wins";
} else if (dice1 < dice2) {
	result.innerText = "player2 wins";
} else {
	result.innerText = "Tie"
}
