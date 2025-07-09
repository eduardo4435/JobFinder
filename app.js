const express    = require('express');
const app        = express();
const db         = require('./db/connection')
const bodyParser = require('body-parser')

const PORT = 3000;

app.listen(PORT, function(){
    console.log(`O express esta rodando na porta ${PORT}`);
});

//body parser
app.use(bodyParser.urlencoded({ extended: false }));

//db connetion
db
    .authenticate()
    .then(() => {
        console.log("conectado com sucesso");
    })
    .catch(err => {
        console.log("Ocorreu um erro ao conectar")
    })

//routes
app.get('/', (req, res) => {
    res.end("Está funcionando!");
});

//jobs routes
app.use('/jobs', require('./routes/jobs'));