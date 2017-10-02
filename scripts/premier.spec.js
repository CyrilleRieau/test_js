it('should be true', () => {
    expect(true).toBe(true);
});
describe('function additionner', () => {
    it('should add 2 to 2', () => {
        let resultat = additionner(2, 2);
        expect(resultat).toBe(4);
    });
    it('should add with negative numbers', () => {
        expect(additionner(-2, -2)).toBe(-4);
    });
    // it('should concatenate strings params', () => {
    //     expect(additionner('Bloup', 2)).toBe('Bloup2');
    // });
    it('should throw error with string params', () => {
        expect(additionner.bind(null, 'bloup', 2)).
            //toThrow(new Error('Expect numbers as parameters'));
        toThrowError();
    });
})