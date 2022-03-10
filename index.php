<?php

use \Psr\Http\Message\ResponseInterface as Response;
use \Psr\Http\Message\ServerRequestInterface as Request;
use custombox\vues\vueIndex;


require __DIR__ .'/vendor/autoload.php';
require __DIR__ .'/src/conf/conf.php';

boot_eloquent(__DIR__ . '/src/conf/conf.ini');

$c = new \Slim\Container(['settings'=>[
    'displayErrorDetails'=>true
]]);

$app = new \Slim\App($c);

$app->get('/', function (Request $request, Response $response, array $args) {
    $v = new \custombox\vues\vueIndex();
    $response->getBody()->write($v::render());
    return $response;
});

$app->run();