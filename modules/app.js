import {products, search} from "./products.js";
import {buildProductList, displayCart} from "./ui.js";
import {emptyCart} from "./cart.js";

export var init = function () {
    buildProductList(products);
    document.getElementById("product-search").addEventListener("keyup", function () {
        document.getElementById("product-list").innerHTML = "";
        buildProductList(search(document.getElementById("product-search").value));
    });
    document.getElementById("empty-cart").addEventListener("click",function () {
        emptyCart();
        displayCart();
    });
}
function addProduct(str) {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("txtHint").innerHTML = this.responseText;
    }
    xhttp.open("GET", "getcustomer.php?q="+str);
    xhttp.send();
}
