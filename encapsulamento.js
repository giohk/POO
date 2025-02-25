class Aluno{
    #nota
    constructor(nome, idade, nota) {
        //O constructor é um método tradicional
        this.nome = nome;
        this.idade = idade;
        this.#nota = nota;
        // # e pra "privar"
    }
    feliz = () => console.log (`${this.nome} de ${this.idade} anos está feliz por ter tirado ${this.#nota} pontos na prova de biologia.`);
}

const maria = new Aluno("maria" , 17 , 72)

maria.feliz();