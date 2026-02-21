// Exercicio 1

let nome = "Enzo Cardilli Cerneviva";
let idade = 19;
let aprovado = true;
let notas = [8, 9, 10];
let usuario = {
    email: "enzo@gmail.com",
    senha: 1234
}

console.log(`
    Nome: ${nome}\n
    Idade: ${idade}\n
    Aprovado: ${aprovado}\n
    Notas: ${notas}\n
    Usuario: ${usuario}\n
    `)

// Diferença entre null e undefined

// Null — ausência intencional de valor.
// O programador define explicitamente que não há informação.
// Ex: let x = null;

// Undefined — a variável existe, mas não recebeu valor.
// Foi declarada, porém não inicializada.
// Ex: let x;

// Exercício 2

let valorNulo = null;
let valorIndefinido;

if (valorNulo == null && valorIndefinido == undefined) {
    console.log(`
        Valor nulo: ${valorNulo} | Valor indefinido: ${valorIndefinido}
        `);
}