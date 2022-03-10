export let products = [];

class Produit {
    id;
    titre;
    description;
    categorie;
    poids;


    constructor(id, titre, description, categorie, poids) {
        this.id = id;
        this.titre = titre;
        this.description = description;
        this.categorie = categorie;
        this.poids = poids;
    }
}

export function search(keywords) {
    return products.filter(product => (product.reference).includes(keywords) || (product.description).includes(keywords));
}

export function pushProduct(p){
    products.push(p);
}

products.push(
    new Produit("ref1", 1.1, "ref 1 prix 11.11"),
    new Produit("ref2", 2.2, "ref 2 prix 22.22"),
    new Produit("ref3", 3.3, "ref 3 prix 33.33"));
