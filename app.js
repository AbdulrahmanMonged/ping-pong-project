// ######## buttons ######
const scoreOne = document.querySelector("#scoreOne")
const scoreTwo = document.querySelector("#scoreTwo")
const reset = document.querySelector("#reset")

// ####### scores ########
const playerOneScore = document.querySelector("#playerOneScore")
const playerTwoScore = document.querySelector("#playerTwoScore")

function addOne(score) {
    score.innerText = +score.innerText + 1;
}
// ####### Select ######
const select = document.querySelector('select')
for (let i = 5; i <= 10; i++) {
    const option = document.createElement('option')
    option.innerText = i;
    select.append(option)
}

function winner(score1, score2) {
    score2.style.color = "hsl(348, 100%, 61%)"
    score1.style.color = "hsl(141, 53%, 53%)"
    scoreOne.disabled = true;
    scoreTwo.disabled = true;
    select.disabled = true;

}
// ##### Events ########
scoreOne.addEventListener('click', function () {
    addOne(playerOneScore);
    if (+playerOneScore.innerText === +select.value) {
        winner(playerOneScore, playerTwoScore)
    }
})

scoreTwo.addEventListener('click', function () {
    addOne(playerTwoScore);
    if (+playerTwoScore.innerText === +select.value) {
        winner(playerTwoScore, playerOneScore)
    }
})

reset.addEventListener('click', function () {
    playerOneScore.innerText = 0;
    playerTwoScore.innerText = 0;
    playerOneScore.style.color = ""
    playerTwoScore.style.color = ""
    scoreOne.disabled = false;
    scoreTwo.disabled = false;
    select.disabled = false;
})
