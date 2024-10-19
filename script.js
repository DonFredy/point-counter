// Initial scores
let homeScore = 0;
let guestScore = 0;

// Function to update the  score
function updateScore(team, points) {
    if (team === 'home') {
        homeScore += points;
        document.getElementById('home-score').textContent = homeScore;
    } else if (team === 'guest') {
        guestScore += points;
        document.getElementById('guest-score').textContent = guestScore;
    }
}


// Function to reset both scores to 0
function resetGame() {
    homeScore = 0;
    guestScore = 0;
    document.getElementById('home-score').textContent = homeScore;
    document.getElementById('guest-score').textContent = guestScore;
}