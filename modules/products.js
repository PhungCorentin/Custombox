export let products = [];

class Produit {
    reference;
    prix;
    description;

    constructor(ref, prix, desc) {
        this.reference = ref;
        this.prix = prix;
        this.description = desc;
    }
}

export function search(keywords) {
    return products.filter(product => (product.reference).includes(keywords) || (product.description).includes(keywords));
}

products.push(new Produit("ref1", 1.1, "ref 1 prix 11.11"),
    new Produit("ref2", 2.2, "ref 2 prix 22.22"),
    new Produit("ref3", 3.3, "ref 3 prix 33.33"),
    new Produit("ref4", 4.4, "ref 4 prix 44.44"));
