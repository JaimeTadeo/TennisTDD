function tennisScore(player1Score, player2Score) {
    const scoreMap = ["love", "15", "30", "40"];

    switch (true) {
        case player1Score === 0 && player2Score === 0:
            return "love - love";
        case player1Score === 1 && player2Score === 0:
            return "15 - 0";
        case player1Score === 2 && player2Score === 0:
            return "30 - 0";
        case player1Score === 3 && player2Score === 0:
            return "40 - 0";
        case player1Score === 0 && player2Score === 1:
            return "0 - 15";
        case player1Score === 0 && player2Score === 2:
            return "0 - 30";
        case player1Score === 0 && player2Score === 3:
            return "0 - 40";
        case player1Score === 1 && player2Score === 2:
            return "15 - 30";
        case player1Score === 4 && player2Score === 3:
            return "Advantage for p1";
        case player1Score === 3 && player2Score === 4:
            return "Advantage for p2";
        case player1Score === 4 && player2Score === 4:
            return "Deuce";
        case player1Score === 5 && player2Score === 3:
            return "Game for p1";
        case player1Score === 3 && player2Score === 5:
            return "Game for p2";
        default:
            return "love - love";
    }
}

export default tennisScore;
