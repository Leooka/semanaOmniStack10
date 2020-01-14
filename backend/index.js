const express = require('express');

const app = express();

//Métodos HTTP: get, post, put, delete

// Tipos de parâmetros:
// Query Params: request.query (Filtros, ordernação, paginação, ...)
// Route Params: request.params ( Identificar um recurso na alteração ou remoção )
// Body: request.body ( Dados para criação ou alteração de um registro)

// MongoDB (Não-relacional)

app.get('/', (request, response) => { 
    return response.json( { message: 'Hello World' } );
 });

app.listen(3333);    