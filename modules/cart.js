export let cart = [];

class cartElement {
    product;
    qty;

    constructor(product) {
        this.product = product;
        this.qty = 1;
    }
}

export function genericCalc(func) {
    return func.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
}

export function emptyCart() {
    cart = [];
}

export function addToCart(productToAdd) {
    let productExists = false;
    cart.forEach(cartElement => {
            if (cartElement.product.reference === productToAdd.reference) {
                cartElement.qty++;
                productExists = true;
            }
        })
    if (!productExists) {
        cart.push(new cartElement(productToAdd));
    }

}