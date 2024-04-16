<?php
include 'cors.php';

// Inclui o arquivo de rotas
$routes = require './routes.php';
//echo $string;
// Obtém a URL da requisição
$url = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

// Obtém o nome da pasta principal (diretório raiz do projeto)
$baseDir = basename(dirname($_SERVER['SCRIPT_NAME']));

// Remove o nome da pasta principal da URL
$url = str_replace('/' . $baseDir, '', $url);

// Verifica se a rota existe
if (array_key_exists($url, $routes)) {
    // Obtém o controlador e o método da rota
    list($controllerName, $methodName) = explode('@', $routes[$url]);
    
    // Inclui o arquivo do controlador
    require_once 'controllers/' . $controllerName . '.php';
    
    // Cria uma instância do controlador e chama o método
    $controller = new $controllerName();
    $controller->$methodName();
} else {
    // Rota não encontrada
    http_response_code(404);
    echo 'Página não encontrada';
}