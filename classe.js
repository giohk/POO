// Criando a classe Aluno
class Aluno {
    constructor(nome, idade) {
      // O constructor deve ser um método tradicional
      this.nome = nome;
      this.idade = idade;
    }
  
    estudar = () => console.log(`${this.nome} está estudando.`)
    anos = () => console.log(`tem ${this.idade} anos.`)
    feliz = () => console.log (`A ${this.nome} está feliz`)
  }
   

  // Criando objetos (alunos)
  const maria = new Aluno("maria", 17);
  
  console.log(maria.nome); // Pedro
  maria.estudar(); // Pedro está estudando.
  maria.anos();
  maria.feliz();

  const giovanna = new Aluno("giovanna", 17);

  console.log(giovanna.nome.idade);
  giovanna.estudar();
  giovanna.anos();
  giovanna.feliz();