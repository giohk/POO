<?php
abstract class Pessoa {
    public function __construct($nome){
        $this->nome=$nome;
    }
}
class Aluno extends Pessoa{
}

$rafael = new Aluno ("Rafael");
echo $rafael->nome . "É ele";

?>