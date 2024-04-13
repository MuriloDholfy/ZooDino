<?php
header('Access-Control-Allow-Origin: *');

    require_once ('Conexao.php');

    
    class TerritorioDao{
        public static function insert($territorio){
            $conexao = Conexao::conectar();
            // Prepara a consulta SQL
            $query = "INSERT INTO tbterritorio (nomeTerritorio, imgTerritorio) VALUES (?,?)";
            $stmt = $conexao->prepare($query);
            $stmt->bindValue(1, $territorio['nomeTerritorio']);
            $stmt->bindValue(2, $territorio['imgTerritorio']);
            $stmt->execute();
                    // Retornar o ID do usuário inserido
        return $conexao->lastInsertId();
        }

        public static function selectAll(){
            $conexao = Conexao::conectar();
            $query = "SELECT * FROM tbTerritorio";
            $stmt = $conexao->prepare($query);
            $stmt->execute();
            return $stmt->fetchAll();
        }

        public static function selectById($id){
            $conexao = Conexao::conectar();
            $query = "SELECT * FROM tbterritorio WHERE id = ?";
            $stmt = $conexao->prepare($query);
            $stmt->bindValue(1, $id);
            $stmt->execute();
            return $stmt->fetch(PDO::FETCH_ASSOC);
        }
        public static function delete($id){
            $conexao = Conexao::conectar();
            $query = "DELETE FROM tbterritorio WHERE id = ?";
            $stmt = $conexao->prepare($query);
            $stmt->bindValue(1, $id);
            return  $stmt->execute();
        }
        public static function update($territorio) {
            $conexao = Conexao::conectar();
            // Prepara a consulta SQL
            $query = "UPDATE tbterritorio 
                      SET nomeTerritorio = ?, 
                      imgTerritorio = ?, 
                      WHERE idTerritorio = ?";
            $stmt = $conexao->prepare($query);
            $stmt->bindValue(1, $territorio['nomeTerritorio']);
            $stmt->bindValue(2, $territorio['imgTerritorio']);

            $stmt->bindValue(3, $territorio['idTerritorio']);
            $stmt->execute();
        
            // Fechar a conexão com o banco de dados
           // $conexao = null;
        }
        










        public static function checkCredentials($email, $senha){
            $conexao = Conexao::conectar();
            $query = "SELECT * FROM tbclient WHERE emailclient = ? and passwordClient = ?";
            $stmt = $conexao->prepare($query);
            $stmt->bindValue(1, $email);
            $stmt->bindValue(2, $senha);
            $stmt->execute();
            return $stmt->fetch(PDO::FETCH_ASSOC);
        }






    }
?>