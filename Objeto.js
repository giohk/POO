// criando um objeto aluno
const aluno = {
    nome: "Giovanna",
    idade: 16,

    estudar: () => console.log
    (`${aluno.nome} está estudando.`),
};

console.log(aluno.nome);
aluno.estudar();