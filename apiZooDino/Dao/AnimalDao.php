<?php
header('Access-Control-Allow-Origin: *');

    require_once ('Conexao.php');

    
    class AnimalDao{
        public static function insert($animal){
            $conexao = Conexao::conectar();
            // Prepara a consulta SQL
            $query = "INSERT INTO tbanimal (nomeAnimal, imgAnimal, descricaoAnimal, idTerritorio) VALUES (?,?,?,?)";
            $stmt = $conexao->prepare($query);
            $stmt->bindValue(1, $animal['nomeAnimal']);
            $stmt->bindValue(2, $animal['imgAnimal']);
            $stmt->bindValue(3, $animal['descricaoAnimal']);
            $stmt->bindValue(4, $animal['idTerritorio']);
            $stmt->execute();
                    // Retornar o ID do usuário inserido
        return $conexao->lastInsertId();
        }

        public static function selectAll(){
            $conexao = Conexao::conectar();
            $query = "SELECT * FROM tbAnimal";
            $stmt = $conexao->prepare($query);
            $stmt->execute();
            return $stmt->fetchAll();
        }

        public static function selectById($id){
            $conexao = Conexao::conectar();
            $query = "SELECT * FROM tbanimal WHERE id = ?";
            $stmt = $conexao->prepare($query);
            $stmt->bindValue(1, $id);
            $stmt->execute();
            return $stmt->fetch(PDO::FETCH_ASSOC);
        }
        public static function delete($id){
            $conexao = Conexao::conectar();
            $query = "DELETE FROM tbanimal WHERE id = ?";
            $stmt = $conexao->prepare($query);
            $stmt->bindValue(1, $id);
            return  $stmt->execute();
        }
        public static function update($animal) {
            $conexao = Conexao::conectar();
            // Prepara a consulta SQL
            $query = "UPDATE tbanimal 
                      SET nomeAnimal = ?, 
                          imgAnimal = ?, 
                          descricaoAnimal = ?, 
                          idTerritorio = ?,
                      WHERE idAnimal = ?";
            $stmt = $conexao->prepare($query);
            $stmt->bindValue(1, $animal['nomeAnimal']);
            $stmt->bindValue(2, $animal['imgAnimal']);
            $stmt->bindValue(3, $animal['descricaoAnimal']);
            $stmt->bindValue(4, $animal['idTerritorio']);
            $stmt->bindValue(5, $animal['idAnimal']);
            $stmt->execute();
        
            // Fechar a conexão com o banco de dados
           // $conexao = null;
        }
        










        public static function checkCredentials($imgAnimal, $descriçãoAnimal){
            $conexao = Conexao::conectar();
            $query = "SELECT * FROM tbclient WHERE imgAnimalclient = ? and passwordClient = ?";
            $stmt = $conexao->prepare($query);
            $stmt->bindValue(1, $imgAnimal);
            $stmt->bindValue(2, $descriçãoAnimal);
            $stmt->execute();
            return $stmt->fetch(PDO::FETCH_ASSOC);
        }






    }
?>