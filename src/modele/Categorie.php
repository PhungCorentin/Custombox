<?php
namespace src\modele;
class Categorie extends \Illuminate\Database\Eloquent\Model
{
    protected $table = 'categorie';
    protected $primaryKey = 'id';
    public $timestamps = 'false';
}