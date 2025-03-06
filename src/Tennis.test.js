import tennisScore from "./Tennis.js";

describe("Tennis Score", () => {
    it("debería mostrar love - love cuando ambos jugadores tengan 0 puntos", () => {
        expect(tennisScore(0, 0)).toEqual("love - love");
    });

    it("debería mostrar 15 - 0 cuando el jugador 1 tiene 1 punto y el jugador 2 tiene 0", () => {
        expect(tennisScore(1, 0)).toEqual("15 - 0");
    });
});
