<?php

include 'cors.php';

$routes = [

    '/' => 'HomeController@index',
    '/homeSelectAll' => 'HomeController@show',
    '/sobre' => 'SobreController@index',

    // Rotas User
    '/userTeste' => 'UserController@teste',
    '/user' => 'UserController@index',
    '/userDestroy' => 'UserController@destroy',
    '/userInsert' => 'UserController@store',
    '/userShow' => 'UserController@show',
    '/userUpdate' => 'UserController@update',

    // Rotas Territorio
    '/territorio' => 'TerritorioController@index',
    '/territorioDestroy' => 'TerritorioController@destroy',
    '/territorioInsert' => 'TerritorioController@store',
    '/territorioShow' => 'TerritorioController@show',
    '/territorioUpdate' => 'TerritorioController@update',

    // Rotas Animal
    '/animal' => 'AnimalController@index',
    '/animalDestroy' => 'AnimalController@destroy',
    '/animalInsert' => 'AnimalController@store',
    '/animalShow' => 'AnimalController@show',
    '/animalUpdate' => 'AnimalController@update',

    // Adicione outras rotas conforme necessário
];

return $routes;