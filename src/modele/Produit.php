<?php
namespace src\modele;
class Produit extends \Illuminate\Database\Eloquent\Model
{
    protected $table = 'produit';
    protected $primaryKey = 'id';
    public $timestamps = 'false';
}