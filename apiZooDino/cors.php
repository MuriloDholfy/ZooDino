<?php
// toda as partes da API podem acessar arquivo;
header('Access-Control-Allow-Origin: *');
/* um cabeçalho que, quando definido como true,
 instruido os navegadores a export a resposta ao codigo javascript do 
 front-end. As crendenciais consistem em cookies, cabeçalhos de autorizção*/
header('Access-Control-Allow-Credentials: true');
/*é o que meu sistema ionic vai poder fazer, post= informação,
get= recupera as informações, opções= configurações.*/ 
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
// é obrigatorio a autorização, true.//
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
//tipo de conteudo aplicado através do json, utf-8 aceita qualquer caractere//
header('Content-Type: application/json; charset=utf-8'); 
// Permitir o cache da resposta por 1 hora (3600 segundos)
header('Access-Control-Max-Age: 3600');
// Permitir apenas determinados domínios de origem em vez de qualquer origem
header('Access-Control-Allow-Origin: http://localhost:8081/');
?>