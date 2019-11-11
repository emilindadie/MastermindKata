


const Mastermind = require('../src/mastermind');

describe('Masterminf Test', () => {

    it('should find number of well placed colors', () => {
           
        //Arrange
        const mastermind = Object.create(Mastermind);
        const secret = ['red', 'blue'];
        const porposition = ['red', 'blue'];

        // Act 
        const output = mastermind.shouldFindNumberOfWellPlacedColors(secret, porposition);

        // Assert
        expect(output).toEqual(2);
    });


    it('should find number of misplaced colors', () => {
           
        //Arrange
        const mastermind = Object.create(Mastermind);
        const secret = ['red', 'blue', 'pink'];
        const porposition = ['blue', 'red', 'green'];

        // Act 
        const output = mastermind.shouldFindNumberOfMisPlacedColors(secret, porposition);

        // Assert
        expect(output).toEqual(2);
    });


    it('should evaluate combinaison', () => {
           
        //Arrange
        const mastermind = Object.create(Mastermind);
        const secret = ['red', 'yellow'];
        const porposition = ['blue', 'red'];

        // Act 
        const output = mastermind.evaluate(secret, porposition);

        // Assert
        expect(output).toEqual([0, 1]);
    });
  });
