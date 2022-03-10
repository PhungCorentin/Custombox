<?php

namespace custombox\vues;

class vueIndex{
    private array $array;
    private $product;
    
    function __construct(array $a){
        $this->array =$a;
    }
    
    public static function render(): mixed{
        $html = <<<END
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>CustomBox</title>
    <link rel="stylesheet" href="//cdn.materialdesignicons.com/5.4.55/css/materialdesignicons.min.css">
    <link rel="stylesheet" href="css/cart.css">
</head>
<body>
<main>
    <section id="products-wrapper">
			<span class="mdi mdi-magnify">
				<input type="text" id="product-search" placeholder="Rechercher un produit"/>
			</span>
        <div id="product-list">

        </div>
    </section>
    <section id="cart-wrapper">
        <div id="cart-header">
            <h2>Mon panier (<span id="total-products">5</span>)</h2>
            <a id="empty-cart">Vider le panier</a>
        </div>
        <table id="cart-content">
        </table>
        <div id="cart-footer">
            <strong className="bigger">Total :&nbsp;</strong>
            <span className="bigger" id="cart-total">3€</span>
        </div>
    </section>
</main>
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
<script type="module" src="./modules/main.js"></script>
</body>
</html>
END;
return $html;
    }
}