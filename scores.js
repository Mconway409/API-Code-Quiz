const scoresList = document.getElementById("scoresList");
const allScores = JSON.parse(localStorage.getItem("allScores")) || [];

scoresList.innerHTML = allScores
    .map( score => {
        return `<li class="this-score">${score.name} - ${score.score}</li>`
    })
    .join("");

