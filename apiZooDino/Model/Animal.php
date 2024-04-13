<?php

    class Animal{
        public $idAnimal, $nomeAnimal, $imgAnimal, $descricaoAnimal, $idTerritorio;
        public function getIdAnimal(){
            return $this->idAnimal;
        }
        public function setIdAnimal($idAnimal){
            $this->idAnimal = $idAnimal;
        }

        public function getNomeAnimal(){
          return $this->nomeAnimal;
        }
        public function setNomeAnimal($nomeAnimal){
            $this->nomeAnimal = $nomeAnimal;
        }

        public function getImgAnimal(){
          return $this->imgAnimal;
        }
        public function setImgAnimal($imgAnimal){
            $this->imgAnimal= $imgAnimal;
        }
        
        public function getDescricaoAnimal(){
          return $this->descricaoAnimal;
        }
        public function setDescricaoAnimal($descricaoAnimal){
            $this->descricaoAnimal = $descricaoAnimal;
        }




    }
?>