import Tennis from "./tennis.js";

describe("Tennis Game", () => {
  let game;

  beforeEach(() => {
    game = new Tennis();
  });

  it("Debería iniciar con un estado de 0 - 0 (love - love)", () => {
    expect(game.getScore()).toEqual("love - love");
  });
});8