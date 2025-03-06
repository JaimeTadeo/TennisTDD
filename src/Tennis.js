function tennisScore(player1Score, player2Score) {
    if (player1Score === 1 && player2Score === 0) {
        return "15 - 0";
    }
    if (player1Score === 2 && player2Score === 0) {
        return "30 - 0";
    }
    if (player1Score === 3 && player2Score === 0) {
        return "40 - 0";
    }
    if (player1Score === 0 && player2Score === 1) {
        return "0 - 15";
    }
    if (player1Score === 0 && player2Score === 2) {
        return "0 - 30";
    }
    if (player1Score === 0 && player2Score === 3) {
        return "0 - 40";
    }
    if (player1Score === 1 && player2Score === 2) {
        return "15 - 30";
    }
    if (player1Score === 2 && player2Score === 2) {
        return "Deuce";
    if (player1Score >= 4 && player2Score >= 3 && (player1Score - player2Score === 1)) {
        return "Advantage for p1";
    }
    return "love - love"; 
}

export default tennisScore;
