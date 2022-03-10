<?php
namespace custombox\controller;

use custombox\modele\Produit;
use custombox\modele\Categorie;
use custombox\modele\Boite;
class IndexController
{

private $container;

    public function __construct(\Slim\Container $c){
        $this->container = $c;
    }

    public function getProducts($rq,$rs,$args){
        $p = Produit::all();
        $v = new \custombox\vues\vueIndex($p);
        $rs->getBody()->write($v->render());
        return $rs;
    }

    public function getP(){
        $p = Produit::all();
        return $p;
    }
}