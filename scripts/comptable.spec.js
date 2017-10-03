describe('class Comptable', () => {
    let comptable;
    let spyCalcul;
    beforeEach(() => {
        comptable = new Comptable();
        spyCalcul = jasmine.createSpy('calcul() spy');
        comptable.calculette.calcul = spyCalcul;

        /* let mockCalculette = {
            calcul: (a, b, operateur) => {
                return 4;
            }
        };
        comptable.calculette = mockCalculette;
    */
    });

    it('should return "en faillite"', () => {
        spyCalcul.and.returnValue(4);
        expect(comptable.getBenefices(100, 5, 100)).toBe('en faillite');
        expect(comptable.calculette.calcul).toHaveBeenCalledWith(100, 100, '*');
    });
    it('should return 4', () => {
        spyCalcul.and.returnValue(4);
        expect(comptable.getBenefices(100, 3, 100)).toBe(4);
    });
})