const initials = document.getElementById('initials');
const saveScore = document.getElementById('saveScore');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const allScores = JSON.parse(localStorage.getItem("allScores")) || [];
console.log(allScores);

finalScore.innerText = mostRecentScore;

saveHighScore = (e) => {
    console.log("clicked save");
    e.preventDefault();


    const score = {
        score: mostRecentScore,
        name: initials.value
    };
    allScores.push(score);

    allScores.sort( (a,b) => {
        return b.score - a.score;
    });

    localStorage.setItem('allScores', JSON.stringify(allScores));
    window.location.assign("index.html");
    console.log(allScores);
};