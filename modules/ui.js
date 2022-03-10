import {addToCart, cart, genericCalc} from "./cart.js";


let displayProduct = function (product) {
    const divProduct = document.createElement("div");
    divProduct.classList.add("product");
    document.querySelector("#product-list").appendChild(divProduct);

    const divPhoto = document.createElement("div");
    divPhoto.classList.add("photo");
    divProduct.appendChild(divPhoto);

    const spanCamera = document.createElement("span");
    spanCamera.classList.add("mdi", "mdi-camera");
    divPhoto.appendChild(spanCamera);

    const a = document.createElement("a");
    a.classList.add("product-add2cart");
    a.addEventListener("click", function (e) {
        addToCart(product);
        displayCart();
    });
    divPhoto.appendChild(a);

    const spanCart = document.createElement("span");
    spanCart.classList.add("mdi", "mdi-cart");
    a.appendChild(spanCart);

    const divDetails = document.createElement("div");
    divDetails.classList.add("details");
    divProduct.appendChild(divDetails);

    const divDetailsTop = document.createElement("div");
    divDetailsTop.classList.add("details-top");
    divDetails.appendChild(divDetailsTop);

    const strongRef = document.createElement("strong");
    strongRef.classList.add("bigger");
    strongRef.setAttribute("data-type", "ref");
    strongRef.textContent = product.reference;
    divDetailsTop.appendChild(strongRef);

    const strongPrix = document.createElement("strong");
    strongPrix.classList.add("bigger");
    strongPrix.setAttribute("data-type", "price");
    strongPrix.textContent = product.prix + "€";
    divDetailsTop.appendChild(strongPrix);

    const divDescription = document.createElement("div");
    divDescription.classList.add("details-description");
    const txtDesc = document.createTextNode(product.description);
    divDescription.appendChild(txtDesc);
    divDetails.appendChild(divDescription);
}

export function displayCart() {
    let productCount = genericCalc(cart.map(cartElement => cartElement.qty));
    let total = genericCalc(cart.map(cartElement => cartElement.product.prix * cartElement.qty));
    let cartTableHtmlArray = cart.map(cartItem => `
    <tr>
        <td data-type="ref">${cartItem.product.reference}</td>
        <td data-type="qte">${cartItem.qty}</td>
        <td data-type="amount">${cartItem.product.prix}</td>
    </tr>
    `);

    document.getElementById("total-products").textContent = productCount;
    document.getElementById("cart-content").innerHTML =
        cartTableHtmlArray.reduce(
            (previousProductCartHtml, currentProductCartHtml) =>
                previousProductCartHtml + currentProductCartHtml, ""
        );
    document.getElementById("cart-total").textContent = total;
}

export function buildProductList(productArray) {
    productArray.forEach(product => {
        displayProduct(product)
    })
    displayCart();
}