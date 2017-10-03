describe('class calculette', () => {
    let calculette;
    beforeEach(() => {
        calculette = new Calculette();
    });
    it('should add 2 to 3', () => {
        expect(calculette.calcul(2, 3, '+')).toBe(5);
    })
    it('should substract 3 to 5', () => {
        expect(calculette.calcul(5, 3, '-')).toBe(2);
    });
    it('should multiply 2 to 3', () => {
        expect(calculette.calcul(2, 3, '*')).toBe(6);
    });
    it('should divide 6 by 3', () => {
        expect(calculette.calcul(6, 3, '/')).toBe(2);
    });

});