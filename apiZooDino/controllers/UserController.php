<?php

require_once(__DIR__ . '/../Dao/Conexao.php');
require_once(__DIR__ . '/../Dao/UserDao.php');

// Permitir solicitações de qualquer origem


class UserController{

    // Função para armazenar um novo contato
    public function store(){
        // Verifica se todos os campos necessários foram enviados
        $camposObrigatorios = ['nome', 'email', 'senha', 'telefone'];
        foreach ($camposObrigatorios as $campo) {
            if (!isset($_POST[$campo]) || empty($_POST[$campo])) {
                // Se algum campo estiver faltando ou vazio, retorna uma resposta de erro
                http_response_code(402);
                echo json_encode(['mensagem' => 'Todos os campos são obrigatórios']);
                return;
            }
        }
        // Cria um array com os dados do usuário
        $user = [
            'nome' => $_POST['nome'],
            'email' => $_POST['email'],
            'senha' => $_POST['senha'],
            'telefone' => $_POST['telefone']
            
        ];
    
        try {
            // Insere o usuário no banco de dados
            $userDao = UserDao::insert($user);
            // Retorna uma resposta de sucesso com os dados do usuário inserido
            $user['id'] = $userDao;

            http_response_code(200);
            header('Content-Type: application/json');
            echo json_encode($user);
    
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
            $users = UserDao::selectAll();
            // Retorna uma resposta de sucesso com os dados do usuário inserido
            http_response_code(200);
            header('Content-Type: application/json');
            echo json_encode($users);
    
        } catch (Exception $e) {
            // Se ocorrer um erro durante a inserção, retorna uma resposta de erro com a mensagem de exceção
            http_response_code(500);
            echo json_encode(['mensagem' => 'Erro ao inserir o usuário: ' . $e->getMessage()]);
        }
    }

    public function show(){
        try {
            // Verifica se o ID do usuário foi fornecido através da requisição GET
            if (!isset($_GET['id'])) {
                throw new Exception('ID do usuário não foi fornecido');
            }
    
            // Obtém o ID do usuário da requisição GET
            $id = $_GET['id'];
    
            // Obtém as informações do usuário com base no ID
            $user = UserDao::selectById($id);
    
            // Verifica se o usuário foi encontrado
            if (!$user) {
                // Se o usuário não for encontrado, retorna uma resposta de erro
                http_response_code(404);
                echo json_encode(['mensagem' => 'Usuário não encontrado']);
                return;
            }
    
            // Retorna uma resposta de sucesso com os dados do usuário
            http_response_code(201);
            header('Content-Type: application/json');
            echo json_encode($user);
    
        } catch (Exception $e) {
            // Se ocorrer um erro, retorna uma resposta de erro com a mensagem de exceção
            http_response_code(500);
            echo json_encode(['mensagem' => 'Erro ao buscar usuário: ' . $e->getMessage()]);
        }
    }

    public function destroy(){
        try {
            // Verifica se o ID do usuário foi fornecido através da requisição POST
            if (!isset($_GET['id'])) {
                throw new Exception('ID do usuário não foi fornecido');
            }

            // Obtém o ID do usuário da requisição POST
            $id = $_GET['id'];

            // Verifica se o usuário com o ID fornecido existe
            $user = UserDao::delete($id);
            if (!$user) {
                // Se o usuário não for encontrado, retorna uma resposta de erro
                http_response_code(404);
                echo json_encode(['mensagem' => 'Usuário não encontrado']);
                return;
            }

            // Deleta o usuário do banco de dados
            UserDao::delete($id);

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
        if (!isset($_POST['id']) || empty($_POST['id'])) {
            // Se o ID estiver faltando ou vazio, retorna uma resposta de erro
            http_response_code(400); // 400 Bad Request
            echo json_encode(['mensagem' => 'O ID do usuário é obrigatório']);
            return;
        }
    
        // Verifica se todos os campos necessários foram enviados
        $camposObrigatorios = ['nome', 'email', 'senha', 'telefone', 'cep', 'endereco', 'numero', 'bairro', 'cidade'];
        foreach ($camposObrigatorios as $campo) {
            if (!isset($_POST[$campo]) || empty($_POST[$campo])) {
                // Se algum campo estiver faltando ou vazio, retorna uma resposta de erro
                http_response_code(400); // 400 Bad Request
                echo json_encode(['mensagem' => 'Todos os campos são obrigatórios']);
                return;
            }
        }
    
        // Cria um array com os dados do usuário
        $user = [
            'id' => $_POST['id'],
            'nome' => $_POST['nome'],
            'email' => $_POST['email'],
            'senha' => $_POST['senha'],
            'telefone' => $_POST['telefone'],
            'cep' => $_POST['cep'],
            'endereco' => $_POST['endereco'],
            'numero' => $_POST['numero'],
            'bairro' => $_POST['bairro'],
            'cidade' => $_POST['cidade']
        ];
    
        try {
            // Atualiza os dados do usuário no banco de dados
            UserDao::update($user);
    
            // Retorna uma resposta de sucesso com os dados do usuário atualizados
            http_response_code(200);
            header('Content-Type: application/json');
            echo json_encode($user);
    
        } catch (Exception $e) {
            // Se ocorrer um erro durante a atualização, retorna uma resposta de erro com a mensagem de exceção
            http_response_code(500); // 500 Internal Server Error
            echo json_encode(['mensagem' => 'Erro ao atualizar o usuário: ' . $e->getMessage()]);
        }
    }
    




}