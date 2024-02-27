let sistemaAcademico = "Sem Internet"
let name = "Lucas"
let pessoa = {
    nome: "Lucas",
    sobrenome: "Ariosi",

}

console.log(sistemaAcademico);
console.log(pessoa.nome)
console.log(pessoa.sobrenome)

let { readFile, writeFile } = require('fs')

writeFile('arquivo.txt', 'Terceiro Período de Sistemas UniAlfa', (error) => {
    if (error) {
        throw error
    } else {
        console.log("Salvo com Sucesso!!!")
    }
})

readFile("arquivo.txt", "UTF-8", (error, texto) => {
    if (error) {
        throw error;
    } else {
        console.log(texto)
    }
})