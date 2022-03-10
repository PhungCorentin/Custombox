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
