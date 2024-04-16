<?php

    class User{
        public $id, $nome, $sobrenome, $cpf, $nasc, $email, $password;

        public function getId(){
            return $this->id;
        }
        public function setId($id){
            $this->id = $id;
        }

        public function getNome(){
          return $this->nome;
        }
        public function setNome($nome){
            $this->nome = $nome;
        }

        public function getSobrenome(){
          return $this->sobrenome;
        }
        public function setSobrenome($sobrenome){
            $this->sobrenome= $sobrenome;
        }
        public function getNasc(){
          return $this->nasc;
        }
        public function setNasc($nasc){
            $this->nasc= $nasc;
        }

        public function getCpf(){
          return $this->cpf;
        }
        public function setCpf($cpf){
            $this->cpf= $cpf;
        }
        
        public function getEmail(){
          return $this->email;
        }
        public function setEmail($email){
            $this->email = $email;
        }

        public function getPassword(){
          return $this->password;
        }
        public function setPassword($password){
            $this->password = $password;
        }




    }
?>