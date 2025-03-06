import tennisScore from "./Tennis.js";

describe("Tennis Score", () => {
    it("debería mostrar love - love cuando ambos jugadores tengan 0 puntos", () => {
        expect(tennisScore(0, 0)).toEqual("love - love");
    });

    it("debería mostrar 15 - 0 cuando el jugador 1 tiene 1 punto y el jugador 2 tiene 0", () => {
        expect(tennisScore(1, 0)).toEqual("15 - 0");
    });

    it("debería mostrar 30 - 0 cuando el jugador 1 tiene 2 puntos y el jugador 2 tiene 0", () => {
        expect(tennisScore(2, 0)).toEqual("30 - 0");
    });

    it("debería mostrar 40 - 0 cuando el jugador 1 tiene 3 puntos y el jugador 2 tiene 0", () => {
        expect(tennisScore(3, 0)).toEqual("40 - 0");
    });
    
    it("Debería retornar '0 - 15' cuando Jugador 1 tiene 0 puntos y Jugador 2 1", () => {
        expect(tennisScore(0, 1)).toEqual("0 - 15");
    });

    it("debería mostrar 0 - 30 cuando el jugador 1 tiene 0 puntos y el jugador 2 tiene 2", () => {
        expect(tennisScore(0, 2)).toEqual("0 - 30");
    });
});
