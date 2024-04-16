<?php

require_once(__DIR__ . '/../Dao/Conexao.php');
require_once(__DIR__ . '/../Dao/AnimalDao.php');

// Permitir solicitações de qualquer origem


class AnimalController{

    // Função para armazenar um novo contato
    public function store(){


        // Verifica se todos os campos necessários foram enviados
        $camposObrigatorios = ['nomeAnimal', 'imgAnimal', 'descricaoAnimal', 'idTerritorio'];
        foreach ($camposObrigatorios as $campo) {
            if (!isset($_POST[$campo]) || empty($_POST[$campo])) {
                // Se algum campo estiver faltando ou vazio, retorna uma resposta de erro
                http_response_code(402);
                echo json_encode(['mensagem' => 'Todos os campos são obrigatórios']);
                return;
            }
        }
        // Cria um array com os dados do usuário
        $animal = [
            'nomeAnimal' => $_POST['nomeAnimal'],
            'imgAnimal' => $_POST['imgAnimal'],
            'descricaoAnimal' => $_POST['descricaoAnimal'],
            'idTerritorio' => $_POST['idTerritorio'],
            
        ];
    
        try {
            // Insere o usuário no banco de dados
            $animalDao = AnimalDao::insert($animal);
            // Retorna uma resposta de sucesso com os dados do usuário inserido
            $animal['idAnimal'] = $animalDao;

            http_response_code(200);
            header('Content-Type: application/json');
            echo json_encode($animal);
    
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
            $animals = animalDao::selectAll();
            // Retorna uma resposta de sucesso com os dados do usuário inserido
            http_response_code(200);
            header('Content-Type: application/json');
            echo json_encode($animals);
    
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
            if (!isset($_GET['idAnimal'])) {
                throw new Exception('ID do usuário não foi fornecido');
            }
    
            // Obtém o ID do usuário da requisição GET
            $idAnimal = $_GET['idAnimal'];
    
            // Obtém as informações do usuário com base no ID
            $animal = animalDao::selectById($idAnimal);
    
            // Verifica se o usuário foi encontrado
            if (!$animal) {
                // Se o usuário não for encontrado, retorna uma resposta de erro
                http_response_code(404);
                echo json_encode(['mensagem' => 'Usuário não encontrado']);
                return;
            }
    
            // Retorna uma resposta de sucesso com os dados do usuário
            http_response_code(201);
            header('Content-Type: application/json');
            echo json_encode($animal);
    
        } catch (Exception $e) {
            // Se ocorrer um erro, retorna uma resposta de erro com a mensagem de exceção
            http_response_code(500);
            echo json_encode(['mensagem' => 'Erro ao buscar usuário: ' . $e->getMessage()]);
        }
    }

    public function destroy(){
        try {
            // Verifica se o ID do usuário foi fornecido através da requisição POST
            if (!isset($_GET['idAnimal'])) {
                throw new Exception('ID do usuário não foi fornecido');
            }

            // Obtém o ID do usuário da requisição POST
            $idAnimal = $_GET['idAnimal'];

            // Verifica se o usuário com o ID fornecido existe
            $animal = animalDao::delete($idAnimal);
            if (!$animal) {
                // Se o usuário não for encontrado, retorna uma resposta de erro
                http_response_code(404);
                echo json_encode(['mensagem' => 'Usuário não encontrado']);
                return;
            }

            // Deleta o usuário do banco de dados
            animalDao::delete($idAnimal);

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
        if (!isset($_POST['idAnimal']) || empty($_POST['idAnimal'])) {
            // Se o ID estiver faltando ou vazio, retorna uma resposta de erro
            http_response_code(400); // 400 Bad Request
            echo json_encode(['mensagem' => 'O ID do usuário é obrigatório']);
            return;
        }
    
        // Verifica se todos os campos necessários foram enviados
        $camposObrigatorios = ['nomeAnimal', 'imgAnimal', 'descriçãoAnimal', 'epocaAcasalamentoAnimal',];
        foreach ($camposObrigatorios as $campo) {
            if (!isset($_POST[$campo]) || empty($_POST[$campo])) {
                // Se algum campo estiver faltando ou vazio, retorna uma resposta de erro
                http_response_code(400); // 400 Bad Request
                echo json_encode(['mensagem' => 'Todos os campos são obrigatórios']);
                return;
            }
        }
    
        // Cria um array com os dados do usuário
        $animal = [
            'idAnimal' => $_POST['idAnimal'],
            'imgAnimal' => $_POST['imgAnimal'],
            'nomeAnimal' => $_POST['nomeAnimal'],
            'descricaoAnimal' => $_POST['descricaoAnimal'],
  
        ];
    
        try {
            // Atualiza os dados do usuário no banco de dados
            animalDao::update($animal);
    
            // Retorna uma resposta de sucesso com os dados do usuário atualizados
            http_response_code(200);
            header('Content-Type: application/json');
            echo json_encode($animal);
    
        } catch (Exception $e) {
            // Se ocorrer um erro durante a atualização, retorna uma resposta de erro com a mensagem de exceção
            http_response_code(500); // 500 Internal Server Error
            echo json_encode(['mensagem' => 'Erro ao atualizar o usuário: ' . $e->getMessage()]);
        }
    }
    




}