var expect = chai.expect;

describe('startNewGame', () => {
    it('should start a new game with a shuffled deck', () => {
      const game = startNewGame();
      expect(game).to.exist;
      expect(game).to.be.an.instanceOf(Deck);
    });
  });
  
  
  
  
  
  