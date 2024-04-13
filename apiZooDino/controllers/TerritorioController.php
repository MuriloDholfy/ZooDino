<?php

require_once(__DIR__ . '/../Dao/Conexao.php');
require_once(__DIR__ . '/../Dao/TerritorioDao.php');

// Permitir solicitações de qualquer origem


class TerritorioController{

    // Função para armazenar um novo contato
    public function store(){


        // Verifica se todos os campos necessários foram enviados
        $camposObrigatorios = ['nomeTerritorio', 'imgTerritorio'];
        foreach ($camposObrigatorios as $campo) {
            if (!isset($_POST[$campo]) || empty($_POST[$campo])) {
                // Se algum campo estiver faltando ou vazio, retorna uma resposta de erro
                http_response_code(402);
                echo json_encode(['mensagem' => 'Todos os campos são obrigatórios']);
                return;
            }
        }
        // Cria um array com os dados do usuário
        $territorio = [
            'nomeTerritorio' => $_POST['nomeTerritorio'],
            'imgTerritorio' => $_POST['imgTerritorio']
            
            
        ];
    
        try {
            // Insere o usuário no banco de dados
            $territorioDao = TerritorioDao::insert($territorio);
            // Retorna uma resposta de sucesso com os dados do usuário inserido
            $territorio['idTerritorio'] = $territorioDao;

            http_response_code(200);
            header('Content-Type: application/json');
            echo json_encode($territorio);
    
        } catch (Exception $e) {
            // Se ocorrer um erro durante a inserção, retorna uma resposta de erro com a mensagem de exceção
            http_response_code(500);
            echo json_encode(['mensagem' => 'Erro ao inserir o usuário: ' . $e->getMessage()]);
        }
    }
    
    // Função para exibir a lista de contatos
    public function index(){
        try {
            // Insere o usuário no banco de dados
            $territorios = territorioDao::selectAll();
            // Retorna uma resposta de sucesso com os dados do usuário inserido
            http_response_code(200);
            header('Content-Type: application/json');
            echo json_encode($territorios);
    
        } catch (Exception $e) {
            // Se ocorrer um erro durante a inserção, retorna uma resposta de erro com a mensagem de exceção
            http_response_code(500);
            echo json_encode(['mensagem' => 'Erro ao inserir o usuário: ' . $e->getMessage()]);
        }
    }

    public function show()
    {
        try {
            // Verifica se o ID do usuário foi fornecido através da requisição GET
            if (!isset($_GET['idTerritorio'])) {
                throw new Exception('ID do usuário não foi fornecido');
            }
    
            // Obtém o ID do usuário da requisição GET
            $idTerritorio = $_GET['idTerritorio'];
    
            // Obtém as informações do usuário com base no ID
            $territorio = territorioDao::selectById($idTerritorio);
    
            // Verifica se o usuário foi encontrado
            if (!$territorio) {
                // Se o usuário não for encontrado, retorna uma resposta de erro
                http_response_code(404);
                echo json_encode(['mensagem' => 'Usuário não encontrado']);
                return;
            }
    
            // Retorna uma resposta de sucesso com os dados do usuário
            http_response_code(201);
            header('Content-Type: application/json');
            echo json_encode($territorio);
    
        } catch (Exception $e) {
            // Se ocorrer um erro, retorna uma resposta de erro com a mensagem de exceção
            http_response_code(500);
            echo json_encode(['mensagem' => 'Erro ao buscar usuário: ' . $e->getMessage()]);
        }
    }

    public function destroy(){
        try {
            // Verifica se o ID do usuário foi fornecido através da requisição POST
            if (!isset($_GET['idTerritorio'])) {
                throw new Exception('ID do usuário não foi fornecido');
            }

            // Obtém o ID do usuário da requisição POST
            $idTerritorio = $_GET['idTerritorio'];

            // Verifica se o usuário com o ID fornecido existe
            $territorio = territorioDao::delete($idTerritorio);
            if (!$territorio) {
                // Se o usuário não for encontrado, retorna uma resposta de erro
                http_response_code(404);
                echo json_encode(['mensagem' => 'Usuário não encontrado']);
                return;
            }

            // Deleta o usuário do banco de dados
            territorioDao::delete($idTerritorio);

            // Retorna uma resposta de sucesso
            http_response_code(200);
            echo json_encode(['mensagem' => 'Usuário deletado com sucesso']);

        } catch (Exception $e) {
            // Se ocorrer um erro, retorna uma resposta de erro com a mensagem de exceção
            http_response_code(500);
            echo json_encode(['mensagem' => 'Erro ao deletar usuário: ' . $e->getMessage()]);
        }
    }

    public function update(){
        // Verifica se o ID do usuário foi enviado
        if (!isset($_POST['idTerritorio']) || empty($_POST['idTerritorio'])) {
            // Se o ID estiver faltando ou vazio, retorna uma resposta de erro
            http_response_code(400); // 400 Bad Request
            echo json_encode(['mensagem' => 'O ID do usuário é obrigatório']);
            return;
        }
    
        // Verifica se todos os campos necessários foram enviados
        $camposObrigatorios = ['nomeTerritorio', 'imgTerritorio'];
        foreach ($camposObrigatorios as $campo) {
            if (!isset($_POST[$campo]) || empty($_POST[$campo])) {
                // Se algum campo estiver faltando ou vazio, retorna uma resposta de erro
                http_response_code(400); // 400 Bad Request
                echo json_encode(['mensagem' => 'Todos os campos são obrigatórios']);
                return;
            }
        }
    
        // Cria um array com os dados do usuário
        $territorio = [
            'idTerritorio' => $_POST['idTerritorio'],
            'imgTerritorio' => $_POST['imgTerritorio'],
            'nomeTerritorio' => $_POST['nomeTerritorio'],
                
        ];
    
        try {
            // Atualiza os dados do usuário no banco de dados
            territorioDao::update($territorio);
    
            // Retorna uma resposta de sucesso com os dados do usuário atualizados
            http_response_code(200);
            header('Content-Type: application/json');
            echo json_encode($territorio);
    
        } catch (Exception $e) {
            // Se ocorrer um erro durante a atualização, retorna uma resposta de erro com a mensagem de exceção
            http_response_code(500); // 500 Internal Server Error
            echo json_encode(['mensagem' => 'Erro ao atualizar o usuário: ' . $e->getMessage()]);
        }
    }
    




}