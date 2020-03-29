// Arquivo principal da aplicação
const express     = require('express'); // Importando Express (pacote)
const cors        = require('cors'); 
const routes      = require('./routes'); // Importando Routes (pasta)
const { errors }  = require('celebrate'); 


const app = express();

app.use(cors());
app.use(express.json()); // Converter as requisiçoes em um JSON
app.use(routes); // Tem que ser abaixo do 'app.use(express.json());'
app.use(errors());

/* 
    METODOS HTTP:

    GET:    Buscar/listar uma informação do back-end
    POST:   Criar uma informaçao no back-end 
    PUT:    Alterar uma informação no back-end
    DELETE: Deletar uma informação no back-end 
 */

 /* 
    TIPOS DE PARAMETROS:

    QUERY PARAMS: Parâmetros nomeados enviados na rota após '?' (filtros, paginação)
    ROUTE PARAMS: Parâmetros utilizados para identificar recursos
    REQUEST BODY: Corpo da requisição, utilizado para criar ou alterar recursos

 */
module.exports = app;  //Qual porta a aplicaçao vai ouvir
