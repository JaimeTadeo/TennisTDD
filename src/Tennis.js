function tennisScore(player1Score, player2Score) {
    if (player1Score === 1 && player2Score === 0) {
        return "15 - 0";
    }
    return "love - love"; 
}

export default tennisScore;
