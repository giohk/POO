<?php
 class Pessoa {
    public $nome;
    public $idade;

    public function __construct($nome, $idade)
    {
        $this->nome = $nome;
        $this->idade = $idade;
    }
    public function apresentar (){
        echo "ola, sou{$this->nome} e tenho {$this->idade}";

    }
 }
 // a classe aluno ira herdar de pessoas

 class Professor extends Pessoa {
    public function ensinar (){
        echo "professor {$this->nome} esta ensinando ";
    }
 }
 //criando objetos
 
 $isa = new Aluno ("Isa", 49);
 $nadja= new Professor ("Nadja", 16);

 
 $isa->estudar();
 $nadja->apresentar();
 ?>