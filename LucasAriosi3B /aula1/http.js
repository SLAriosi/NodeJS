const { createServer } = require('http');

let servidor = createServer((requisicao, resposta) => {
    resposta.writeHead(200, {
        "Content-type" : "text/html"
    })

    resposta.write(`
        <meta charset="UTF-8">
        <h1>Hello World</h1>
        <p>Primeiro servidor NODE JS</p>
        <h2>Chinês Paga um Salgado pra nós do Escritório!!</h2>
        `)

    resposta.end()
})

servidor.listen(8000)
console.log("Ouvindo a Faixa 8000 da Rádio Chinês FM")