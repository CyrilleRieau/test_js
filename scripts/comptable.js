class Comptable {
    constructor() {
        this.calculette = new Calculette();
    }
    getBenefices(recettes, salaires, tva) {
        let recettesTaxees = this.calculette.calcul(recettes, tva, '*');
        if (recettesTaxees > salaires) {
            return this.calculette.calcul(recettesTaxees, salaires, '-');
        }
        return 'en faillite';
    }
}