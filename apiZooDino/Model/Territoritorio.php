<?php

    class Territorio{
        public $idTerritorio, $nomeTerritorio, $imgTerritorio;
        public function getIdTerritorio(){
            return $this->idTerritorio;
        }
        public function setIdTerritorio($idTerritorio){
            $this->idTerritorio = $idTerritorio;
        }

        public function getNomeTerritorio(){
          return $this->nomeTerritorio;
        }
        public function setNomeTerritorio($nomeTerritorio){
            $this->nomeTerritorio = $nomeTerritorio;
        }

        public function getImgTerritorio(){
          return $this->imgTerritorio;
        }
        public function setImgTerritorio($imgTerritorio){
            $this->imgTerritorio= $imgTerritorio;
        }
    }
?>