let express = require("express")

let app = express()

app.get('/', (req,res) => {
    res.send("Primeira rota com Express")
})

app.get('/salgados', (req,res) => {
    console.log('Tão com fome?')
    res.send("Salgados da Cantina UniAlfa")
})

app.listen(8000, () => {
    console.log("A API está funcionando na porta 8000 do DJ Chinês")
})