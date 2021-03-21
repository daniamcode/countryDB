import resultsNumber from '../resultsNumber';

describe('resultsNumber function', () => {
    it('should return right response', () => {
        const characters = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8}, {id: 9}, {id: 10}]
        const idSmaller = 8
        const idGreater = 2

        const result = 5

        expect(resultsNumber(characters, idSmaller, idGreater)).toEqual(result);
    })
})