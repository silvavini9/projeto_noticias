var express = require('express');
var consign = require('consign');


var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

consign()

.include('app/routes')

.then('/config/dbConnection.js') // incluindo a conexão com o banco no consign
.then('/app/models') // inclui o diretório de models

.into(app);
//o consign reconhece todos os arquivos da pasta routes(faz um scan), pega esses
//módulos e inclui dentro do servidor - app

module.exports = app;//Retorna o módulo app