const router = express.Router()

router.get('/', (requisicao, resposta) => {
    resposta.send('Está rodando com nodemon')
})

router.post('/teste', (requisicao, resposta) => {
    resposta.send('Teste Nodemon REQ')
})

app.listen(PORT, () => {
    console.log(`Express está rodando na porta: ${PORT}`)
})


module.exports = router