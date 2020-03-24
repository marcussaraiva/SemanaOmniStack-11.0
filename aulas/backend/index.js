// Arquivo principal da aplicação

const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Marcus Saraiva'
    });
}); //Qual rota a aplicaçao vai receber (sem nada, rota raiz)

app.listen(3333);   //Qual porta a aplicaçao vai ouvir
